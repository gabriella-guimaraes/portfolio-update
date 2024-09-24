import React, { useEffect, useRef, ReactNode } from 'react';
import styles from './fadeIn.module.css';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'up' | 'down' | 'left' | 'right';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className, animationType = 'up' }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add(styles.visible);
        } else {
          sectionRef.current?.classList.remove(styles.visible);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = styles[`fadeIn-${animationType}`] || '';

  return (
    <div ref={sectionRef} className={`${styles.fadeInSection} ${animationClass} ${className || ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;