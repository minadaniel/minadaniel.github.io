
import React from 'react';

const Languages = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        Languages
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      
      <ul className="space-y-3">
        <li className="text-gray-700 relative pl-6 hover:text-blue-600 transition-colors duration-300 before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:transition-transform before:duration-300 hover:before:rotate-90 animate-fade-in">
          <strong>Arabic:</strong> Native
        </li>
        <li className="text-gray-700 relative pl-6 hover:text-blue-600 transition-colors duration-300 before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:transition-transform before:duration-300 hover:before:rotate-90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <strong>English:</strong> Professional (IELTS 7.5)
        </li>
      </ul>
    </section>
  );
};

export default Languages;
