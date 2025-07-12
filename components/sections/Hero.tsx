import React, { useState, useEffect } from 'react';

// Animation parameters
const TYPING_SPEED = 80; // Speed of typing in ms
const DELAY_BETWEEN_LINES = 400; // Pause after a line is finished
const DELAY_BEFORE_FADE_IN = 500; // Pause before fading in the rest of the content

// Lines to be typed out
const lines = [
  { text: 'Hi, my name is', className: 'font-mono text-brand text-base md:text-lg mb-4' },
  { text: 'Mandar Menjoge.', className: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-lightest-slate transition-colors duration-500' },
  { text: 'I build software and data solutions.', className: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light-navy dark:text-slate-400 transition-colors duration-500 mt-2' }
];

// Reusable blinking cursor component
const BlinkingCursor: React.FC = () => <span className="inline-block w-1 h-[1em] bg-green-600 dark:bg-green-300 -mb-[2px] ml-1 animate-[blink_1s_step-end_infinite]" />;

const Hero: React.FC = () => {
    // State to hold the array of fully typed lines as JSX elements
    const [completedLines, setCompletedLines] = useState<React.ReactNode[]>([]);
    // Index of the line currently being typed
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    // The currently displayed text for the line being typed
    const [currentText, setCurrentText] = useState('');
    // State to track when the typing animation is fully complete
    const [typingFinished, setTypingFinished] = useState(false);

    useEffect(() => {
        // If all lines are typed, trigger the final fade-in
        if (currentLineIndex >= lines.length) {
            const timer = setTimeout(() => {
                setTypingFinished(true);
            }, DELAY_BEFORE_FADE_IN);
            return () => clearTimeout(timer);
        }

        // Get the full text of the line to be typed
        const lineToType = lines[currentLineIndex].text;

        // If the current line is not yet fully typed
        if (currentText.length < lineToType.length) {
            const timeout = setTimeout(() => {
                // Add the next character
                setCurrentText(lineToType.slice(0, currentText.length + 1));
            }, TYPING_SPEED);
            return () => clearTimeout(timeout);
        }

        // If the current line is fully typed, move to the next
        if (currentText.length === lineToType.length) {
            const timeout = setTimeout(() => {
                // Add the completed line to the state
                setCompletedLines(prev => [
                    ...prev,
                    <p key={currentLineIndex} className={lines[currentLineIndex].className}>{lines[currentLineIndex].text}</p>
                ]);
                // Move to the next line
                setCurrentLineIndex(prev => prev + 1);
                // Reset the current text for the new line
                setCurrentText('');
            }, DELAY_BETWEEN_LINES);
            return () => clearTimeout(timeout);
        }
    }, [currentText, currentLineIndex]);
    
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center -mt-24 relative">
            {/* Terminal Window Frame */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Terminal Header */}
                <div className="bg-gray-200 dark:bg-gray-900 rounded-t-lg border border-gray-300 dark:border-gray-700 p-3 flex items-center space-x-2">
                    {/* Terminal Buttons */}
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    {/* Terminal Title */}
                    <div className="flex-1 text-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-mono">mandar@portfolio ~ /home/mandar</span>
                    </div>
                </div>
                
                {/* Terminal Body */}
                <div className="bg-white dark:bg-gray-950 rounded-b-lg border border-gray-300 dark:border-gray-700 p-6 font-mono text-green-600 dark:text-green-300 shadow-2xl">
                    {/* Terminal Content */}
                    <div className="space-y-2">
                        {/* Command Prompt */}
                        <div className="flex items-center text-green-600 dark:text-green-300">
                            <span className="mr-2">$</span>
                            <span className="animate-pulse">_</span>
                        </div>
                        
                        {/* Typing Animation Container */}
                        <div className="mt-4">
                            {/* Render all the completed lines */}
                            {completedLines.map((line, index) => (
                                <div key={index} className="mb-2">
                                    {line}
                                </div>
                            ))}

                            {/* Render the line currently being typed, if any */}
                            {currentLineIndex < lines.length && (
                                <div className="mb-2">
                                    <span className="text-green-600 dark:text-green-300 mr-2">$</span>
                                    <span className={lines[currentLineIndex].className}>
                                        {currentText}
                                        <BlinkingCursor />
                                    </span>
                                </div>
                            )}

                            {/* Persistent blinking cursor after typing is finished */}
                            {typingFinished && (
                                <div className="flex items-center text-green-600 dark:text-green-300">
                                    <span className="mr-2">$</span>
                                    <BlinkingCursor />
                                </div>
                            )}
                        </div>

                        {/* Resume Button - styled as terminal command */}
                        {typingFinished && (
                            <div className="mt-8 animate-[fadeInUp_0.4s_ease-out_0.2s_backwards]">
                                <div className="flex items-center text-green-600 dark:text-green-300 mb-2">
                                    <span className="mr-2">$</span>
                                    <span className="text-sm">cat resume.pdf</span>
                                </div>
                                <a 
                                    href="/resume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-block group relative px-6 py-3 font-mono text-green-600 dark:text-green-300 border border-green-600 dark:border-green-300 rounded bg-white dark:bg-gray-950 hover:bg-green-600 hover:text-white dark:hover:bg-green-300 dark:hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 dark:hover:shadow-green-300/20"
                                >
                                    <span className="relative z-10">[View Resume]</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Terminal Glow Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-green-400/5 dark:bg-green-300/5 rounded-lg blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;