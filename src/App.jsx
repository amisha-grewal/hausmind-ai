
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.getElementById('site-logo');
      const header = document.getElementById('site-header');
      if (window.scrollY > 30) {
        logo.style.height = '70px';
        header.classList.add('shadow-md');
      } else {
        logo.style.height = '150px';
        header.classList.remove('shadow-md');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header id="site-header" className="fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-200">
          <img id="site-logo" src="/logo.png" alt="Hausmind AI Logo" style={{ height: '150px' }} className="transition-all duration-300" />
        </div>
      </header>

      <main className="pt-40">
        {/* Hero */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-3xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-16 w-16 mx-auto text-blue-500 mb-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17l5-5m0 0l-5-5m5 5H6" />
            </svg>
            <h1 className="text-4xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
            <p className="text-lg text-gray-600 mb-6">We build AI bots and automations that run your business while you focus on growth.</p>
            <a href="https://calendly.com/inquiry-hausmindai/new-meeting" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">Book a Free Demo</button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">AI Chatbot Setup</h3>
            <p>Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p>Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Lead Qualification Bots</h3>
            <p>Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-gray-50 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About Hausmind AI</h2>
            <p className="text-gray-700 text-lg">
              Hausmind AI helps modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise, we deliver custom AI systems that save time and drive results.
            </p>
          </div>
        </section>

        {/* Testimonials / Early Case Studies */}
        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Early Results</h2>
            <p className="text-gray-600 mb-8">We’re just getting started — but even our pilot tests have shown how powerful AI can be for small businesses.</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="italic">"Using Hausmind AI, we booked 3x more calls in our first week than we expected."</p>
                <p className="mt-4 font-semibold">— Beta Partner A</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="italic">"Automating our follow-ups with their bot saved us hours every week."</p>
                <p className="mt-4 font-semibold">— Beta Partner B</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gray-50 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center text-gray-600 mb-4">Not ready to book? Send us a quick message below and we’ll be in touch.</p>
          <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="grid gap-4">
            <input type="text" name="name" placeholder="Your Name" className="border rounded p-3" required />
            <input type="email" name="email" placeholder="Your Email" className="border rounded p-3" required />
            <textarea name="message" placeholder="Your Message" className="border rounded p-3" required></textarea>
            <button type="submit" className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700">Send Message</button>
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
