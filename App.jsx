import React, { useState, useEffect } from 'react';
import { TrendingUp, Linkedin, Twitter } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'AI Chatbots', desc: 'Custom chatbots for your website and customer service.' },
    { title: 'Workflow Automations', desc: 'Automate repetitive tasks and streamline operations.' },
    { title: 'Data Insights', desc: 'AI-driven analytics to fuel your growth.' },
  ];

  return (
    <>
      <header className={\`
        fixed top-0 w-full z-50 bg-white transition-shadow
        \${scrolled ? 'shadow-md py-2' : 'py-6'}
      \`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-primary w-12 h-12" />
            <span className="font-semibold text-2xl text-neutral-900">Hausmind AI</span>
          </div>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-r from-primary to-accent text-white h-[80vh] overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Smarter Systems. Automated Growth.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-200">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <a
          href="#contact"
          className="bg-white text-neutral-900 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
        >
          Book a Free Demo
        </a>
      </section>

      <main className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-100 hover:bg-neutral-200 p-6 rounded-2xl shadow transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-neutral-900">{s.title}</h3>
              <p className="text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-neutral-900 text-neutral-400 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
          <span>&copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
