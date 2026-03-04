
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Bot, Cpu, Zap, Database } from 'lucide-react';
import { SERVICES } from '../constants';
import SectionHeader from '../components/SectionHeader';
import GenerativeImage from '../components/GenerativeImage';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8">Engineering<br /><span className="text-blue-500">Autonomous</span> Growth</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We don't just build software; we build digital intelligence. Our AI Agents and workflows are designed to scale your business without increasing headcount.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="inline-block p-4 rounded-[2rem] bg-white shadow-2xl shadow-blue-500/10 mb-2">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-4 text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-teal-50 p-2 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="font-semibold">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center w-fit shadow-xl shadow-blue-600/20">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-[3rem] blur-2xl opacity-10"></div>
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2">
                    <GenerativeImage 
                      prompt={service.prompt || service.title}
                      fallbackImage={service.image}
                      className="w-full h-[450px] rounded-[2rem]"
                    />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Agent Deep Dive */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 italic">How AI Agents Help Today</h2>
            <div className="h-1 w-24 bg-teal-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Customer Support', desc: 'Resolving 85% of tier-1 tickets instantly without human intervention.', icon: <Zap className="text-teal-400" /> },
              { title: 'Sales Prospecting', desc: 'AI Phone agents that call, qualify, and book meetings into your calendar.', icon: <Bot className="text-teal-400" /> },
              { title: 'Operations', desc: 'Autonomous workers that sync CRM, ERP, and Billing data 24/7/365.', icon: <Cpu className="text-teal-400" /> },
              { title: 'Content Ops', desc: 'Scalable engines that generate and distribute data-driven marketing content.', icon: <Database className="text-teal-400" /> }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
