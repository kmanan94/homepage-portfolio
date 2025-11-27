import React from 'react';
import { Mail, Clock, Shield, Linkedin, Twitter, Github } from 'lucide-react';

export default function ContactComingSoon() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full">
                <Mail className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Contact Form
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Coming Soon
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-center text-lg mb-8">
            I'm working on implementing a secure contact system to prevent spam and ensure quality communications.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 backdrop-blur">
              <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Spam Protection</h3>
                <p className="text-gray-400 text-sm">Advanced filtering to keep communications genuine and valuable</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 backdrop-blur">
              <Clock className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">In Development</h3>
                <p className="text-gray-400 text-sm">Building a better way to connect - stay tuned!</p>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
            <h3 className="text-white font-semibold mb-2 text-center">Need to reach me now?</h3>
            <p className="text-gray-300 text-sm text-center mb-4">
              Connect with me on social media or check back soon for the contact form.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://linkedin.com/in/kevin-manan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/kmanan94" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Thank you for your patience and understanding
        </p>
      </div>
    </div>
  );
}