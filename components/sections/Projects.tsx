import React from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import { projects } from '../../constants';
import { FolderIcon } from '../../constants';

const Projects: React.FC = () => {
    const [ref, isVisible] = useScrollObserver();
    const glassCardStyles = "bg-slate-300/20 dark:bg-light-navy/20 backdrop-blur-sm border border-slate-400/20 dark:border-light-slate/20 transition-colors duration-500";

    return (
        <section id="projects" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">03.</span>
                Some Things I've Built
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className={`group flex flex-col justify-between p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${glassCardStyles} relative overflow-hidden`}>
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/0 group-hover:from-brand/5 group-hover:to-brand/10 transition-all duration-500"></div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand/20 via-transparent to-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-brand group-hover:scale-110 transition-transform duration-300">
                                    <FolderIcon />
                                </div>
                                {/* External link icon */}
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy dark:text-white group-hover:text-brand transition-colors duration-300 mb-3">{project.title}</h3>
                            <p className="text-sm text-light-navy dark:text-light-slate mb-6 transition-colors duration-500">{project.description}</p>
                        </div>
                        <div className="relative z-10">
                            <ul className="flex flex-wrap font-mono text-xs text-slate dark:text-slate transition-colors duration-500">
                                {project.tags.map(tag => (
                                    <li key={tag} className="mr-3 mb-1 px-2 py-1 bg-brand/10 rounded-full border border-brand/20 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;