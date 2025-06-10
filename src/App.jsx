
import React, { useState } from "react";

export default function App() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="p-6 border-b border-gray-800 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Hausmind AI Logo" style={{ height: "150px" }} />
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
          >
            Book a Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-950 to-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Your AI-Powered Automation Partner
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          We build AI bots and automations that grow your business while you focus on what matters most.
        </p>
        <button
          onClick={() => setShowCalendly(true)}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          Let’s Talk
        </button>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-2 right-4 text-black font-bold text-xl"
            >
              &times;
            </button>
            <iframe
              src="https://calendly.com/inquiry-hausmindai/new-meeting"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Calendly"
            ></iframe>
          </div>
        </div>
      )}

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">AI Chatbot Setup</h3>
          <p className="text-gray-400">Custom bots for your website and socials that handle FAQs, qualify leads, and book calls automatically.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-400 mb-2">Workflow Automation</h3>
          <p className="text-gray-400">Automate repetitive tasks across your favorite platforms like Zapier, Airtable, Make, and more.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">Lead Qualification Bots</h3>
          <p className="text-gray-400">Smart bots ask, score, and pass top leads to your CRM—so you close faster with less work.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-white">Client Success Stories</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">We're just getting started. These will be real stories from clients soon. Be one of the first and let us help you automate smarter.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl text-left">
            <p className="text-gray-300 italic">“Hausmind AI streamlined our client onboarding, saving hours every week.”</p>
            <p className="text-blue-400 mt-4 font-semibold">— Future Client</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-left">
            <p className="text-gray-300 italic">“The lead bot qualified 12 hot leads in one day. Game changer.”</p>
            <p className="text-blue-400 mt-4 font-semibold">— Early Adopter</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-left">
            <p className="text-gray-300 italic">“Automated tasks we didn’t even realize were wasting time.”</p>
            <p className="text-blue-400 mt-4 font-semibold">— Startup Founder</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-20 px-6 text-center">
        <h4 className="text-3xl font-bold mb-4 text-white">Let’s Start Something</h4>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Not ready to book a demo yet? Reach out and let's chat. We’d love to learn about your goals and how AI can help.
        </p>
        <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="max-w-xl mx-auto grid gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-3 rounded bg-gray-800 text-white" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 text-white" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="p-3 rounded bg-gray-800 text-white" required></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-gray-800 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
