import React from 'react';
import { Rocket, ChevronRight, Brain, Target, Users } from 'lucide-react';
import Link from 'next/link';

const FounderLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/50 backdrop-blur-md border-b border-blue-500/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Rocket className="text-blue-400 h-8 w-8" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                StartupSaathi
              </span>
            </div>
            <div className="flex items-center space-x-6">
              
              <a href="#about" className="text-blue-300 hover:text-blue-100 transition-colors flex items-center space-x-1 group">
                <span>About</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Your AI Co-Founder Journey Starts Here
          </h1>
          <p className="text-blue-200 text-xl mb-8 leading-relaxed">
            Transform your startup idea into reality with our AI-powered platform. 
            Get instant market analysis, validate your ideas, and build your MVP 
            with intelligent guidance every step of the way.
          </p>
          <Link href="/login">
          <button

           className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 
            text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/20 
            transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
            <span>Let's Begin</span>
            <ChevronRight className="h-5 w-5" />
          </button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
            border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform 
            hover:-translate-y-1 transition-all duration-300">
            <Brain className="h-8 w-8 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-blue-100">Get intelligent market analysis and strategic recommendations tailored to your startup.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 
            border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform 
            hover:-translate-y-1 transition-all duration-300">
            <Target className="h-8 w-8 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Idea Validation</h3>
            <p className="text-blue-100">Test and refine your business concept with data-driven validation tools.</p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 
            border border-blue-400/20 hover:shadow-lg hover:shadow-blue-500/20 transform 
            hover:-translate-y-1 transition-all duration-300">
            <Users className="h-8 w-8 text-blue-200 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guided Journey</h3>
            <p className="text-blue-100">Step-by-step guidance from ideation to launching your MVP.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FounderLanding;