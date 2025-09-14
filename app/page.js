// import Image from "next/image";
// import localFont from "next/font/local";
// import Link from "next/link";

// const poppins = localFont({
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins",
//   weight: "100 900",
// });

// export default function Home() {
//   return (
//     <main className="bg-blue-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <p className={`text-3xl text-slate-950 font-bold ${poppins.className}`}>The best URL shortener in the market</p>
//           <p className="px-28 text-center font-serif text-lg text-slate-900">
//             We are the most straightforward and easy&#8209;to&#8209;use URL shortener in the market. With BitLinks, you can shorten your URLs in seconds and share them with anyone. Most of the time, you don&apos;t even need to sign up.
//           </p>
//           <div className='flex gap-3 justify-start'>
//                 <Link className='text-white' href="/shorten"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>Try Now</button></Link>
//                 <Link className='text-white' href="https://github.com/ShreyashPainuly/BitLinks-URLShortner"><button className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95'>GitHub</button></Link>
//           </div>
//         </div>
//         <div className="flex justify-start relative">
//           <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}/>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client"
import React, { useEffect, useRef } from 'react';
import { Link, ExternalLink, Zap, Shield, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Parallax and floating animations
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 0.02;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
        />
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <section ref={heroRef} className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-white/90 shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Lightning Fast URL Shortening</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                The
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Ultimate
                </span>
                URL Shortener
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Transform long, messy URLs into clean, shareable links in seconds. 
              <span className="text-blue-300 font-semibold"> No signup required</span> for most features.
              Experience the most intuitive URL shortener on the web.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-white/90 text-sm">Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-white/90 text-sm">Global CDN</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm">Instant Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/shorten" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-white shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 inline-block text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Try BitLinks Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
              
              <a href="https://github.com/ShreyashPainuly/BitLinks-URLShortner" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl font-bold text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 inline-block text-center">
                <span className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  View on GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* 3D Card Stack */}
            <div className="relative perspective-1000">
              {/* Main Card */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                      <Link className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/30 rounded w-3/4" />
                      <div className="h-2 bg-white/20 rounded w-1/2" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <div className="h-2 bg-white/40 rounded flex-1" />
                      </div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <div className="text-xs text-white/80">bit.ly/shortened</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-lg animate-bounce opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl shadow-lg animate-pulse opacity-70" />
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg shadow-lg animate-ping opacity-60" />
            </div>

            {/* Decorative Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 border border-white/10 rounded-full animate-spin-slow" />
              <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-spin-reverse" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10M+", label: "URLs Shortened", icon: Link },
            { number: "99.9%", label: "Uptime", icon: Shield },
            { number: "<1s", label: "Average Speed", icon: Zap }
          ].map((stat, index) => (
            <div key={index} className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .rotate-y-0 { transform: rotateY(0deg); }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-spin-reverse { animation: spin 25s linear infinite reverse; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}