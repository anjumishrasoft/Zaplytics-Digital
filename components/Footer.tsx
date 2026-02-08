
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Rocket className="w-6 h-6 text-teal-400" />
              <span className="text-xl font-bold text-white tracking-tight">
                Zaplytics<span className="text-teal-400">Digital</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Smart Automation. Smarter Growth. We empower businesses with cutting-edge digital marketing, analytics, and AI-driven automation workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Zaplytics</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Marketing Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GA4 & Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Workflow Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Agents & Chatbots</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>anju.p.mishra50@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <span>+91 9111775057</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-1" />
                <span>1044, Gera Imperium, Near to Wipro Circle Phase 2, Hinjewadi, Pune 411057</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Zaplytics Digital. All rights reserved. Built with precision and AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
