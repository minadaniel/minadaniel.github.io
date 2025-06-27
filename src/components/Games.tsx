
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Shape Shift: Puzzle Game",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
      alt: "Shape Shift",
      description: "Addictive puzzle game that challenges players' coordination skills. I came up with the idea, designed the game mechanics, created all assets, and developed it fully in Godot."
    },
    {
      title: "Space War",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop",
      alt: "Space War", 
      description: "A classic arcade-style space shooter featuring escalating difficulty, enemy ships, asteroids, and powerful upgrades. Designed for casual but engaging gameplay with retro vibes."
    },
    {
      title: "Catch Key",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      alt: "Catch Key",
      description: "A simple game where the player taps at just the right moment to catch a key using a bouncing ball. I also created a full Arabic course teaching how to build this game using Godot 4, covering topics like GDScript basics, signals, input handling, and Android export.",
      link: "https://www.udemy.com/course/arabic-godot-4-2d-android-game/"
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-slide-up hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-2 border-gray-100 pb-3 relative">
        Funny Android Games I've Made
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 transition-all duration-500 hover:w-24"></div>
      </h2>
      
      <p className="text-gray-700 mb-8 leading-relaxed">
        I've created several fun and playable Android games using the Godot Engine. While they are not yet published on the Play Store, they're complete, enjoyable, and reflect my skills in game design, GDScript, and mobile development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div 
            key={index}
            className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-fade-in relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              {/* TODO: Replace with actual game screenshots */}
              <img 
                src={game.image}
                alt={game.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {game.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {game.description}
              </p>
              
              {game.link && (
                <a 
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-red-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <ExternalLink size={16} />
                  Course on Udemy
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
