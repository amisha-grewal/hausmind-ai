
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

      <section id="services" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-12">What We Do</h3>
        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm text-left">
            <MessageSquare className="w-8 h-8 mb-4 text-blue-600" />
            <h4 className="text-xl font-semibold mb-2">AI Chatbot Setup</h4>
            <p className="text-gray-600">Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm text-left">
            <Settings className="w-8 h-8 mb-4 text-green-600" />
            <h4 className="text-xl font-semibold mb-2">Workflow Automation</h4>
            <p className="text-gray-600">Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm text-left">
            <ClipboardList className="w-8 h-8 mb-4 text-purple-600" />
            <h4 className="text-xl font-semibold mb-2">Lead Qualification Bots</h4>
            <p className="text-gray-600">Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Hausmind AI</h3>
          <p className="text-lg text-gray-700">
            We help modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise,
            we deliver custom AI systems that save time and drive real results.
          </p>
        </div>
      </section>

      <section id="cases" className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12">Case Studies</h3>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-left border">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">📦 E-Commerce Automation</h4>
              <p className="text-gray-700">
                Built a chatbot for a Shopify store that cut customer service time by 60% and increased qualified leads by 40% through 24/7 automated responses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-left border">
              <h4 className="text-xl font-semibold mb-2 text-green-600">🏡 Real Estate Lead Capture</h4>
              <p className="text-gray-700">
                Implemented a lead qualification bot for a real estate agent that pre-screened prospects and synced with their CRM, resulting in 30% more showings booked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calendly" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">Book Your Demo</h3>
        <div className="max-w-4xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/inquiry-hausmindai"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto text-left">
          <p className="text-gray-600 text-center mb-6">Can’t book right now? Reach out directly.</p>
          
<form
  action="https://formspree.io/f/xkndkknd"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full border px-4 py-3 rounded-xl"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full border px-4 py-3 rounded-xl"
  />
  <textarea
    name="message"
    required
    rows="4"
    placeholder="Your Message"
    className="w-full border px-4 py-3 rounded-xl"
  ></textarea>
  <input type="hidden" name="_captcha" value="false" />
  <button
    type="submit"
    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
  >
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
