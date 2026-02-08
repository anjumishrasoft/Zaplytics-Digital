
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles, Zap, ShieldCheck, BrainCircuit } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Premium Markdown-lite component for structured AI responses
const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*|\n)/g);
  return (
    <div className="space-y-1">
      {parts.map((part, i) => {
        if (part === '\n') return <br key={i} />;
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-extrabold text-blue-600 drop-shadow-sm">{part.slice(2, -2)}</strong>;
        }
        if (part.trim().startsWith('- ')) {
          return (
            <div key={i} className="flex items-start space-x-2 my-1.5 animate-in slide-in-from-left-2 duration-500">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0"></div>
              <span className="text-slate-700 italic font-medium">{part.slice(2)}</span>
            </div>
          );
        }
        return <span key={i} className="text-slate-700 leading-relaxed">{part}</span>;
      })}
    </div>
  );
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Welcome to the **Zaplytics Intelligent Hub**. \n\nI am your dedicated AI Concierge. How can I assist you in automating your operations today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => m.text), userMessage].join('\n'),
        config: {
          systemInstruction: "You are the Zaplytics AI Concierge. Your persona is a brilliant, high-end tech consultant. Use bold text for key benefits. Use short paragraphs. Use bullet points for features. Be ultra-professional but exciting. Emphasize that we specialize in AI Agents, Make/n8n automation, and GA4. Encourage booking an audit.",
          temperature: 0.8,
        },
      });

      const aiResponse = response.text || "I apologize, but I'm having trouble retrieving data. Please contact us directly at +91 9111775057.";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Systems are temporarily throttled. Please reach us via **WhatsApp** or call **+91 9111775057** for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-24 z-[60]">
      {/* Dynamic Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-[0_20px_60px_rgba(37,99,235,0.4)] transition-all duration-500 flex items-center justify-center group relative overflow-hidden ${
          isOpen ? 'bg-slate-900 rotate-90 scale-90' : 'bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 hover:scale-110 active:scale-95'
        }`}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        {isOpen ? <X className="text-white w-6 h-6 relative z-10" /> : <BrainCircuit className="text-white w-6 h-6 relative z-10" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[380px] md:w-[460px] h-[620px] bg-white rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.3)] border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 fade-in duration-500">
          
          {/* High-End Header */}
          <div className="bg-slate-950 p-7 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 blur-[80px] rounded-full"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl border border-white/10">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-teal-500 border-2 border-slate-950 rounded-full shadow-lg"></div>
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tight">Zaplytics <span className="text-blue-400">Agent</span></h4>
                  <div className="flex items-center text-[10px] text-teal-400 font-black uppercase tracking-widest mt-0.5">
                    <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse shadow-[0_0_8px_#2dd4bf]"></span>
                    Agent Processing Live
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Luxury Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-grow p-6 overflow-y-auto space-y-7 bg-white bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-end space-x-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both`}>
                {msg.role === 'ai' && (
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center mb-1 flex-shrink-0 shadow-sm border border-slate-200">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                )}
                
                <div className={`max-w-[85%] px-6 py-4 rounded-[1.8rem] shadow-xl relative transition-all hover:shadow-2xl ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white rounded-br-none shadow-blue-500/20' 
                    : 'bg-gradient-to-br from-slate-50 to-white text-slate-800 border border-slate-100 rounded-bl-none ring-1 ring-slate-200/50'
                }`}>
                  <div className="text-[14px] md:text-[15px] leading-relaxed">
                    <FormattedMessage text={msg.text} />
                  </div>
                  
                  {msg.role === 'ai' && (
                    <div className="absolute -top-1 -right-1 opacity-20 rotate-12">
                      <Sparkles className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center mb-1 flex-shrink-0 shadow-sm border border-blue-200">
                    <User className="w-5 h-5 text-blue-700" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start items-end space-x-3 animate-pulse">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center mb-1">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
                <div className="bg-white border border-slate-100 px-6 py-4 rounded-3xl rounded-bl-none flex space-x-2 items-center shadow-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Futuristic Input Area */}
          <div className="p-7 bg-white border-t border-slate-100 shadow-[0_-20px_50px_rgba(0,0,0,0.03)]">
            <form onSubmit={handleSendMessage} className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-[2rem] blur-lg opacity-10 group-focus-within:opacity-30 transition-opacity duration-700"></div>
              <div className="relative flex items-center bg-slate-50 rounded-[1.5rem] border border-slate-200 focus-within:border-blue-400 focus-within:bg-white transition-all overflow-hidden shadow-inner">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about custom AI agents..."
                  className="flex-grow pl-6 pr-4 py-5 bg-transparent border-none text-sm font-semibold focus:ring-0 outline-none text-slate-800 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="mr-3 p-3 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-2xl hover:brightness-110 disabled:opacity-20 disabled:grayscale transition-all shadow-xl active:scale-90"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="mt-4 flex justify-center items-center space-x-5 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-default">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Secure Neural Bridge v4.0</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
