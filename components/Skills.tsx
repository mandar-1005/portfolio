import React from 'react';
import { useScrollObserver } from '../../hooks/useScrollObserver';
import { skills } from '../../constants';
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
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => {
                    const iconColor = isDark && skill.isDark ? 'ccd6f6' : undefined;
                    const iconUrl = `https://cdn.simpleicons.org/${skill.slug}${iconColor ? `/${iconColor}` : ''}`;
                    
                    return (
                        <div key={index} className={`flex flex-col items-center justify-center p-4 rounded-md text-center group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${glassCardStyles}`}>
                            <div className="w-12 h-12 mb-3 flex items-center justify-center">
                            {skill.slug === 'informatica' ? <InformaticaIcon /> : 
                                <img 
                                    src={iconUrl}
                                    alt={`${skill.name} logo`} 
                                    className="w-full h-full object-contain"
                                />
                            }
                            </div>
                            <span className="text-sm font-medium text-light-navy dark:text-light-slate group-hover:text-brand transition-colors duration-300">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;