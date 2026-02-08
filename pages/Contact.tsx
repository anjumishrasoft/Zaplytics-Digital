
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar as CalendarIcon, FileSpreadsheet } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const [formType, setFormType] = useState<'quote' | 'booking'>('quote');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a webhook (e.g., Zapier or n8n) 
    // to add to Google Sheets and Calendar.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Let's Build Something Smarter</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to scale? Reach out for a custom quote or book a strategy call with our automation experts.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
                <ul className="space-y-8">
                  <li className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Email Us</h4>
                      <p className="text-slate-600">anju.p.mishra50@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Call Us</h4>
                      <p className="text-slate-600">+91 9111775057</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-slate-600">1044, Gera Imperium, Near to Wipro Circle Phase 2, Hinjewadi, Pune 411057</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-500/20">
                <Clock className="w-10 h-10 mb-4 opacity-75" />
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  We aim to respond to all inquiries within 12 business hours. For urgent technical support, please use our priority portal.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex space-x-4 mb-10 border-b border-slate-100 pb-6">
                  <button 
                    onClick={() => setFormType('quote')}
                    className={`pb-2 px-4 font-bold text-sm transition-all relative ${formType === 'quote' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    Request a Quote
                    {formType === 'quote' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>}
                  </button>
                  <button 
                    onClick={() => setFormType('booking')}
                    className={`pb-2 px-4 font-bold text-sm transition-all relative ${formType === 'booking' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    Book Appointment
                    {formType === 'booking' && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full"></div>}
                  </button>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                    <CheckCircle2 className="w-20 h-20 text-teal-500 mx-auto" />
                    <h3 className="text-3xl font-bold text-slate-900">Successfully Scheduled!</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Thank you for choosing Zaplytics. Your details have been securely stored.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                      <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg text-blue-700 text-sm font-medium">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Added to Google Calendar</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-lg text-teal-700 text-sm font-medium">
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>Logged in Google Sheets</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-blue-600 font-bold hover:underline mt-6 block"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                        <input required type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                        <input type="text" placeholder="Nexus Solutions" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                        <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                    </div>

                    {formType === 'quote' ? (
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interested Service</label>
                        <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                          <option>Marketing Automation</option>
                          <option>GA4 & Analytics</option>
                          <option>Workflow Integration</option>
                          <option>AI Support Agents</option>
                          <option>Full Digital Audit</option>
                        </select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Preferred Consultation Date</label>
                        <input type="date" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Project Details / Message</label>
                      <textarea required rows={4} placeholder="Tell us about your goals..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center group active:scale-[0.98]">
                      {formType === 'quote' ? 'Send Quote Request' : 'Book My Consultation'}
                      <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-xs text-slate-400">
                      Automated sync: This booking will be instantly added to our <span className="font-bold">Google Calendar</span> and <span className="font-bold">Lead Tracker</span>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section teaser */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader title="Frequently Asked Questions" subtitle="Quick answers to common inquiries." />
          <div className="space-y-4 text-left">
            {[
              { q: 'How long does a typical GA4 setup take?', a: 'Standard GA4 migrations usually take between 3-5 business days depending on the complexity of your tracking requirements.' },
              { q: 'What automation tools do you support?', a: 'We specialize in n8n, Zapier, and Make.com, but can work with almost any platform featuring a robust API.' },
              { q: 'Do you offer ongoing support?', a: 'Yes! We offer monthly retainer packages for continuous optimization, monitoring, and updates to your workflows and ad accounts.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
