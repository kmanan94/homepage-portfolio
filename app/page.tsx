'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const homepageCarousel = [
    {
      title: "Welcome to my page!",
      content: "I've built this app myself with Next.js, React, & Typescript!"
    },
    {
      title: "Explore My Work",
      content: "Check out my projects to see what I've been building"
    },
    {
      title: "Thank you for visiting!",
      content: "This page was a fun weekend activity"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homepageCarousel.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [homepageCarousel.length]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8 w-full max-w-6xl">
        <div className="mx-auto max-w-4xl">
          
          {/* Hero Content with Fade Animation */}
          <div className="text-center mb-16">
            <div className="mb-12 transition-all duration-700 ease-in-out">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in">
                {homepageCarousel[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {homepageCarousel[currentSlide].content}
              </p>
            </div>

            {/* Enhanced Carousel Indicators */}
            <div className="flex items-center justify-center gap-3 mb-16">
              {homepageCarousel.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'C++', 'Golang', 'Full Stack'].map((tech, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 text-sm font-medium hover:border-gray-600 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: "💻", 
                title: "Projects", 
                desc: "Explore my latest work",
                link: "/projects"
              },
              { 
                icon: "👤", 
                title: "About Me", 
                desc: "Learn more about my journey",
                link: "/about"
              },
              { 
                icon: "📬", 
                title: "Contact", 
                desc: "Let's connect and collaborate",
                link: "/contact"
              }
            ].map((feature, i) => (
              <a
                key={i}
                href={feature.link}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 text-sm">
              Built with ❤️ as a weekend project
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-in-out;
        }
      `}</style>
    </main>
  );
}