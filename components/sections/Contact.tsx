import React, { useState, useEffect } from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [ref, isVisible] = useScrollObserver();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [currentText, setCurrentText] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [typingFinished, setTypingFinished] = useState(false);
    const [showForm, setShowForm] = useState(false);
    
    const TYPING_SPEED = 5;
    const DELAY_BETWEEN_LINES = 50;

    const BlinkingCursor: React.FC = () => <span className="inline-block w-1 h-[1em] bg-green-600 dark:bg-green-300 -mb-[2px] ml-1 animate-[blink_1s_step-end_infinite]" />;

    const contactLines = [
        "$ echo 'Contact Information:'",
        "Contact Information:",
        "$ cat contact.txt",
        "Email: mandarmenjoge@gmail.com",
        "LinkedIn: linkedin.com/in/mandar-menjoge",
        "GitHub: github.com/mandar-1005",
        "$ echo '---'",
        "$ echo 'Ready to connect? Type: contact --form'",
        "Ready to connect? Type: contact --form"
    ];

    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual public key
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        if (currentLineIndex >= contactLines.length) {
            const timer = setTimeout(() => {
                setTypingFinished(true);
                setShowForm(true);
            }, 500);
            return () => clearTimeout(timer);
        }

        const lineToType = contactLines[currentLineIndex];

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const result = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Mandar Menjoge',
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            if (result.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            setError('Failed to send message. Please try again or contact me directly at mandarmenjoge@gmail.com');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getAllContactLines = () => {
        return contactLines.slice(0, currentLineIndex);
    };

    if (isSubmitted) {
        return (
            <section id="contact" className={`py-24 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center justify-center transition-colors duration-500">
                    <span className="text-brand mr-3">05.</span>
                    What's Next?
                    <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
                </h2>
                
                {/* Terminal Window */}
                <div className="relative z-10 max-w-2xl mx-auto">
                    {/* Terminal Header */}
                    <div className="bg-gray-800 dark:bg-gray-900 rounded-t-lg border border-gray-600 dark:border-gray-700 p-3 flex items-center space-x-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-gray-400 text-sm font-mono">mandar@portfolio ~ /contact</span>
                        </div>
                    </div>
                    
                    {/* Terminal Body */}
                    <div className="bg-black dark:bg-gray-950 rounded-b-lg border border-gray-600 dark:border-gray-700 p-6 font-mono text-green-400 dark:text-green-300 shadow-2xl">
                        <div className="space-y-2">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400 dark:text-green-300 mb-4">✓ Message Sent Successfully!</div>
                                <div className="text-sm mb-6">Your message has been delivered. I'll get back to you shortly!</div>
                                <button 
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 font-mono text-white bg-navy dark:bg-navy border border-navy dark:border-navy rounded-lg shadow-lg hover:bg-navy/80 dark:hover:bg-navy/80 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-navy/50"
                                >
                                    $ contact --form
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">05.</span>
                What's Next?
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>
            
            {/* Terminal Window */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Terminal Header */}
                <div className="bg-gray-200 dark:bg-gray-900 rounded-t-lg border border-gray-300 dark:border-gray-700 p-3 flex items-center space-x-2">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-mono">mandar@portfolio ~ /contact</span>
                    </div>
                </div>
                
                {/* Terminal Body */}
                <div className="bg-white dark:bg-gray-950 rounded-b-lg border border-gray-300 dark:border-gray-700 p-6 font-mono text-green-600 dark:text-green-300 shadow-2xl min-h-[500px]">
                    <div className="space-y-2">
                        {/* Command Prompt */}
                        <div className="flex items-center text-green-600 dark:text-green-300 mb-4">
                            <span className="mr-2">$</span>
                            <span className="animate-pulse">_</span>
                        </div>
                        
                        {/* Typing Content */}
                        <div className="space-y-2 text-sm">
                            {getAllContactLines().map((line, index) => (
                                <div key={index} className="leading-relaxed">
                                    {line}
                                </div>
                            ))}
                            
                            {currentLineIndex < contactLines.length && (
                                <div className="leading-relaxed">
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

                        {/* Contact Form */}
                        {showForm && (
                            <div className="mt-8 p-4 border border-green-400/30 rounded-lg bg-white/90 dark:bg-black/50">
                                <div className="text-center mb-6">
                                    <div className="text-lg font-bold text-navy dark:text-green-300 mb-2">Contact Form</div>
                                    <div className="text-sm text-navy/70 dark:text-green-300/70">Fill out the form below to send a message</div>
                                </div>
                                {error && (
                                    <div className="mb-4 p-3 bg-red-900/20 border border-red-700 rounded text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-navy dark:text-green-300 mb-2">Name:</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={formData.name}
                                            required 
                                            disabled={isSubmitting} 
                                            onChange={handleChange} 
                                            className="w-full p-2 bg-white dark:bg-black border border-green-600/30 dark:border-green-400/30 rounded text-navy dark:text-green-300 focus:outline-none focus:border-green-600 dark:focus:border-green-400 disabled:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-navy dark:text-green-300 mb-2">Email:</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email}
                                            required 
                                            disabled={isSubmitting} 
                                            onChange={handleChange} 
                                            className="w-full p-2 bg-white dark:bg-black border border-green-600/30 dark:border-green-400/30 rounded text-navy dark:text-green-300 focus:outline-none focus:border-green-600 dark:focus:border-green-400 disabled:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-navy dark:text-green-300 mb-2">Message:</label>
                                        <textarea 
                                            name="message" 
                                            rows={4} 
                                            value={formData.message}
                                            required 
                                            disabled={isSubmitting} 
                                            onChange={handleChange} 
                                            className="w-full p-2 bg-white dark:bg-black border border-green-600/30 dark:border-green-400/30 rounded text-navy dark:text-green-300 focus:outline-none focus:border-green-600 dark:focus:border-green-400 disabled:opacity-50 resize-none"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting} 
                                            className="px-6 py-3 font-mono text-white bg-navy dark:bg-navy border border-navy dark:border-navy rounded-lg shadow-lg hover:bg-navy/80 dark:hover:bg-navy/80 disabled:opacity-50 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-navy/50"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
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

export default Contact;