
import React from 'react';
import { MessageSquare, Settings, ClipboardList } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      <header className="px-6 py-4 border-b shadow-sm sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Hausmind AI logo" className="h-24 w-auto" />
          </a>
          <nav className="space-x-6">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Book a Demo</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <button className="text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Book a Free Demo
        </button>
      </section>

      <section id="services" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">What We Do</h3>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition">
            <div className="text-blue-600 mb-4">
              <MessageSquare size={40} />
            </div>
            <h4 className="text-xl font-semibold text-blue-600 mb-2">AI Chatbot Setup</h4>
            <p className="text-gray-600">Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition">
            <div className="text-green-600 mb-4">
              <Settings size={40} />
            </div>
            <h4 className="text-xl font-semibold text-green-600 mb-2">Workflow Automation</h4>
            <p className="text-gray-600">Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-xl transition">
            <div className="text-purple-600 mb-4">
              <ClipboardList size={40} />
            </div>
            <h4 className="text-xl font-semibold text-purple-600 mb-2">Lead Qualification Bots</h4>
            <p className="text-gray-600">Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Hausmind AI</h3>
          <p className="text-gray-700 text-lg">
            We help modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise, we deliver custom AI systems that save time and drive real results.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white text-center border-t">
        <h4 className="text-3xl font-bold mb-4">Ready to Build Your AI System?</h4>
        <p className="text-gray-600 mb-6">Book a free strategy session and see how automation can grow your business.</p>
        <button className="text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Book Your Free Demo
        </button>
      </section>

      <footer className="py-8 px-6 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
