import React from 'react';
import { socialMedia } from '../constants';

const Socials: React.FC = () => {
  return (
    <div className="flex flex-col items-center fixed bottom-0 left-12 z-40 bg-white/10 dark:bg-dark-navy/10 rounded-r-lg p-4">
      <ul className="flex flex-col items-center space-y-6">
        {socialMedia.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
               className="text-navy dark:text-light-slate hover:text-brand transition-all duration-300 hover:-translate-y-1 block p-2 hover:bg-white/20 dark:hover:bg-light-slate/20 rounded-full">
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-px h-24 bg-light-navy dark:bg-light-slate mt-6 transition-colors duration-500"></div>
    </div>
  );
};

export default Socials;