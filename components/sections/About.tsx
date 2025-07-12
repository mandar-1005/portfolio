import React, { useState, useEffect } from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';

const About: React.FC = () => {
    const [ref, isVisible] = useScrollObserver();
    const [currentText, setCurrentText] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [typingFinished, setTypingFinished] = useState(false);
    
    const lines = [
        "Hello! I'm Mandar, a Computer Science grad student at Virginia Tech with a background in Data Engineering and Software Development.",
        "My passion lies in solving complex problems and building robust applications, with a proficiency in Python, SQL, Databricks, Informatica, Snowflake, and PySpark.",
        "I thrive in cross-functional teams and I'm always eager to learn about the latest technology trends.",
        "I am currently seeking summer internships or co-op opportunities in software development or data engineering.",
        "When I'm not at the computer, I enjoy exploring new places, trying out different cuisines, and staying active.",
        "I'm also passionate about photography, capturing moments with my Nikon Z5, Insta 360 X4, and iPhone 16 Pro."
    ];

    const TYPING_SPEED = 50;
    const DELAY_BETWEEN_LINES = 300;

    useEffect(() => {
        if (!isVisible) return;

        if (currentLineIndex >= lines.length) {
            const timer = setTimeout(() => {
                setTypingFinished(true);
            }, 500);
            return () => clearTimeout(timer);
        }

        const lineToType = lines[currentLineIndex];

        if (currentText.length < lineToType.length) {
            const timeout = setTimeout(() => {
                setCurrentText(lineToType.slice(0, currentText.length + 1));
            }, TYPING_SPEED);
            return () => clearTimeout(timeout);
        }

        if (currentText.length === lineToType.length) {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentText('');
            }, DELAY_BETWEEN_LINES);
            return () => clearTimeout(timeout);
        }
    }, [currentText, currentLineIndex, isVisible]);

    const BlinkingCursor: React.FC = () => <span className="inline-block w-1 h-[1em] bg-green-600 dark:bg-green-300 -mb-[2px] ml-1 animate-[blink_1s_step-end_infinite]" />;

    return (
        <section id="about" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">01.</span>
                About Me
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Terminal Window */}
                <div className="lg:col-span-3">
                    <div className="relative z-10">
                        {/* Terminal Header */}
                        <div className="bg-gray-200 dark:bg-gray-900 rounded-t-lg border border-gray-300 dark:border-gray-700 p-3 flex items-center space-x-2">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-gray-600 dark:text-gray-400 text-sm font-mono">mandar@portfolio ~ /about</span>
                            </div>
                        </div>
                        
                        {/* Terminal Body */}
                        <div className="bg-white dark:bg-gray-950 rounded-b-lg border border-gray-300 dark:border-gray-700 p-6 font-mono text-green-600 dark:text-green-300 shadow-2xl min-h-[400px]">
                            <div className="space-y-2">
                                {/* Command Prompt */}
                                <div className="flex items-center text-green-600 dark:text-green-300 mb-4">
                                    <span className="mr-2">$</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                                
                                {/* Typing Content */}
                                <div className="space-y-3">
                                    {lines.slice(0, currentLineIndex).map((line, index) => (
                                        <div key={index} className="text-sm leading-relaxed">
                                            {line}
                                        </div>
                                    ))}
                                    
                                    {currentLineIndex < lines.length && (
                                        <div className="text-sm leading-relaxed">
                                            {currentText}
                                            <BlinkingCursor />
                                        </div>
                                    )}
                                    
                                    {typingFinished && (
                                        <div className="flex items-center text-green-600 dark:text-green-300 mt-4">
                                            <span className="mr-2">$</span>
                                            <BlinkingCursor />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="lg:col-span-2 flex justify-center items-start">
                    <div className="group relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-brand rounded-md z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div className="absolute inset-0 rounded-md overflow-hidden z-10 border-2 border-transparent group-hover:border-brand transition-colors duration-300">
                            <img 
                                src="/mandar.jpg" 
                                alt="Mandar Menjoge" 
                                className="w-full h-full object-cover transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Terminal Glow Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-green-400/5 dark:bg-green-300/5 rounded-lg blur-3xl"></div>
            </div>
        </section>
    );
};

export default About;