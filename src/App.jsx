
import { useEffect, useState } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className={`p-4 md:p-6 border-b border-gray-200 bg-white fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-sm' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Hausmind AI Logo" style={{ height: scrolled ? '4rem' : '9.375rem', transition: 'height 0.3s ease' }} />
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Book a Demo
          </a>
        </div>
      </header>

      <main className="pt-48">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-900 to-black text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Smarter Systems. Automated Growth.</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We build AI bots and automations that run your business while you focus on growth.
          </p>
          <a href="#contact" className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold">
            Book a Free Demo
          </a>
        </section>

        {/* Services */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">AI Chatbot Setup</h3>
            <p>Deploy smart bots on your site and social platforms to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Workflow Automation</h3>
            <p>Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Lead Qualification Bots</h3>
            <p>Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-10">Use Cases</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <h4 className="text-xl font-semibold mb-2">Real Estate</h4>
                <p>Qualify buyer leads, answer listings questions, and schedule viewings 24/7 with bots.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <h4 className="text-xl font-semibold mb-2">E-Commerce</h4>
                <p>Provide support, recommend products, and convert visitors into customers using AI flows.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl shadow">
                <h4 className="text-xl font-semibold mb-2">Agencies</h4>
                <p>Automate lead capture and onboarding so you can focus on creative work, not admin.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calendly Embed */}
        <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
          <h4 className="text-2xl font-bold mb-4">Book a 15-Minute Demo</h4>
          <div className="max-w-4xl mx-auto">
            <iframe src="https://calendly.com/inquiry-hausmindai/new-meeting" width="100%" height="600" frameBorder="0" title="Calendly Booking"></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 bg-white text-center">
          <h4 className="text-2xl font-bold mb-2">Contact Us Directly</h4>
  <p className="text-gray-600 mb-6">
    Not ready to book a demo yet? No worries — send us a message with your questions or ideas, and we’ll help you figure out the best next steps.
  </p>
          <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="max-w-2xl mx-auto space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border px-4 py-3 rounded-xl" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border px-4 py-3 rounded-xl" />
            <textarea name="message" placeholder="Your Message" rows="4" required className="w-full border px-4 py-3 rounded-xl" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
              Send Message
            </button>
          </form>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-gray-100 text-center">
          <h3 className="text-3xl font-bold mb-4">Client Success Stories</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We’re just getting started — and already building custom automation systems for early adopters.
            Want to be featured here? Let’s work together.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-500 italic">“This could be your story.”</p>
              <p className="mt-2 text-gray-400 text-sm">— Future Client</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-500 italic">“Hausmind AI helped us automate and scale faster.”</p>
              <p className="mt-2 text-gray-400 text-sm">— Placeholder Testimonial</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <p className="text-gray-500 italic">“We saved 20+ hours a week thanks to automation.”</p>
              <p className="mt-2 text-gray-400 text-sm">— Placeholder Client</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-black text-center text-gray-400">
          &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
