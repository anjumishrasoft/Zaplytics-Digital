import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import at the top of the file to resolve the React namespace for ReactNode
  icon: React.ReactNode;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  results: string;
  image: string;
}
