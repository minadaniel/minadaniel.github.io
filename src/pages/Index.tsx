
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Games from '../components/Games';
import Education from '../components/Education';
import Languages from '../components/Languages';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <About />
        <Skills />
        <Experience />
        <Games />
        <Education />
        <Languages />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
