import React, { useState, useEffect } from 'react';
import { TrendingUp, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'AI Chatbots', desc: 'Custom chatbots for your website and customer service.' },
    { title: 'Workflow Automations', desc: 'Automate repetitive tasks and streamline operations.' },
    { title: 'Data Insights', desc: 'AI-driven analytics to fuel your growth.' },
  ];

  const testimonials = [
    {
      name: 'Jane Doe, CEO of Acme Corp',
      quote: 'Hausmind AI completely transformed our customer support with seamless chatbots.',
    },
    {
      name: 'John Smith, Founder of StartupX',
      quote: 'Their automations saved us 10+ hours a week—game changer!',
    },
  ];

  return (
    <>
      <header className={\`
        fixed top-0 w-full z-50 bg-white transition-shadow
        \${scrolled ? 'shadow-md py-2' : 'py-6'}
      \`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-primary w-12 h-12" />
            <span className="font-semibold text-2xl text-neutral-900">Hausmind AI</span>
          </div>
          <nav className="space-x-6 hidden md:flex text-neutral-600">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#testimonials" className="hover:text-neutral-900">Testimonials</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <section className="relative flex flex-col items-center justify-center text-center bg-gradient-to-r from-primary to-accent text-white h-[80vh] overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Smarter Systems. Automated Growth.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-200">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <a
          href="#contact"
          className="bg-white text-neutral-900 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
        >
          Book a Free Demo
        </a>
      </section>

      <main className="max-w-7xl mx-auto py-16 px-6">
        <h2 id="services" className="text-3xl font-bold text-neutral-900 mb-8 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-neutral-100 hover:bg-neutral-200 p-6 rounded-2xl shadow transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-neutral-900">{s.title}</h3>
              <p className="text-neutral-700">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section id="testimonials" className="mt-24">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-2xl shadow-lg transition hover:shadow-xl"
              >
                <p className="italic text-neutral-700 mb-4">“{t.quote}”</p>
                <p className="font-semibold text-neutral-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-50 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-neutral-700 mb-1">Name</label>
              <input type="text" className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-neutral-700 mb-1">Email</label>
              <input type="email" className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-neutral-700 mb-1">Message</label>
              <textarea rows="5" className="w-full border border-neutral-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-2xl font-semibold hover:bg-primary-dark transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-4 md:space-y-0">
          <span>&copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-white transition" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-white transition" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-to-top fixed bottom-8 right-8 p-3 rounded-full bg-primary shadow-lg hover:bg-primary-dark transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}

export default App;