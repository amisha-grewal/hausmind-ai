
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
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300 ${
          headerShrink ? "py-2" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <img src="/logo.png" alt="Hausmind AI Logo" className="h-[150px]" />
          <button
            onClick={openCalendly}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Book a Free Demo
          </button>
        </div>
      </header>

      <main className="pt-40 px-6">
        {/* Hero */}
        <section className="text-center py-20">
          <div className="mx-auto w-20 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
          <p className="text-lg text-gray-600">
            We build AI bots and automations that run your business while you focus on growth.
          </p>
        </section>

        {/* Services */}
        <section className="py-16 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI Chatbot Setup</h3>
            <p className="text-gray-600">Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-gray-600">Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Lead Qualification Bots</h3>
            <p className="text-gray-600">Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </section>

        {/* About */}
        <section className="py-16 text-center bg-gray-50">
          <h3 className="text-2xl font-bold mb-2">About Hausmind AI</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise,
            we deliver custom AI systems that save time and drive real results.
          </p>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <h3 className="text-2xl font-bold text-center mb-6">What People Are Saying</h3>
          <div className="text-center text-gray-500">
            <p><em>No clients yet — but big things are coming. Stay tuned!</em></p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gray-50">
          <h3 className="text-2xl font-bold text-center mb-4">Not ready to book? Contact us directly.</h3>
          <form
            action="https://formspree.io/f/xjkrgvqn"
            method="POST"
            className="max-w-xl mx-auto grid gap-4"
          >
            <input type="text" name="name" placeholder="Your Name" required className="border px-4 py-2 rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="border px-4 py-2 rounded" />
            <textarea name="message" placeholder="Your Message" required className="border px-4 py-2 rounded h-32" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-xl">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
