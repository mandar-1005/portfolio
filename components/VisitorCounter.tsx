import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';

const VisitorCounter: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        console.log('Starting visitor count update...');
        
        // Reference to the visitor count document
        const visitorDoc = doc(db, 'analytics', 'visitorCount');
        
        console.log('Getting current count...');
        // Get the current count
        const docSnap = await getDoc(visitorDoc);
        
        if (docSnap.exists()) {
          // Document exists, increment the count
          const currentCount = docSnap.data().count;
          console.log('Current count:', currentCount);
          
          await setDoc(visitorDoc, { count: increment(1) }, { merge: true });
          setVisitorCount(currentCount + 1);
          console.log('Updated count to:', currentCount + 1);
        } else {
          // Document doesn't exist, create it with count 1
          console.log('Creating new visitor count document...');
          await setDoc(visitorDoc, { count: 1 });
          setVisitorCount(1);
          console.log('Created with count: 1');
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setVisitorCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    updateVisitorCount();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 z-40 bg-white/80 dark:bg-dark-navy/80 backdrop-blur-sm border border-slate-200/50 dark:border-light-slate/30 rounded-lg px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-mono text-slate-600 dark:text-slate-400">Connecting...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 z-40 bg-red-50 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/50 dark:border-red-800/30 rounded-lg px-4 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-sm font-mono text-red-600 dark:text-red-400">Connection failed</span>
        </div>
      </div>
    );
  }

  if (visitorCount === null) {
    return null; // Don't show anything if there's an error
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white/80 dark:bg-dark-navy/80 backdrop-blur-sm border border-slate-200/50 dark:border-light-slate/30 rounded-lg px-4 py-2 shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
          <span className="text-brand font-semibold">{visitorCount.toLocaleString()}</span> visitors
        </span>
      </div>
    </div>
  );
};

export default VisitorCounter; 