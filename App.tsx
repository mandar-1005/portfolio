import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Publications from './components/sections/Publications';
import Certifications from './components/sections/Certifications';
import LocationStatus from './components/LocationStatus';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Email from './components/Email';
import FloatingIcons from './components/FloatingIcons';
import SpotlightCursor from './components/SpotlightCursor';
import VisitorCounter from './components/VisitorCounter';
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults, ActionImpl, useMatches } from 'kbar';
import { navLinks, socialMedia, email, IconGitHub, IconLinkedIn, IconInstagram, IconTwitter, IconFacebook } from './constants';
// import FirebaseTest from './components/FirebaseTest';
// import SimpleFirebaseTest from './components/SimpleFirebaseTest';

const navIcon = (
  <span className="inline-block mr-3 text-lg">»</span>
);
const socialIconMap: Record<string, React.ReactNode> = {
  github: <IconGitHub className="w-5 h-5 mr-3 inline-block" />,
  linkedin: <IconLinkedIn className="w-5 h-5 mr-3 inline-block" />,
  instagram: <IconInstagram className="w-5 h-5 mr-3 inline-block" />,
  twitter: <IconTwitter className="w-5 h-5 mr-3 inline-block" />,
  facebook: <IconFacebook className="w-5 h-5 mr-3 inline-block" />,
};

const KBarCommandPalette = () => {
  const { results } = useMatches();

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator className="bg-white dark:bg-dark-navy rounded-xl shadow-xl w-full max-w-lg p-4 border border-slate-200 dark:border-slate-700">
          <KBarSearch className="w-full p-2 mb-2 rounded bg-slate-100 dark:bg-slate-800 text-navy dark:text-white" placeholder="Type a command or search..." />
          <KBarResults
            items={results}
            onRender={({ item, active }: { item: string | ActionImpl; active: boolean }) =>
              typeof item === 'string' ? (
                <div className="px-2 py-1 text-xs text-slate-400 uppercase tracking-wider font-semibold mt-2 mb-1">{item}</div>
              ) : (
                <div className={`flex items-center px-3 py-2 rounded cursor-pointer transition-colors ${active ? 'bg-brand/10 dark:bg-brand/20' : ''}`}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              )
            }
          />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add a subtle delay to show the transition effect
    setTimeout(() => {
      setIsDark(!isDark);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match the transition duration
    }, 150);
  };

  const actions = [
    // Navigation actions
    ...navLinks.map(link => ({
      id: link.name.toLowerCase(),
      name: `Go to ${link.name}`,
      shortcut: [],
      keywords: link.name.toLowerCase(),
      perform: () => {
        const id = link.url.replace('#', '');
        window.location.hash = link.url;
        setTimeout(() => {
          const el = document.getElementById(id) || document.querySelector(link.url);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      },
      section: 'Navigation',
      icon: navIcon,
    })),
    // Social actions
    ...socialMedia.map(social => ({
      id: social.name.toLowerCase(),
      name: `Open ${social.name}`,
      shortcut: [],
      keywords: social.name.toLowerCase(),
      perform: () => window.open(social.url, '_blank'),
      section: 'Socials',
      icon: socialIconMap[social.name.toLowerCase()] || null,
    })),
    // Copy email
    {
      id: 'copy-email',
      name: 'Copy Email',
      shortcut: ['c'],
      keywords: 'copy email',
      perform: () => navigator.clipboard.writeText(email),
      section: 'General',
      icon: <span className="inline-block mr-3">��</span>,
    },
    // Toggle theme
    {
      id: 'toggle-theme',
      name: 'Toggle Theme',
      shortcut: ['t'],
      keywords: 'theme dark light',
      perform: () => toggleTheme(),
      section: 'General',
      icon: <span className="inline-block mr-3">🌓</span>,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarCommandPalette />
      {/* Layer 1: Solid Background Color */}
      <div className="fixed inset-0 bg-cream dark:bg-dark-navy transition-all duration-700 ease-in-out" />
      
      {/* Layer 1.5: Theme Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gradient-to-br from-transparent via-white/10 dark:via-black/10 to-transparent z-50 pointer-events-none animate-pulse transition-opacity duration-700" />
      )}
      
      <SpotlightCursor />
      
      {/* Layer 2: Floating Icons */}
      <FloatingIcons isDark={isDark} />

      {/* Layer 3: Main Content */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-700 ease-in-out ${isTransitioning ? 'scale-[0.99] opacity-90' : 'scale-100 opacity-100'}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <div className="flex-1 flex flex-col pt-24 px-4 sm:px-8 md:px-16 xl:px-32">
          <Socials />
          <Email />
          <main id="content" className="flex-grow container mx-auto">
            <Hero />
            <About />
            <Journey />
            <Projects />
            <Skills isDark={isDark} />
            <Publications />
            <Certifications />
            <LocationStatus isDark={isDark} />
            <Contact />
          </main>
          <Footer />
        </div>
        <VisitorCounter />
        {/* <FirebaseTest /> */}
        {/* <SimpleFirebaseTest /> */}
      </div>
    </KBarProvider>
  );
};

export default App;