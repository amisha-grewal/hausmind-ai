
import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [headerShrink, setHeaderShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendly = () => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.onload = () => {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/inquiry-hausmindai/new-meeting",
      });
    };
    document.body.appendChild(script);
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300 ${headerShrink ? "py-2" : "py-6"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <img src="/logo.png" alt="Hausmind AI Logo" className="h-[150px]" />
          <button onClick={openCalendly} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Book a Free Demo
          </button>
        </div>
      </header>

      <main className="pt-40 px-6">
        {/* Hero */}
        <section className="text-center py-20">
          <div className="mx-auto w-20 mb-4 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
          <p className="text-lg text-gray-600">We build AI bots and automations that run your business while you focus on growth.</p>
        </section>

        {/* Services */}
        <section className="py-20 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot Setup</h3>
            <p>Deploy smart bots on your site and socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p>Automate repetitive tasks across Zapier, Airtable, ChatGPT, and other platforms.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Lead Qualification Bots</h3>
            <p>Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">Not ready to book a call? Send us a message and we’ll get back to you within 24 hours.</p>
            <form method="POST" action="https://formspree.io/f/xjkrgvqn" className="grid gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="p-3 border border-gray-300 rounded" />
              <input type="email" name="email" placeholder="Your Email" required className="p-3 border border-gray-300 rounded" />
              <textarea name="message" placeholder="Your Message" required className="p-3 border border-gray-300 rounded h-32"></textarea>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="py-20 bg-white text-center">
          <h3 className="text-2xl font-bold mb-4">Client Results (Coming Soon)</h3>
          <p className="text-gray-600 max-w-xl mx-auto">We’re currently onboarding our first clients. Stay tuned for testimonials and success stories.</p>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 border-t mt-8">&copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.</footer>
    </div>
  );
}
