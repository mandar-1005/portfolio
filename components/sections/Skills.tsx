import React from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import { skillCategories } from '../../constants';
import { InformaticaIcon } from '../../constants';

interface SkillsProps {
    isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
    const [ref, isVisible] = useScrollObserver();
    const glassCardStyles = "bg-slate-300/20 dark:bg-light-navy/20 backdrop-blur-sm border border-slate-400/20 dark:border-light-slate/20 transition-colors duration-500";

    return (
        <section id="skills" ref={ref} className={`py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 is-visible' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-8 font-mono flex items-center transition-colors duration-500">
                <span className="text-brand mr-3">04.</span>
                My Toolkit
                <span className="flex-grow h-px bg-lightest-navy ml-4 section-line"></span>
            </h2>
            <div className="space-y-12">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-6">
                        <h3 className="text-xl font-bold text-navy dark:text-white font-mono flex items-center transition-colors duration-500">
                            <span className="text-brand mr-3">▹</span>
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            {category.skills.map((skill, index) => {
                                const iconColor = isDark && skill.isDark ? 'ccd6f6' : undefined;
                                const iconUrl = `https://cdn.simpleicons.org/${skill.slug}${iconColor ? `/${iconColor}` : ''}`;
                                
                                return (
                                    <div key={index} className={`flex flex-col items-center justify-center p-6 rounded-xl text-center group transition-all duration-500 hover:-translate-y-3 hover:scale-110 hover:shadow-2xl ${glassCardStyles} relative overflow-hidden`}>
                                        {/* Animated background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/0 group-hover:from-brand/10 group-hover:via-brand/5 group-hover:to-brand/10 transition-all duration-500 rounded-xl"></div>
                                        
                                        {/* Glowing border effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand/20 via-transparent to-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {skill.link ? (
                                                <a href={skill.link} target="_blank" rel="noopener noreferrer" aria-label={skill.name} className="block w-full h-full">
                                                    {skill.slug === 'informatica' ? <InformaticaIcon /> : 
                                                        skill.customIconUrl ? (
                                                            <img 
                                                                src={skill.customIconUrl}
                                                                alt={`${skill.name} logo`} 
                                                                className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                                            />
                                                        ) : (
                                                            <img 
                                                                src={iconUrl}
                                                                alt={`${skill.name} logo`} 
                                                                className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                                            />
                                                        )
                                                    }
                                                </a>
                                            ) : (
                                                skill.slug === 'informatica' ? <InformaticaIcon /> : 
                                                    skill.customIconUrl ? (
                                                        <img 
                                                            src={skill.customIconUrl}
                                                            alt={`${skill.name} logo`} 
                                                            className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                                        />
                                                    ) : (
                                                        <img 
                                                            src={iconUrl}
                                                            alt={`${skill.name} logo`} 
                                                            className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                                        />
                                                    )
                                            )}
                                            </div>
                                            <span className="text-sm font-semibold text-light-navy dark:text-light-slate group-hover:text-brand transition-colors duration-300">{skill.name}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;