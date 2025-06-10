import React, { useEffect } from "react";
import logo from "./logo.png";
import "./index.css";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Hausmind AI Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">Hausmind AI</span>
        </div>
        <nav className="space-x-4 text-sm font-medium">
          <a href="#services" className="text-gray-700 hover:text-black">Services</a>
          <a href="#case-studies" className="text-gray-700 hover:text-black">Case Studies</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <button
          className="bg-black text-white px-6 py-3 rounded-xl"
          onClick={() => window.Calendly.initPopupWidget({ url: 'https://calendly.com/hausmind/30min' })}
        >
          Book a Demo
        </button>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">AI Chatbots</h3>
            <p>Custom-trained bots that handle client inquiries 24/7.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
            <p>Automate repetitive business processes to save time and money.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">CRM Integration</h3>
            <p>Seamlessly connect our systems with your existing tools.</p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border rounded-xl p-6 shadow-md text-left">
            <h3 className="text-xl font-bold mb-2">Real Estate CRM Automation</h3>
            <p className="mb-3">Boosted client engagement and lead conversions by automating real estate communications.</p>
            <button className="text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
          <div className="border rounded-xl p-6 shadow-md text-left">
            <h3 className="text-xl font-bold mb-2">AI Chatbot for Client Engagement</h3>
            <p className="mb-3">Built a responsive, always-available chatbot to handle inquiries in under 2 seconds.</p>
            <button className="text-blue-600 font-semibold hover:underline">Read More</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Hausmind AI</h2>
        <p className="max-w-3xl mx-auto">
          We're a forward-thinking tech company helping small businesses leverage AI. Our mission is to automate everyday tasks so you can scale faster.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Talk</h2>
        <p>Click “Book a Demo” above to schedule a consultation at your convenience.</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
