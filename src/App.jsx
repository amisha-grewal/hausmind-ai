
import React, { useEffect } from 'react';
import { MessageSquare, Settings, ClipboardList } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
            <a href="#calendly" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book a Demo</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <a href="#calendly" className="text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition inline-block">
          Book a Free Demo
        </a>
      </section>

      <section id="calendly" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">Book Your Demo</h3>
        <div className="max-w-4xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/inquiry-hausmindai/15min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto text-left">
          <p className="text-gray-600 text-center mb-6">Can’t book right now? Reach out directly.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border px-4 py-3 rounded-xl" />
            <input type="email" placeholder="Your Email" className="w-full border px-4 py-3 rounded-xl" />
            <textarea placeholder="Your Message" rows="4" className="w-full border px-4 py-3 rounded-xl"></textarea>
            <button disabled className="bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold opacity-50 cursor-not-allowed">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
