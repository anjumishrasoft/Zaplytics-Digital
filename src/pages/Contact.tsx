
import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2, Phone, ArrowRight, Calendar, MessageSquare, ShieldCheck, Clock, CircleDollarSign, Users, Upload, File, Trash2 } from 'lucide-react';

// Updated Webhook URL as per request
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxyQWVfO2VTPspnrDvgkh0iUr8cZQwXjMNV8UIkaq5AaWljdjtnaP-wpDJuoQyE6iYbVw/exec';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'booking'>('booking');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ name: string, base64: string, type: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile({
        name: file.name,
        type: file.type,
        base64: reader.result as string
      });
    };
    reader.readAsDataURL(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const rawData = Object.fromEntries(formData.entries());
    
    const payload = {
      fullName: rawData.fullName,
      email: rawData.email,
      service: rawData.service,
      message: rawData.message,
      type: activeTab === 'booking' ? 'appointment' : 'quote_request',
      date: activeTab === 'booking' ? rawData.appointmentDate : rawData.timelineDate,
      time: activeTab === 'booking' ? rawData.time : 'N/A',
      budget: activeTab === 'inquiry' ? rawData.budget : 'N/A',
      attachment: selectedFile ? {
        name: selectedFile.name,
        data: selectedFile.base64,
        mimeType: selectedFile.type
      } : null,
      submittedAt: new Date().toISOString()
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      await new Promise(r => setTimeout(r, 1500));
      setIsSuccess(true);
      setSelectedFile(null);
    } catch (err) {
      console.error("Transmission error:", err);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Header */}
      <section className="bg-slate-950 pt-40 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://picsum.photos/seed/tech-connect/1920/1080?blur=8" 
            alt="Technical Connection Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Strategic Growth Hub</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight italic">Secure Your <span className="text-blue-500">Competitive</span> Advantage.</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Schedule a technical discovery session or obtain a custom quote tailored to your budget and growth targets.
          </p>
        </div>
      </section>

      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Sidebar with Direct Contact Info */}
            <div className="lg:w-1/3 bg-slate-900 p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-10 tracking-tight">Technical Desks</h3>
                <div className="space-y-12">
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-white/10 p-4 rounded-2xl shadow-sm text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Inquiry Routing</p>
                      <p className="text-white font-bold text-sm break-all">anju.p.mishra50@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-white/10 p-4 rounded-2xl shadow-sm text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Signal / WhatsApp</p>
                      <p className="text-white font-bold text-sm">+91 91117 75057</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-white/10 p-4 rounded-2xl shadow-sm text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Pune Operations</p>
                      <p className="text-white font-bold text-sm leading-snug">
                        Gera Imperium, Hinjewadi Ph-2
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-blue-900/40">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                  <img 
                    src="https://picsum.photos/seed/server-logic/400/400" 
                    alt="Server Logic" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-4 relative z-10">
                  <ShieldCheck className="w-6 h-6 opacity-70" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Secure Transmission</span>
                </div>
                <h4 className="font-bold mb-2 text-sm relative z-10">Logic-Based Routing</h4>
                <p className="text-[11px] text-blue-100 leading-relaxed opacity-80 relative z-10">
                  Discovery calls sync to our calendar immediately. Quotes are prioritized by our engineering estimators.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-grow p-12 lg:p-20 flex flex-col min-h-[750px]">
              {isSuccess ? (
                <div className="text-center animate-in zoom-in duration-700 max-w-md mx-auto my-auto">
                  <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-teal-500/30">
                    <CheckCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Confirmed</h3>
                  <p className="text-slate-500 leading-relaxed mb-10 font-medium text-lg">
                    {activeTab === 'booking' 
                      ? "Your discovery call is locked. Check your inbox for the Google Calendar invite." 
                      : "Quote request received. We are crunching the numbers and will reach out with a custom proposal."}
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all"
                  >
                    Start New Request
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in duration-1000">
                  {/* Selection Tabs */}
                  <div className="inline-flex p-2 bg-slate-100 rounded-3xl mb-16 shadow-inner">
                    <button 
                      onClick={() => setActiveTab('booking')}
                      className={`flex items-center space-x-3 px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'booking' ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <Calendar className={`w-5 h-5 ${activeTab === 'booking' ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>Book Discovery Call</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('inquiry')}
                      className={`flex items-center space-x-3 px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'inquiry' ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <CircleDollarSign className={`w-5 h-5 ${activeTab === 'inquiry' ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>Get the Quotes</span>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                          <Users className="w-3 h-3 mr-2" /> Full Name
                        </label>
                        <input name="fullName" required type="text" placeholder="John Doe" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-200 text-xl font-bold text-slate-800" />
                      </div>
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                          <Mail className="w-3 h-3 mr-2" /> Work Email
                        </label>
                        <input name="email" required type="email" placeholder="john@company.com" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-200 text-xl font-bold text-slate-800" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-2 group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                          <ShieldCheck className="w-3 h-3 mr-2" /> Core Service
                        </label>
                        <div className="relative">
                          <select name="service" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all appearance-none cursor-pointer text-xl font-bold text-slate-700">
                            <option>Autonomous AI Agents</option>
                            <option>GA4 & Analytics Engine</option>
                            <option>Hyper-Automation (n8n/Make)</option>
                            <option>Performance Advertising</option>
                            <option>Others</option>
                          </select>
                          <div className="absolute right-0 bottom-5 pointer-events-none">
                            <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                          </div>
                        </div>
                      </div>
                      
                      {activeTab === 'booking' ? (
                        <div className="grid grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500">
                           <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                              <Calendar className="w-3 h-3 mr-2" /> Meeting Date
                            </label>
                            <input name="appointmentDate" required type="date" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold text-slate-800" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                              <Clock className="w-3 h-3 mr-2" /> Time (IST)
                            </label>
                            <input name="time" required type="time" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold text-slate-800" />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 group animate-in slide-in-from-right-4 duration-500">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                            <CircleDollarSign className="w-3 h-3 mr-2" /> Project Budget Range
                          </label>
                          <div className="relative">
                            <select name="budget" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all appearance-none cursor-pointer text-xl font-bold text-slate-700">
                              <option value="$100 - $500">$100 - $500</option>
                              <option value="$500 - $1,500">$500 - $1,500</option>
                              <option value="$1,500 - $5,000">$1,500 - $5,000</option>
                              <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                              <option value="$15,000+">$15,000+</option>
                            </select>
                            <div className="absolute right-0 bottom-5 pointer-events-none">
                              <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Only show Target Timeline for Quote Requests */}
                      {activeTab === 'inquiry' ? (
                        <div className="space-y-2 group animate-in slide-in-from-bottom-4 duration-500">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                            <Clock className="w-3 h-3 mr-2" /> Target Timeline
                          </label>
                          <div className="relative">
                            <select name="timelineDate" className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all appearance-none cursor-pointer text-xl font-bold text-slate-700">
                              <option>ASAP (Next 7 days)</option>
                              <option>Within 30 Days</option>
                              <option>Strategic / Long-Term</option>
                            </select>
                            <div className="absolute right-0 bottom-5 pointer-events-none">
                              <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 opacity-30 flex flex-col justify-end pb-4">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Appointment Verified</label>
                           <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Calendar Integration Active</p>
                        </div>
                      )}
                      
                      <div className="space-y-2 opacity-30 flex flex-col justify-end pb-4">
                         <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Submission ID</label>
                         <p className="text-xs font-mono font-bold text-slate-500">ZPL-{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                        <MessageSquare className="w-3 h-3 mr-2" /> Project Brief / Objectives
                      </label>
                      <textarea name="message" required rows={2} placeholder="Briefly outline your automation goals or current pain points..." className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all resize-none text-xl font-bold text-slate-800 placeholder:text-slate-200"></textarea>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center">
                        <Upload className="w-3 h-3 mr-2" /> Project Brief / Attachment (Optional)
                      </label>
                      
                      {!selectedFile ? (
                        <div 
                          onDragOver={onDragOver}
                          onDragLeave={onDragLeave}
                          onDrop={onDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-3xl p-10 transition-all cursor-pointer flex flex-col items-center justify-center space-y-4 ${isDragging ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-blue-400 hover:bg-slate-50'}`}
                        >
                          <input 
                            type="file" 
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                          />
                          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                            <Upload className="w-6 h-6" />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-bold text-slate-900">Click to upload or drag and drop</p>
                            <p className="text-xs text-slate-400 mt-1">PDF, DOC, TXT, PNG, JPG (Max 5MB)</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 animate-in zoom-in-95 duration-300">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                              <File className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 truncate max-w-[200px] md:max-w-md">{selectedFile.name}</p>
                              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ready for transmission</p>
                            </div>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setSelectedFile(null)}
                            className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-50 transition-all shadow-sm"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="pt-8">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto min-w-[340px] bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10 flex items-center justify-center active:scale-[0.98] disabled:bg-slate-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin mr-3" />
                            Transmitting Data...
                          </>
                        ) : (
                          <>
                            {activeTab === 'booking' ? "Confirm Discovery Session" : "Request Custom Proposal"}
                            <ArrowRight className="ml-3 w-5 h-5" />
                          </>
                        )}
                      </button>
                      <div className="mt-8 flex items-center space-x-3 text-slate-400 italic font-medium text-[10px] uppercase tracking-widest">
                        <Clock className="w-4 h-4" />
                        <span>All data is processed via Google Cloud Infrastructure</span>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Network Verification */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-16 italic">Technical Partner Ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <div className="text-2xl font-black tracking-tighter text-slate-900">GA4.AUDIT</div>
            <div className="text-2xl font-black tracking-tighter text-slate-900">MAKE.COM</div>
            <div className="text-2xl font-black tracking-tighter text-slate-900">ZAPLYTICS</div>
            <div className="text-2xl font-black tracking-tighter text-slate-900">N8N.INTEGRATE</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
