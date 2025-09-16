"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Mail, User, MessageSquare, Send, Phone, MapPin, Clock, Star, Heart, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const floatingElementsRef = useRef([]);

  // Floating background elements
  useEffect(() => {
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after showing success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@bitlinks.com",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "Tech Hub, USA"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"
        />
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-white/90 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Get in Touch</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-4">
            Contact
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have questions or feedback? We'd love to hear from you! Our team is here to help make your experience with BitLinks amazing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-400" />
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-blue-300 font-medium">{info.value}</p>
                        <p className="text-white/60 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-lg">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Why Choose Us?
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Response Time", value: "< 24 hrs" },
                  { label: "Customer Rating", value: "4.9/5 ⭐" },
                  { label: "Support Availability", value: "24/7" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-white/70">{stat.label}</span>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
                <p className="text-white/60">Fill out the form below and we'll get back to you soon</p>
              </div>

              {submitted ? (
                /* Success State */
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent! 🎉</h3>
                  <p className="text-white/70 mb-6">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/30 text-green-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Expected response: Within 24 hours</span>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-white/80 font-medium">Your Name</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="block text-white/80 font-medium">Your Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-purple-400 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="block text-white/80 font-medium">Your Message</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-white/40 group-focus-within:text-pink-400 transition-colors" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows="5"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-pink-400 focus:bg-white/10 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-white shadow-[0_8px_32px_rgba(59,130,246,0.3)] border border-blue-400/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </span>
                  </button>

                  {/* Form Footer */}
                  <div className="text-center pt-4">
                    <p className="text-white/50 text-sm">
                      We typically respond within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start shortening your links?
            </h3>
            <p className="text-white/70 mb-6">
              Join thousands of users who trust BitLinks for their URL shortening needs.
            </p>
            <a
              href="/shorten"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-white shadow-[0_8px_32px_rgba(34,197,94,0.3)] border border-green-400/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(34,197,94,0.4)] active:scale-95"
            >
              <span>Get Started Now</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
};

export default ContactPage;
