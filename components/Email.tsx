import React from 'react';
import { email } from '../constants';

const Email: React.FC = () => {
  return (
    <div className="flex flex-col items-center fixed bottom-0 right-12 z-40 bg-white/10 dark:bg-dark-navy/10 rounded-l-lg p-4">
      <div className="flex flex-col items-center space-y-6">
        <a href={`mailto:${email}`}
           className="font-mono text-sm tracking-widest text-navy dark:text-light-slate hover:text-brand transition-all duration-300 hover:-translate-y-1 p-2 hover:bg-white/20 dark:hover:bg-light-slate/20 rounded-full"
           style={{ writingMode: 'vertical-rl' }}>
          {email}
        </a>
      </div>
      <div className="w-px h-24 bg-light-navy dark:bg-light-slate mt-6 transition-colors duration-500"></div>
    </div>
  );
};

export default Email;