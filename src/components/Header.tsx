
import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-slate-800 to-blue-600 text-white py-16 px-4 rounded-b-3xl shadow-2xl animate-fade-in">
      <div className="container mx-auto text-center max-w-4xl">
        {/* TODO: Replace with your actual profile image - Upload your photo to /public/images/profile.jpg and change src to "/images/profile.jpg" */}
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face" 
          alt="Mina Daniel" 
          className="w-40 h-40 rounded-full object-cover border-4 border-white mx-auto mb-6 hover:rotate-6 hover:scale-105 transition-all duration-500 shadow-xl animate-scale-in"
        />
        <h1 className="text-5xl font-bold mb-4 animate-slide-up">Mina Daniel</h1>
        <p className="text-xl opacity-90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Godot Developer | Game and App Developer
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <MapPin size={16} />
            <span>ElMinya, Egypt</span>
          </div>
          <a href="mailto:mina1231994@gmail.com" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:text-blue-200">
            <Mail size={16} />
            <span>mina1231994@gmail.com</span>
          </a>
          <a href="tel:+201141691810" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:text-blue-200">
            <Phone size={16} />
            <span>+20 114 169 1810</span>
          </a>
          <a 
            href="https://www.upwork.com/freelancers/~017dbb2a265cd0ee8f" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 hover:text-blue-200"
          >
            <ExternalLink size={16} />
            <span>Upwork Profile</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
