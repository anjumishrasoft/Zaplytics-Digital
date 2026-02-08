
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-7'}`}>
      {/* Enhanced text protection gradient for transparency */}
      {!scrolled && <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none h-40"></div>}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-blue-600 p-2.5 rounded-2xl group-hover:bg-teal-500 transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:shadow-teal-500/40 rotate-3 group-hover:rotate-0">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <span 
              className={`text-2xl font-black font-poppins tracking-tighter transition-all duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}
              style={{ textShadow: scrolled ? 'none' : '0 4px 12px rgba(0,0,0,0.5)' }}
            >
              Zaplytics<span className="text-blue-500 group-hover:text-teal-400 ml-0.5">Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-black transition-all duration-300 hover:text-blue-500 tracking-[0.15em] uppercase relative group ${
                  isActive(link.path) 
                    ? 'text-blue-500' 
                    : (scrolled ? 'text-slate-800' : 'text-white')
                }`}
                style={{ textShadow: scrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.4)' }}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-10 py-4 rounded-full text-xs font-black transition-all shadow-2xl active:scale-95 uppercase tracking-[0.2em] ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-slate-900 shadow-blue-500/30' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 shadow-black/20'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${scrolled || isOpen ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-sm'} hover:text-blue-500`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-white z-[60] flex flex-col p-10 pt-28 animate-in fade-in slide-in-from-top-10 duration-500">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-3 bg-slate-50 rounded-full text-slate-900"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black transition-all tracking-tight ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-300 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-12">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full bg-blue-600 text-white px-8 py-6 rounded-3xl font-black text-xl shadow-[0_25px_60px_rgba(37,99,235,0.4)] uppercase tracking-widest"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
