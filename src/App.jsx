
import React, { useEffect, useState } from 'react';
import { MessageSquare, Settings, ClipboardList } from 'lucide-react';

export default function App() {
  const [isCalendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        setCalendlyReady(true);
        clearInterval(checkCalendly);
      }
    }, 500);
    return () => clearInterval(checkCalendly);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/inquiry-hausmindai' });
    } else {
      alert('Calendly is still loading. Please try again in a few seconds.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      <header className="px-6 py-4 border-b shadow-sm sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Hausmind AI logo" className="h-[150px] w-auto" />
          </a>
          <nav className="space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <button onClick={openCalendly} className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book a Demo</button>
          </nav>
        </div>
      </header>

      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <button onClick={openCalendly} className="text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Book a Free Demo
        </button>
      </section>

      <footer className="py-8 px-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
