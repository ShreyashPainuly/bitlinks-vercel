// import React from 'react';
// import Image from 'next/image';

// const AboutPage = () => {
//   return (
//     <main className="bg-gradient-to-br from-blue-100 to-white min-h-screen flex items-center justify-center">
//       <div className="bg-white p-12 rounded-xl shadow-2xl w-full max-w-5xl animate-fadeIn animate-slide flex flex-col md:flex-row gap-10 items-center">
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-5xl font-extrabold text-blue-700 mb-4">About BitLinks</h1>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             BitLinks is a simple and powerful URL shortener designed for speed and ease&#8209;of&#8209;use. Whether you&apos;re a developer, marketer, or casual user, BitLinks provides a reliable and fast solution for managing links. Our mission is to make sharing and tracking links effortless and elegant.
//           </p>
//         </div>
//         <div className="flex-1">
//           <Image
//             src="/vector.jpg"
//             alt="BitLinks Illustration"
//             width={400}
//             height={400}
//             className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </main> 
//   );
// };

// export default AboutPage;

"use client"
import React, { useEffect, useRef } from 'react';
import { Link2, Award, Users, Target, Zap, Shield, Globe, Star, Code, Heart, Rocket, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Enhanced 3D parallax and floating animations
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Hero section enhanced 3D tilt
      if (heroRef.current) {
        const rotateX = (clientY - centerY) / 30;
        const rotateY = (clientX - centerX) / 30;
        heroRef.current.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
      }

      // Floating elements parallax
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 0.03;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          el.style.transform = `translate(${x}px, ${y}px) translateZ(${index * 20}px)`;
        }
      });

      // Cards 3D parallax
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const speed = (index + 1) * 0.025;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          const rotateCardX = (clientY - centerY) / 100;
          const rotateCardY = (clientX - centerX) / 100;
          card.style.transform = `translate(${x}px, ${y}px) perspective(1000px) rotateX(${rotateCardX}deg) rotateY(${rotateCardY}deg) translateZ(30px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Generate shortened URLs in milliseconds with our blazing-fast infrastructure and global CDN network",
      color: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-500/30"
    },
    {
      icon: Shield,
      title: "Military Grade Security", 
      description: "Enterprise-level security protocols with SSL encryption and 99.9% uptime SLA guarantee",
      color: "from-emerald-400 to-green-500",
      glow: "shadow-emerald-500/30"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Worldwide CDN with edge servers ensuring lightning-fast redirects from anywhere on Earth",
      color: "from-blue-400 to-cyan-500",
      glow: "shadow-blue-500/30"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Comprehensive REST API, webhooks, and SDKs for seamless integration into any application",
      color: "from-purple-400 to-pink-500",
      glow: "shadow-purple-500/30"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Deep insights with click tracking, geographic data, device information, and conversion metrics",
      color: "from-indigo-400 to-blue-500",
      glow: "shadow-indigo-500/30"
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Intuitive interface designed with love, requiring zero learning curve for immediate productivity",
      color: "from-pink-400 to-rose-500",
      glow: "shadow-pink-500/30"
    }
  ];

  const stats = [
    { number: "15M+", label: "Links Created", icon: Link2, color: "from-blue-400 to-cyan-500" },
    { number: "750K+", label: "Active Users", icon: Users, color: "from-green-400 to-emerald-500" },
    { number: "99.99%", label: "Uptime SLA", icon: Award, color: "from-yellow-400 to-orange-500" },
    { number: "24/7", label: "Global Support", icon: Target, color: "from-purple-400 to-pink-500" }
  ];

  const timeline = [
    { year: "2024", title: "The Beginning", description: "BitLinks was born from a simple idea: make URL shortening elegant and powerful" },
    { year: "Q2", title: "First Million", description: "Reached 1M shortened links with zero downtime and incredible user feedback" },
    { year: "Q3", title: "Global Expansion", description: "Launched global CDN infrastructure across 6 continents for lightning speeds" },
    { year: "Q4", title: "Enterprise Ready", description: "Introduced API, analytics, and enterprise features for business users" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse transform-gpu"
        />
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse transform-gpu"
          style={{ animationDelay: '1s' }}
        />
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse transform-gpu"
          style={{ animationDelay: '2s' }}
        />
        <div 
          ref={el => floatingElementsRef.current[3] = el}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/6 to-emerald-400/6 rounded-full blur-3xl animate-pulse transform-gpu"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Enhanced 3D Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] transform-gpu" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Enhanced 3D Hero Section */}
        <div 
          ref={heroRef}
          className="max-w-7xl mx-auto mb-24 transform-gpu transition-transform duration-100 preserve-3d"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] p-12 lg:p-20 relative overflow-hidden transform-gpu">
            
            {/* 3D Floating Decorative Elements */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce transform-gpu" />
            <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-lg animate-pulse transform-gpu" />
            <div className="absolute bottom-8 left-12 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-md animate-ping transform-gpu" />
            <div className="absolute bottom-12 right-8 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-indigo-400/15 rounded-full blur-2xl animate-pulse transform-gpu" style={{ animationDelay: '1s' }} />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              
              {/* Content Side with Enhanced Typography */}
              <div className="text-center lg:text-left space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="font-bold text-white/90">Trusted by 750K+ Users</span>
                  </div>
                  
                  <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight">
                    About
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                      BitLinks
                    </span>
                  </h1>
                  
                  <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto lg:mx-0 shadow-lg transform hover:w-40 transition-all duration-500" />
                </div>

                <div className="space-y-6 text-lg lg:text-xl leading-relaxed">
                  <p className="text-white/90 font-medium">
                    BitLinks is the <strong className="text-blue-300">next-generation URL shortener</strong> built for speed, reliability, and user experience.
                  </p>
                  
                  <p className="text-white/70">
                    From developers to marketers, from startups to enterprises - we provide the most powerful and intuitive link management platform on the web.
                  </p>
                  
                  <p className="text-white/90 font-semibold text-2xl">
                    Our mission: <em className="text-purple-300">Revolutionize how the world shares and tracks links</em> ✨
                  </p>
                </div>

                {/* Enhanced 3D CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="/shorten" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-white shadow-[0_8px_32px_rgba(59,130,246,0.4)] border border-blue-400/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(59,130,246,0.6)] active:scale-95 transform-gpu inline-block text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Start Shortening
                      <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </span>
                  </a>
                  
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl font-bold text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95 transform-gpu">
                    <span className="flex items-center gap-2">
                      View Our Story
                      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-pink-400" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Enhanced 3D Visual Side */}
              <div className="relative flex justify-center">
                <div className="relative group perspective-2000">
                  
                  {/* Main 3D Card with Enhanced Depth */}
                  <div className="w-96 h-[500px] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_25px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] transform rotate-y-12 hover:rotate-y-0 transition-all duration-700 preserve-3d group-hover:scale-105">
                    <div className="p-8 h-full flex flex-col justify-between relative z-10">
                      
                      {/* Enhanced Header */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-[0_8px_32px_rgba(59,130,246,0.4)] mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <Link2 className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-2">BitLinks</h3>
                        <p className="text-blue-300 text-sm font-medium">Professional URL Management</p>
                      </div>

                      {/* Enhanced Features List */}
                      <div className="space-y-4">
                        {[
                          { label: 'Instant Generation', color: 'from-green-400 to-emerald-500' },
                          { label: 'Custom Domains', color: 'from-blue-400 to-cyan-500' },
                          { label: 'Real-time Analytics', color: 'from-purple-400 to-pink-500' },
                          { label: 'Global CDN Network', color: 'from-orange-400 to-red-500' },
                          { label: 'API Integration', color: 'from-yellow-400 to-amber-500' }
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                            <div className={`w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full shadow-lg animate-pulse`} style={{ animationDelay: `${index * 0.2}s` }} />
                            <span className="text-white/90 text-sm font-medium flex-1">{feature.label}</span>
                            <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center">
                              <div className="w-2 h-2 bg-white/60 rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Enhanced Bottom Demo */}
                      <div className="space-y-3">
                        <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/30 backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs text-white/60">Generated URL</span>
                          </div>
                          <div className="text-blue-300 text-sm font-mono">bit.ly/amazing-link</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Floating 3D Elements */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-[0_8px_32px_rgba(245,158,11,0.4)] animate-bounce opacity-90 transform-gpu" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-[0_6px_24px_rgba(34,197,94,0.4)] animate-pulse opacity-80 transform-gpu" />
                  <div className="absolute top-1/2 -right-10 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl shadow-[0_4px_16px_rgba(236,72,153,0.4)] animate-ping opacity-70 transform-gpu" />
                  <div className="absolute top-1/4 -left-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl shadow-[0_6px_20px_rgba(147,51,234,0.4)] animate-bounce opacity-60 transform-gpu" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Enhanced 3D Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow transform-gpu" />
                  <div className="absolute w-[400px] h-[400px] border border-white/3 rounded-full animate-spin-reverse transform-gpu" />
                  <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full animate-pulse transform-gpu" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Features Grid */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-4">
              Why Choose
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BitLinks?
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advanced features that make BitLinks the ultimate choice for modern URL management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 ${feature.glow} shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 transform-gpu preserve-3d`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced 3D Stats Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] p-12 relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
                  Our Impact
                </h2>
                <p className="text-lg text-white/70">
                  Numbers that showcase our commitment to excellence
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group transform hover:scale-110 transition-all duration-500">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl shadow-[0_8px_32px_rgba(59,130,246,0.3)] mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced 3D Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-white/70">
              From concept to the world's favorite URL shortener
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-[0_8px_32px_rgba(59,130,246,0.3)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform-gpu">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  
                  <div className="flex-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-lg group-hover:bg-white/15 group-hover:scale-105 transition-all duration-500 transform-gpu">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-400 to-purple-500 opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .perspective-2000 { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .rotate-y-0 { transform: rotateY(0deg); }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-spin-reverse { animation: spin 25s linear infinite reverse; }
        .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4); }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;