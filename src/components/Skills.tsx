
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: [
        "GDScript (Godot)",
        "JavaScript", 
        "Python",
        "Java",
        "Firebase (Firestore, Realtime DB, Auth)",
        "Git (GitHub)"
      ]
    },
    {
      title: "Frameworks/Engines",
      skills: [
        "Godot Engine (2D Game & App Development)",
        "Figma (UI/UX Design)"
      ]
    },
    {
      title: "Specializations", 
      skills: [
        "Mobile Game Development",
        "Cross-platform Desktop Apps",
        "Firebase Integration",
        "Monetization (AdMob, IAP)",
        "API Integration"
      ]
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        Technical Skills
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-xl p-6 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="font-semibold text-slate-800 mb-4 text-lg">{category.title}</h4>
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex}
                  className="text-gray-700 relative pl-6 hover:text-blue-600 transition-colors duration-300 before:content-['▹'] before:absolute before:left-0 before:text-blue-500 before:transition-transform before:duration-300 hover:before:rotate-90"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
