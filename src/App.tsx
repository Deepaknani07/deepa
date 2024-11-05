// src/App.tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <div className="text-2xl font-bold">Deepak's Portfolio</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Deepak</h1>
        <p className="text-lg md:text-2xl">Futuristic Software Developer | Backend Engineer | Automation Enthusiast</p>
        <div className="mt-8">
          <a href="#projects" className="px-6 py-2 rounded bg-teal-500 text-white hover:bg-teal-400">Explore Projects</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">I'm Deepak, a B.E. student with a passion for building intelligent systems using languages like C, C++, Java, and Python. I'm also skilled with frameworks such as Django and AngularJS.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "C++", level: "Advanced" },
            { name: "Java", level: "Intermediate" },
            { name: "Python", level: "Advanced" },
            { name: "Django", level: "Intermediate" },
            { name: "AngularJS", level: "Beginner" },
          ].map((skill, index) => (
            <div key={index} className="p-4 bg-gray-800 rounded">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Crime Management", description: "An intelligent system for managing and retrieving crime data efficiently." },
            { title: "Placement Prediction", description: "A prediction model to forecast placement success using data science techniques." },
            { title: "eBay Automation", description: "Automating eBay processes with Selenium for efficient online operations." },
          ].map((project, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-700" />
          <textarea placeholder="Message" rows={4} className="p-2 rounded bg-gray-700"></textarea>
          <button type="submit" className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default App;
