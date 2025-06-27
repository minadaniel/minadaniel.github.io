
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Game & App Developer",
      company: "Upwork – Remote",
      period: "2019 - Present",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
      alt: "Upwork",
      points: [
        "Completed multiple freelance projects using Godot Engine for both mobile and desktop platforms",
        "Developed fully functional and responsive 2D games with custom UI and smooth gameplay", 
        "Integrated Firebase for authentication and real-time data handling",
        "Maintained excellent client communication and earned positive feedback on Upwork"
      ]
    },
    {
      title: "Lead Developer - Coral Kingdom",
      company: "Ongoing Project",
      period: "Ongoing",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop",
      alt: "Coral Kingdom",
      link: "https://www.coralkingdom.info/",
      points: [
        "Leading the development of Coral Kingdom, an aquarium-style 2D game inspired by Facebook's aquarium games",
        "Built using Godot Engine with Firebase database and authentication integration",
        "Responsible for core gameplay systems, data syncing, and smooth user experience",
        "Overseeing a small team and coordinating updates and new features"
      ]
    },
    {
      title: "Hospital Productivity App",
      company: "Internal Project",
      period: "Internal Project",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop",
      alt: "Hospital App",
      points: [
        "Designed and built a custom productivity tool for a hospital department",
        "Enabled staff to organize, update, and securely share data using Firebase cloud services"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        Professional Experience
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="border-l-4 border-blue-200 pl-6 relative animate-fade-in hover:border-blue-400 transition-colors duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{exp.title}</h3>
                <p className="text-gray-600 font-medium">{exp.company}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <span className="text-gray-500 italic text-sm">{exp.period}</span>
                {/* TODO: Replace with actual project images */}
                <img 
                  src={exp.image} 
                  alt={exp.alt}
                  className="w-16 h-16 rounded-lg object-cover shadow-md hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            {exp.link && (
              <div className="mb-3">
                <a 
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-red-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <ExternalLink size={16} />
                  Project Website
                </a>
              </div>
            )}
            
            <ul className="space-y-2">
              {exp.points.map((point, pointIndex) => (
                <li 
                  key={pointIndex}
                  className="text-gray-700 relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:transition-transform before:duration-300 hover:before:rotate-90 hover:text-slate-800"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
