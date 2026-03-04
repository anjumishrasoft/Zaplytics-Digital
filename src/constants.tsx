
import React from 'react';
import { Target, BarChart3, Zap, Cpu, Search, MessageSquare, LineChart, Layers, BrainCircuit, Bot, Database, Sparkles, Megaphone, TrendingUp } from 'lucide-react';
import { ServiceItem, Testimonial, CaseStudy } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    description: 'Hire digital employees that never sleep. We build specialized AI agents for sales, 24/7 support, and complex operations.',
    icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    prompt: 'Futuristic AI humanoid robot assistant in a high-tech office, blue and teal lighting',
    details: [
      'Voice AI & AI Phone Agents',
      'Zendesk & Intercom AI Setup',
      'Custom LLM (GPT-4) Chatbots',
      'Automated NLP Sales Assistants',
      'Answer Bot & Support Deflection'
    ]
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Scale your business by eliminating manual tasks. We integrate your stack into a seamless, self-running engine.',
    icon: <Zap className="w-8 h-8 text-teal-500" />,
    image: 'https://images.unsplash.com/photo-1518433278981-1677136453f4?auto=format&fit=crop&q=80&w=800',
    prompt: 'Intricate digital circuit board with glowing data streams and gears, cybernetic automation theme',
    details: [
      'n8n, Make & Zapier Workflows',
      'GoHighLevel CRM Automation',
      'Custom API & Webhook Connectors',
      'Automated Lead Qualification',
      'ERP & Project Management Sync'
    ]
  },
  {
    id: 'analytics',
    title: 'GA4 Analytics & SEO',
    description: 'Transform raw data into a growth strategy. We provide the clarity you need to make winning business decisions.',
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    prompt: 'Advanced 3D holographic data visualization dashboard with floating charts and graphs',
    details: [
      'GA4 Advanced Migration & Setup',
      'Looker Studio BI Dashboards',
      'Technical SEO & Site Audits',
      'Conversion Rate Optimization (CRO)',
      'Google Tag Manager (GTM) Expert'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing & Advertising',
    description: 'High-performance campaigns across Google and Meta designed to dominate your market and maximize ROI.',
    icon: <Target className="w-8 h-8 text-teal-500" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    prompt: 'Modern digital marketing command center with neon screens showing social media and ad metrics',
    details: [
      'Google Search & Display Ads',
      'Facebook & Instagram Ad Funnels',
      'Performance Max Optimization',
      'Dynamic Retargeting Strategies',
      'AI-Driven Creative Testing'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'TechFlow Solutions',
    content: 'The AI Agents from Zaplytics handle 80% of our queries without a human ever stepping in. It’s like adding a team of 10 for the price of one.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CEO',
    company: 'Nexus Retail',
    content: 'Their automation workflows saved us 40 hours a week in data entry. We finally have a clear picture of our customer journey and ROI.',
    avatar: 'https://picsum.photos/seed/david/100/100'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'c1',
    title: 'Real Estate Voice AI',
    category: 'AI Agents',
    results: '200% Booking Increase',
    image: 'https://picsum.photos/seed/voiceai/600/400'
  },
  {
    id: 'c2',
    title: 'SaaS Support Automation',
    category: 'Automation',
    results: '$120k Annual Savings',
    image: 'https://picsum.photos/seed/saas/600/400'
  }
];
