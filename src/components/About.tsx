
import React from 'react';

const About = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        About Me
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Creative and results-driven Godot Developer with strong experience in designing and developing engaging 2D games and cross-platform desktop and mobile applications. Skilled in GDScript, JavaScript, Firebase integration, and UI/UX design. Proven track record of delivering polished, bug-free games and apps for clients worldwide.
        </p>
        <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Quick to learn and adapt to new tools and project requirements. Available for remote freelance projects with strong communication skills and attention to detail.
        </p>
      </div>
    </section>
  );
};

export default About;
