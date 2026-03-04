
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className={`h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-400 mt-8 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
