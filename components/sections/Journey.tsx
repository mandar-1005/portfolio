import React, { useState } from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import { journey } from '../../constants';

const Journey: React.FC = () => {
    const [ref, isVisible] = useScrollObserver();
    const glassCardStyles = "bg-slate-300/20 dark:bg-light-navy/20 backdrop-blur-sm border border-slate-400/20 dark:border-light-slate/20 rounded-lg shadow-lg p-6 transition-all duration-500";
    // Track expanded state for each card by index
    const [expandedIndexes, setExpandedIndexes] = useState<{ [key: number]: boolean }>({});

    const handleToggle = (idx: number) => {
        setExpandedIndexes(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <section id="journey" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-12 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">02.</span>
                My Journey
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>

            <div className="relative border-l-2 border-light-navy dark:border-lightest-navy/20 pl-8 transition-colors duration-500">
                {journey.map((item, index) => {
                    const hasMilestones = item.milestones && item.milestones.length > 0;
                    const expanded = !!expandedIndexes[index];
                    return (
                        <div key={index} className={`group mb-12 relative ${glassCardStyles}`} tabIndex={0}>
                            {item.logo ? (
                                <div className="absolute -left-[42px] top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center text-light-slate dark:text-slate group-hover:text-brand transition-colors duration-300 bg-slate-50 dark:bg-dark-navy rounded-full border-2 border-slate-200 dark:border-lightest-navy/20">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.organization} className="block w-full h-full">
                                                {item.logo}
                                            </a>
                                        ) : (
                                            item.logo
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute -left-[42px] top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-navy dark:bg-slate group-hover:bg-brand transition-colors duration-300 border-2 border-slate-50 dark:border-dark-navy"></div>
                            )}

                            {/* Milestone badge and toggle */}
                            {hasMilestones && (
                                <button
                                    type="button"
                                    className="absolute -top-3 -right-3 bg-brand text-white text-xs font-bold px-2 py-1 rounded shadow hover:bg-green-600 transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-brand/50"
                                    aria-expanded={expanded}
                                    aria-controls={`milestone-details-${index}`}
                                    onClick={() => handleToggle(index)}
                                >
                                    {expanded ? 'Hide Milestones' : 'Show Milestones'}
                                </button>
                            )}

                            {/* Milestone badge */}
                            {hasMilestones && (
                                <span className="absolute -top-3 -right-3 bg-brand text-white text-xs font-bold px-2 py-1 rounded shadow group-hover:bg-green-600 transition-colors duration-300 z-20">
                                    Milestone
                                </span>
                            )}

                            <span className="font-mono text-xs text-light-navy dark:text-slate transition-colors duration-500">{item.period}</span>
                            <h3 className="text-lg font-bold text-navy dark:text-white mt-1 transition-colors duration-500">
                                {item.title} <span className="text-brand">@ {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand/80 transition-colors duration-200">{item.organization}</a>
                                ) : item.organization}</span>
                            </h3>
                            <ul className="mt-4 space-y-2 text-sm transition-colors duration-500">
                                {item.description.map((point, i) => (
                                    <li key={i} className="flex">
                                        <span className="text-brand mr-3">▹</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Expandable milestone section */}
                            {hasMilestones && expanded && (
                                <div
                                    id={`milestone-details-${index}`}
                                    className="mt-6 bg-white/70 dark:bg-navy/70 border border-brand/30 rounded-lg shadow-lg p-4 text-sm text-navy dark:text-lightest-slate backdrop-blur-md transition-all duration-500"
                                >
                                    <div className="font-bold text-brand mb-2">Milestones & Achievements</div>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {item.milestones.map((milestone, idx) => (
                                            <li key={idx}>{milestone}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Journey;