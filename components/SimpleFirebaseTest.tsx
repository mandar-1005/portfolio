import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc } from 'firebase/firestore';

const SimpleFirebaseTest: React.FC = () => {
  const [status, setStatus] = useState<string>('Testing...');
  const [details, setDetails] = useState<string>('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        setStatus('Testing Firebase connection...');
        setDetails('Attempting to connect...');
        
        // Simple test - just try to access the database
        const testDoc = doc(collection(db, 'test'), 'test');
        setStatus('✅ Firebase connected!');
        setDetails('Database is accessible');
        
      } catch (error: any) {
        console.error('Firebase test error:', error);
        setStatus('❌ Connection failed');
        setDetails(error?.message || 'Unknown error');
        
        // Check for specific error types
        if (error?.code === 'permission-denied') {
          setDetails('Permission denied - check Firestore rules');
        } else if (error?.code === 'unavailable') {
          setDetails('Service unavailable - check if database exists');
        } else if (error?.message?.includes('network')) {
          setDetails('Network error - check internet connection');
        }
      }
    };

    testConnection();
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50 bg-white/95 dark:bg-dark-navy/95 backdrop-blur-sm border border-slate-200/50 dark:border-light-slate/30 rounded-lg px-4 py-3 shadow-lg max-w-xs">
      <div className="text-sm font-mono">
        <div className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Firebase Test</div>
        <div className="text-xs text-slate-600 dark:text-slate-400 mb-2">{status}</div>
        {details && (
          <div className="text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
            {details}
          </div>
        )}
        <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">
          Project: portfolio-fced2
        </div>
      </div>
    </div>
  );
};

export default SimpleFirebaseTest; 