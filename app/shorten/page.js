// "use client"
// import React, { useState } from 'react';

// const Shorten = () => {
//     const [url, seturl] = useState("")
//     const [shorturl, setshorturl] = useState("")
//     const [generated, setGenerated] = useState(false)

//     const generate = () => {
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({
//         "url": url,
//         "shorturl": shorturl
//       });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };

      
//       fetch("/api/generate", requestOptions)
//         .then((response) => response.json())
//         .then((result) => {
//           setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
//           seturl("")
//           setshorturl("")
//           console.log(result)
//           alert(result.message)
//         })
//         .catch((error) => console.error(error));
//     }

//   return (
//     <div className='mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4'> 
//       <h1 className='text-2xl font-bold'>Generate your short URLs</h1>
//       <div className='flex flex-col gap-2'>
//         <input type="text"
//         value={url}
//         className='px-4 py-2 focus:outline-blue-500 bg-white rounded-md'
//         placeholder="Enter your URL" 
//         onChange={e => {seturl(e.target.value)}} />

//         <input type="text" 
//         value={shorturl}
//         className='px-4 py-2 focus:outline-blue-500 bg-white rounded-md'
//         placeholder="Enter your preffered short URL" 
//         onChange={e => {setshorturl(e.target.value)}} />
//         <button onClick={generate} className='bg-blue-400 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-xl p-3 py-1 font-bold transition-transform duration-100 active:scale-95 my-3 text-white'>Generate</button>
//       </div>

//       {generated && (
//         <div className="mt-6 bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">🎉 Your Shortened Link</h2>
//           <a
//             href={generated}
//             target="_blank"
//             className="text-blue-600 text-xl font-bold break-all hover:underline hover:text-blue-500 transition"
//           >
//             {generated}
//           </a>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Shorten;

"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Link2, Sparkles, Copy, Check, ExternalLink, ArrowRight, Globe, Zap, Shield } from 'lucide-react';

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [urlError, setUrlError] = useState("")
  const [shortUrlError, setShortUrlError] = useState("")
  
  const containerRef = useRef(null);
  const floatingElementsRef = useRef([]);

  // Mouse movement parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 0.015;
          const x = (clientX - centerX) * speed;
          const y = (clientY - centerY) * speed;
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // URL validation
  const validateUrl = (url) => {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(url);
  };

  // Short URL validation
  const validateShortUrl = (shortUrl) => {
    const shortUrlPattern = /^[a-zA-Z0-9-_]+$/;
    return shortUrlPattern.test(shortUrl) && shortUrl.length >= 3 && shortUrl.length <= 20;
  };

  const generate = async () => {
    // Reset errors
    setUrlError("");
    setShortUrlError("");
    
    // Validation
    if (!url.trim()) {
      setUrlError("Please enter a URL");
      return;
    }
    
    if (!validateUrl(url)) {
      setUrlError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }
    
    if (!shortUrl.trim()) {
      setShortUrlError("Please enter a preferred short URL");
      return;
    }
    
    if (!validateShortUrl(shortUrl)) {
      setShortUrlError("Short URL must be 3-20 characters, alphanumeric, hyphens, and underscores only");
      return;
    }

    setIsGenerating(true);
    
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "url": url,
        "shorturl": shortUrl
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const response = await fetch("/api/generate", requestOptions);
      const result = await response.json();
      
      if (response.ok) {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setUrl("");
        setShortUrl("");
        // Show success without alert
      } else {
        // Handle API errors
        if (result.message) {
          if (result.message.includes("already exists")) {
            setShortUrlError("This short URL is already taken. Please try another one.");
          } else {
            setUrlError(result.message);
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setUrlError("Something went wrong. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      generate();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={el => floatingElementsRef.current[0] = el}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"
        />
        <div 
          ref={el => floatingElementsRef.current[1] = el}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div 
          ref={el => floatingElementsRef.current[2] = el}
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm text-white/90 shadow-lg mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>URL Shortener</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            Shorten Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Links Instantly
            </span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transform your long URLs into clean, shareable links in seconds
          </p>
        </div>

        {/* Main Card */}
        <div 
          ref={containerRef}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Input Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Create Short Link</h2>
                  <p className="text-white/60">Enter your details below</p>
                </div>
              </div>

              {/* URL Input */}
              <div className="space-y-2">
                <label className="block text-white/80 font-medium">Original URL</label>
                <div className="relative group">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-blue-400 transition-colors" />
                  <input
                    type="text"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className={`w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-all duration-300 ${urlError ? 'border-red-400' : 'border-white/20'}`}
                    placeholder="https://your-long-url.com/very/long/path"
                  />
                </div>
                {urlError && <p className="text-red-400 text-sm mt-1">{urlError}</p>}
              </div>

              {/* Short URL Input */}
              <div className="space-y-2">
                <label className="block text-white/80 font-medium">Custom Short URL</label>
                <div className="relative group">
                  <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-purple-400 transition-colors" />
                  <div className="flex">
                    <div className="flex items-center px-4 py-4 bg-white/5 border-2 border-r-0 border-white/20 rounded-l-2xl text-white/60 text-sm whitespace-nowrap">
                      bitlinks.com/
                    </div>
                    <input
                      type="text"
                      value={shortUrl}
                      onChange={e => setShortUrl(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className={`flex-1 pl-2 pr-4 py-4 bg-white/5 backdrop-blur-sm border-2 border-l-0 rounded-r-2xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all duration-300 ${shortUrlError ? 'border-red-400' : 'border-white/20'}`}
                      placeholder="my-custom-link"
                    />
                  </div>
                </div>
                {shortUrlError && <p className="text-red-400 text-sm mt-1">{shortUrlError}</p>}
              </div>

              {/* Generate Button */}
              <button
                onClick={generate}
                disabled={isGenerating}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-white shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Generate Short Link
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Result/Preview Section */}
            <div className="space-y-6">
              {!generated ? (
                /* Preview State */
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
                    <Link2 className="w-12 h-12 text-white/40" />
                  </div>
                  <h3 className="text-xl font-semibold text-white/80 mb-2">Ready to Shorten</h3>
                  <p className="text-white/50">Your shortened link will appear here</p>
                  
                  {/* Feature List */}
                  <div className="mt-8 space-y-3">
                    {[
                      { icon: Shield, text: "Secure & Reliable" },
                      { icon: Zap, text: "Lightning Fast" },
                      { icon: Globe, text: "Global Access" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-white/60 justify-center">
                        <feature.icon className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Success State */
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl border border-green-400/20 p-6 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Success!</h3>
                      <p className="text-green-300 text-sm">Your link has been shortened</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm mb-2">Your shortened URL:</p>
                    <div className="flex items-center gap-3">
                      <a
                        href={generated}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-blue-300 font-mono text-lg break-all hover:text-blue-200 transition-colors"
                      >
                        {generated}
                      </a>
                      <div className="flex gap-2">
                        <button
                          onClick={copyToClipboard}
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                          title="Copy to clipboard"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-white/70 group-hover:text-white" />
                          )}
                        </button>
                        <a
                          href={generated}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                          title="Open link"
                        >
                          <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {copied && (
                    <div className="mt-3 text-center">
                      <span className="text-green-300 text-sm">✨ Copied to clipboard!</span>
                    </div>
                  )}
                  
                  <button
                    onClick={() => setGenerated("")}
                    className="w-full mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-white/70 hover:text-white transition-all duration-200"
                  >
                    Create Another Link
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { number: "10M+", label: "Links Created", color: "from-blue-400 to-blue-600" },
            { number: "99.9%", label: "Uptime", color: "from-green-400 to-green-600" },
            { number: "<0.5s", label: "Average Response", color: "from-purple-400 to-purple-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Shorten;