import React, { useMemo } from 'react';
import { floatingIconsList } from '../constants';

interface FloatingIconsProps {
    isDark: boolean;
}

const iconList = [...floatingIconsList, ...floatingIconsList.slice(0, 15)];

const FloatingIcons: React.FC<FloatingIconsProps> = ({ isDark }) => {
    const renderedIcons = useMemo(() => {
        return iconList.map((skill, index) => {
            const style: React.CSSProperties = {
                left: `${Math.random() * 95}%`, // Use 95% to prevent horizontal overflow
                animationDuration: `${20 + Math.random() * 20}s`, // 20s to 40s
                animationDelay: `${Math.random() * 20}s`, // 0s to 20s
                transform: `scale(${0.5 + Math.random() * 0.8})`, // Scale from 0.5 to 1.3
                opacity: `${0.2 + Math.random() * 0.3}`, // Opacity from 0.2 to 0.5
            };

            const iconColor = isDark && skill.isDark ? 'ccd6f6' : undefined;
            const iconUrl = `https://cdn.simpleicons.org/${skill.slug}${iconColor ? `/${iconColor}` : ''}`;

            return (
                <div key={index} className="floating-icon" style={style}>
                    <img
                        src={iconUrl}
                        alt={skill.name}
                        className="w-full h-full"
                    />
                </div>
            );
        });
    }, [isDark]);

    return <div className="floating-icons-container">{renderedIcons}</div>;
};

export default FloatingIcons;