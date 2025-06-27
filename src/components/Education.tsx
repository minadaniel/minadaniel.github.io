
import React from 'react';

const Education = () => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        Education
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      
      <div className="animate-fade-in">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Bachelor of Medicine and Surgery</h3>
        <p className="text-gray-600">Ain Shams University – Class of 2018</p>
      </div>
    </section>
  );
};

export default Education;
