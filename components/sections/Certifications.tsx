import React from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import { certifications } from '../../constants';

const Certifications: React.FC = () => {
    const [ref, isVisible] = useScrollObserver();
    const glassCardStyles = "bg-slate-300/20 dark:bg-light-navy/20 backdrop-blur-sm border border-slate-400/20 dark:border-light-slate/20 rounded-lg shadow-lg p-6 transition-all duration-500";

    return (
        <section id="certifications" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-12 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">06.</span>
                Certifications
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>

            <div className="space-y-8">
                {certifications.map((cert, index) => (
                    <div key={index} className={`group ${glassCardStyles} hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row md:items-center md:justify-between`}>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-navy dark:text-white mb-1 group-hover:text-brand transition-colors duration-300">{cert.title}</h3>
                            <p className="text-sm text-light-navy dark:text-light-slate mb-1"><span className="font-semibold">Issuer:</span> {cert.issuer}</p>
                            <p className="text-sm text-light-navy dark:text-light-slate mb-1"><span className="font-semibold">Issued:</span> {cert.issued}</p>
                            <p className="text-sm text-light-navy dark:text-light-slate mb-1"><span className="font-semibold">Credential ID:</span> {cert.credentialId}</p>
                        </div>
                        {cert.link && (
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-4 md:mt-0 md:ml-6 px-4 py-2 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Show credential</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications; 