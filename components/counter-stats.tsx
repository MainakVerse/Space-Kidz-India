'use client';

import { useEffect, useRef, useState } from 'react';

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff6b35] text-center mb-10 sm:mb-16">
          Our Achievements
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCard target={15} suffix="+" label="Finished Projects" isVisible={isVisible} />
          <StatCard target={100} suffix="M+" label="Students Trained" isVisible={isVisible} />
          <StatCard target={12} suffix="+" label="Team Members" isVisible={isVisible} />
          <StatCard target={1000} suffix="+" label="Honorable Awards" isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ 
  target, 
  suffix, 
  label, 
  isVisible 
}: { 
  target: number; 
  suffix: string; 
  label: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-center space-y-2 sm:space-y-3 p-6 bg-gradient-to-br from-[#ff6b35]/10 to-transparent rounded-xl border border-[#ff6b35]/20">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff6b35]">
        {count}{suffix}
      </div>
      <div className="text-base sm:text-lg text-white font-medium">{label}</div>
    </div>
  );
}