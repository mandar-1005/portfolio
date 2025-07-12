import React, { useState, useEffect } from 'react';
import { useScrollObserver } from '../hooks/useScrollObserver';

interface LocationStatusProps {
  isDark: boolean;
}

const LocationStatus: React.FC<LocationStatusProps> = ({ isDark }) => {
  const [ref, isVisible] = useScrollObserver();
  const [isAvailable, setIsAvailable] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const glassCardStyles = "bg-slate-300/20 dark:bg-light-navy/20 backdrop-blur-sm border border-slate-400/20 dark:border-light-slate/20 rounded-lg shadow-lg p-6 transition-colors duration-500";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/New_York'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/New_York'
    });
  };

  return (
    <section id="location" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center transition-colors duration-500">
          <span className="text-brand mr-3">05.</span>
          Where to Find Me
          <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Status Card */}
          <div className="space-y-6">
            <div className={`${glassCardStyles} p-8`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                  Current Status
                </h3>
                <button
                  onClick={toggleAvailability}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isAvailable
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  {isAvailable ? '🟢 Available' : '🔴 Busy'}
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">📍 Location:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Alexandria, Virginia, USA
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">🕐 Local Time:</span>
                  <span className="font-mono font-medium text-slate-800 dark:text-slate-200">
                    {formatTime(currentTime)} EST
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">📅 Date:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {formatDate(currentTime)}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">🌍 Timezone:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Eastern Standard Time (EST)
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {isAvailable 
                    ? "I'm currently available for new opportunities and collaborations. Feel free to reach out!"
                    : "I'm currently busy with ongoing projects. I'll respond to messages when available."
                  }
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`${glassCardStyles} text-center`}>
                <div className="text-2xl font-bold text-brand mb-2">EST</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Timezone</div>
              </div>
              <div className={`${glassCardStyles} text-center`}>
                <div className="text-2xl font-bold text-brand mb-2">Remote</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Work Ready</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className={`${glassCardStyles} p-8`}>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Alexandria, Virginia
              </h3>
              
              {/* Interactive Map */}
              <div className="relative h-80 rounded-xl overflow-hidden border border-slate-200 dark:border-light-slate/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.8333253377!2d-77.119763!3d38.82045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6a6e8b5b5b5%3A0x8b7b6a6e8b5b5b5!2sAlexandria%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alexandria, Virginia"
                />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">🏢 Area:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Washington DC Metro Area
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">✈️ Travel:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Available for relocation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-600 dark:text-slate-400">🌐 Remote:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Fully remote work ready
                  </span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className={`${glassCardStyles} text-center`}>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                Let's Connect!
              </h4>
              <p className="text-slate-600 dark:text-slate-400">
                Whether you're in Alexandria or anywhere in the world, I'm always open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationStatus; 