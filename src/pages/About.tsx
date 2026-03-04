
import React from 'react';
import { Rocket, Target, Users, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/tech-abstract/1920/1080?blur=5" 
            alt="Technical Abstract Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
             <defs>
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
             </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Built for the Future of Commerce</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Zaplytics Digital was founded on the principle that data should drive every decision, and automation should fuel every workflow.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg text-blue-600 font-bold uppercase tracking-widest text-xs">
                <span>Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Empowering Businesses to Transcend Limits</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Starting as a small boutique analytics firm, Zaplytics grew into a full-scale digital power-house. We saw companies struggling with manual tasks and disjointed marketing efforts, and we knew there was a better way.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is to bridge the gap between human creativity and technical precision. By leveraging the latest in AI and data science, we help brands move faster, think smarter, and grow bigger.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-blue-600 mb-2">150+</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Clients Worldwide</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-teal-500 mb-2">1.2M</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Events Tracked Daily</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/digital-agency-team/800/600" 
                alt="Zaplytics Team" 
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-slate-100 hidden md:block">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">People Focused</h4>
                <p className="text-sm text-slate-500">Technology is our tool, but people are our priority. We build relationships, not just projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Core Values" subtitle="The principles that guide every line of code and every campaign we run." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8 text-blue-600" />, title: 'Radical Transparency', desc: 'We provide clear, honest data. No vanity metrics, just the truth about your performance.' },
              { icon: <Rocket className="w-8 h-8 text-teal-500" />, title: 'Innovation Obsessed', desc: 'We stay on the bleeding edge of AI and automation so your business stays ahead of the competition.' },
              { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: 'Security First', desc: 'Your data is your most valuable asset. We implement industry-leading protocols to keep it safe.' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
