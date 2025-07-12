import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const FirebaseTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing...');
  const [collections, setCollections] = useState<string[]>([]);

  useEffect(() => {
    const testConnection = async () => {
      try {
        setStatus('Connecting to Firebase...');
        
        // Try to list collections to test connection
        const querySnapshot = await getDocs(collection(db, 'test'));
        setStatus('✅ Firebase connected successfully!');
        setCollections(['test']);
        
        console.log('Firebase connection test successful');
      } catch (error) {
        console.error('Firebase connection test failed:', error);
        setStatus(`❌ Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-dark-navy/90 backdrop-blur-sm border border-slate-200/50 dark:border-light-slate/30 rounded-lg px-4 py-2 shadow-lg">
      <div className="text-sm font-mono">
        <div className="text-slate-600 dark:text-slate-400">Firebase Status:</div>
        <div className="text-xs mt-1">{status}</div>
        {collections.length > 0 && (
          <div className="text-xs mt-1 text-green-600 dark:text-green-400">
            Collections: {collections.join(', ')}
          </div>
        )}
      </div>
    </div>
  );
};

export default FirebaseTest; 