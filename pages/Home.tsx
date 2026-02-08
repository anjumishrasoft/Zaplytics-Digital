
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, Calendar, Quote, Briefcase, Zap, Bot, ShieldCheck, Clock, Star, Users, ArrowUpRight } from 'lucide-react';
import { SERVICES, TESTIMONIALS, CASE_STUDIES } from '../constants';
import SectionHeader from '../components/SectionHeader';
import SavingsCalculator from '../components/SavingsCalculator';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-teal-500/10 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium">
                <Bot className="w-4 h-4 text-teal-400" />
                <span>Specializing in Autonomous AI Agents</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
                Scale Without<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 animate-gradient">Hiring.</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                Unlock 24/7 operations. We build custom AI Agents that handle sales, support, and marketing while you sleep. Reduce labor costs by up to 80% instantly.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 flex items-center group">
                  Build My AI Employee <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative z-20 bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 p-10 rounded-[2.5rem] shadow-2xl animate-float">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center border border-teal-500/30">
                    <Bot className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Autonomous Agent Active</p>
                    <p className="text-teal-400 text-xs font-medium">Processing 1,240 tickets today...</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-slate-400 text-xs uppercase font-bold mb-2">Operational Savings</p>
                    <div className="flex items-end space-x-3">
                      <p className="text-4xl font-bold text-white">82%</p>
                      <p className="text-teal-400 text-sm mb-1 font-bold">↑ ROI optimized</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Tasks Automated</p>
                      <p className="text-xl font-bold text-blue-400">4,200+</p>
                    </div>
                    <div className="bg-teal-500/10 p-4 rounded-2xl border border-teal-500/20">
                      <p className="text-slate-400 text-[10px] uppercase font-bold">Revenue Lift</p>
                      <p className="text-xl font-bold text-teal-400">+24%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI Agents Help Today */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="How AI Agents Are Transforming Business" 
            subtitle="The era of simple chatbots is over. Meet the new digital workforce."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Support Deflection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">AI agents handle up to 85% of common customer questions instantly, freeing your human team for complex tasks.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="bg-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI Phone Sales</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Human-like voice agents that call leads, qualify prospects, and book meetings 24/7 without fatigue.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ops Orchestration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Autonomous agents that move data between CRM, Email, and Slack based on complex business logic.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="bg-teal-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                <Star className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Lead Nurturing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Never lose a lead again. AI agents follow up across email, SMS, and WhatsApp until the deal is closed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Burning Capital.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Every manual hour spent is profit lost. Use our interactive calculator to see how much Zaplytics can reclaim for your business.
            </p>
          </div>
          <SavingsCalculator />
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center bg-teal-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-teal-500/20">
              Claim Your Savings Now <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Showcase - All restored */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Full Service Suite" 
            subtitle="The ultimate technical arsenal for the modern enterprise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-blue-600 font-bold text-sm flex items-center hover:text-blue-700">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Catchy CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to activate your digital workforce?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            The future of business is autonomous. Don't let your competitors get the AI edge before you. Get a free audit and see exactly where we can automate your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-2xl hover:-translate-y-1">
              Start Free AI Audit
            </Link>
            <a href="tel:+919111775057" className="flex items-center space-x-2 text-white font-bold hover:text-blue-100 px-6 py-4">
              <Phone className="w-5 h-5" />
              <span>Call +91 9111775057</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
