// import React from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className='h-17 bg-blue-500 flex items-center justify-between px-3 text-white'>
//         <div className="logo font-bold text-2xl font-serif">
//            <Link href="/">BitLinks</Link>
//         </div>
//         <ul className='flex justify-center items-center gap-4'>
//             <Link className='font-mono' href="/"><li>Home</li></Link>
//             <Link className='font-mono' href="/about"><li>About</li></Link>
//             <Link className='font-mono' href="/shorten"><li>Shorten</li></Link>
//             <Link className='font-mono' href="/contact"><li>Contact Us</li></Link>
//             <li className='flex gap-3'>
//                 <Link className='font-mono' href="/shorten"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>Try Now</button></Link>
//                 <Link className='font-mono' href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>GitHub</button></Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar;

"use client"
import React, { useState, useEffect } from 'react';
import { Link2, Home, User, Scissors, Mail, Github, Menu, X, Zap, ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/shorten', label: 'Shorten', icon: Scissors },
    { href: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
          : 'bg-slate-900/60 backdrop-blur-md'
      }`}>
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-x opacity-50" />
        
        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <a href="/" className="group flex items-center gap-3 transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.4)] flex items-center justify-center group-hover:rotate-12 transition-all duration-500">
                  <Link2 className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">
                BitLinks
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeLink === link.href
                      ? 'text-blue-300 bg-white/10 backdrop-blur-sm border border-white/20'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2 relative z-10">
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </span>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Active Indicator */}
                  {activeLink === link.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/shorten"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] border border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_25px_rgba(59,130,246,0.4)] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Try Now
                </span>
              </a>
              
              <a
                href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] mx-4 mt-2 rounded-2xl">
            <div className="p-6 space-y-4">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeLink === link.href
                        ? 'text-blue-300 bg-white/10 backdrop-blur-sm border border-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="/shorten"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] border border-blue-400/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Try Now
                  </span>
                </a>
                
                <a
                  href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group w-full px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-bold text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;