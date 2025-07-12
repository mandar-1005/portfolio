
import React from 'react';
import { socialMedia } from '../constants';
import VisitorCounter from './VisitorCounter';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 text-center text-sm text-slate">
            <div className="lg:hidden flex justify-center items-center space-x-6 mb-4">
                 {socialMedia.map(({ name, url, icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}
                     className="text-light-slate hover:text-brand transition-transform duration-300 hover:-translate-y-1 block">
                    {React.cloneElement(icon, { className: "w-6 h-6" })}
                  </a>
                ))}
            </div>
            <p className="font-mono mb-2">
                Designed & Built by Mandar Menjoge
            </p>
            <VisitorCounter />
        </footer>
    );
};

export default Footer;
