
import React, { useState, useEffect } from 'react';
import { DollarSign, Clock, TrendingUp, Zap } from 'lucide-react';

const SavingsCalculator: React.FC = () => {
  const [hours, setHours] = useState<number>(40);
  const [rate, setRate] = useState<number>(30);
  const [savings, setSavings] = useState({ weekly: 0, monthly: 0, yearly: 0 });

  useEffect(() => {
    // High automation efficiency (85%)
    const efficiencyFactor = 0.85;
    const weekly = hours * rate * efficiencyFactor;
    setSavings({
      weekly: Math.round(weekly),
      monthly: Math.round(weekly * 4.33),
      yearly: Math.round(weekly * 52)
    });
  }, [hours, rate]);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-800/20 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 md:p-16 bg-slate-50 border-r border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
            <Zap className="w-6 h-6 text-blue-600 mr-2" />
            Automation ROI Engine
          </h3>
          <p className="text-slate-600 mb-10 text-base leading-relaxed">
            Input your current team's manual workload to see how much capital is being wasted on non-revenue generating tasks.
          </p>
          
          <div className="space-y-12">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Manual Hours / Week</label>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold">{hours}h</span>
              </div>
              <input 
                type="range" min="1" max="200" value={hours} 
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600 transition-all"
              />
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                <span>1 HOUR</span>
                <span>200 HOURS</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest">Hourly Labor Rate</label>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold">${rate}/hr</span>
              </div>
              <input 
                type="range" min="10" max="500" value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-blue-600 transition-all"
              />
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                <span>$10/HR</span>
                <span>$500/HR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 md:p-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h4 className="text-blue-100 uppercase tracking-widest text-xs font-black mb-10">Reclaimable Capital</h4>
          
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <p className="text-blue-100 text-sm font-medium">Weekly Savings</p>
              <p className="text-3xl font-bold tracking-tight">${savings.weekly.toLocaleString()}</p>
            </div>
            <div className="h-px bg-white/10 w-full"></div>
            <div className="flex items-center justify-between">
              <p className="text-blue-100 text-sm font-medium">Monthly Savings</p>
              <p className="text-3xl font-bold tracking-tight">${savings.monthly.toLocaleString()}</p>
            </div>
            <div className="h-px bg-white/10 w-full"></div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 relative group hover:bg-white/15 transition-all">
              <div className="absolute -top-3 left-6 bg-teal-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase">Maximum Impact</div>
              <p className="text-blue-100 text-xs uppercase font-black mb-2 tracking-widest">Total Yearly Reclaimable</p>
              <p className="text-5xl md:text-6xl font-black text-teal-300 tracking-tighter drop-shadow-lg">${savings.yearly.toLocaleString()}</p>
            </div>
          </div>
          
          <p className="mt-10 text-[10px] text-blue-200 italic font-medium">
            *This calculation assumes an 85% reduction in manual labor costs through Zaplytics autonomous AI agents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
