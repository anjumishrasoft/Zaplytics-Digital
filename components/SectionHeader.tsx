
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-blue-600 mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
