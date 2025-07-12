import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';
import logodark from '../logodark.png';
import logolight from '../logolight.png';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Header for desktop and mobile */}
      <header className="fixed top-0 left-0 w-full h-20 z-50 flex items-center px-2 sm:px-4 md:px-6 transition-all duration-300 bg-white/80 dark:bg-dark-navy/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b border-slate-200/20 dark:border-light-slate/20 overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 min-w-0 h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="#hero" className="flex items-center justify-center">
              <img
                src={logolight}
                alt="Logo"
                className="block dark:hidden w-20 h-20 object-contain"
              />
              <img
                src={logodark}
                alt="Logo"
                className="hidden dark:block w-20 h-20 object-contain"
              />
            </a>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center mx-auto gap-2 flex-nowrap min-w-0 overflow-x-hidden h-full">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.url}
                className="px-1 lg:px-2 py-1 font-mono text-xs lg:text-sm font-semibold transition-colors duration-200 hover:text-brand min-w-0 h-full flex items-center"
                style={{ maxWidth: '100%' }}
              >
                <span className="text-brand mr-1">{`0${idx + 1}.`}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle - Right */}
          <div className="flex-shrink-0 flex items-center h-full">
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full border border-slate-200/50 dark:border-light-slate/30 bg-white/80 dark:bg-dark-navy/80 md:bg-transparent md:dark:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy/50 hover:scale-105 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger for mobile */}
      <div className="fixed top-6 left-6 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className="relative w-10 h-10 flex flex-col items-center justify-center text-brand bg-white/80 dark:bg-dark-navy/80 backdrop-blur-md rounded-full shadow-lg focus:outline-none transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-navy/50"
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-1 w-6 bg-current rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-5' : 'top-3'}`}
          ></span>
          <span
            className={`block absolute h-1 w-6 bg-current rounded transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100 top-5'}`}
          ></span>
          <span
            className={`block absolute h-1 w-6 bg-current rounded transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-5' : 'top-7'}`}
          ></span>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-black/40" onClick={toggleMenu} aria-label="Close menu overlay" />
          <aside className="relative ml-0 w-4/5 max-w-xs h-full bg-white/90 dark:bg-dark-navy/90 backdrop-blur-md border-r border-slate-200/30 dark:border-light-slate/20 shadow-xl flex flex-col p-6 gap-4">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={toggleMenu}
                  className="px-6 py-4 rounded-lg font-mono text-lg font-semibold transition-colors duration-200 bg-slate-100/80 dark:bg-light-slate/10 border border-slate-200/40 dark:border-light-slate/20 hover:bg-slate-200/90 dark:hover:bg-light-slate/20"
                >
                  <span className="text-brand mr-2">{`0${idx + 1}.`}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;