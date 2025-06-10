
import React, { useState, useEffect } from "react";

export default function App() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm bg-white ${scrolled ? "py-2" : "py-6"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <img src="/logo.png" alt="Hausmind AI Logo" style={{ height: scrolled ? "70px" : "150px", transition: "height 0.3s ease" }} />
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
          >
            Book a Demo
          </button>
        </div>
      </header>

      <main className="pt-[180px]">
        {/* Hero */}
        <section className="py-24 px-6 text-center">
          <svg className='mx-auto mb-4' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
  <path d='M3 17l6-6 4 4 8-8'/>
  <path d='M14 7h7v7'/>
</svg> width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M20 6L9 17l-5-5'/></svg>
<h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Your AI-Powered Automation Partner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We build AI bots and automations that grow your business while you focus on what matters most.
          </p>
          <button
            onClick={() => setShowCalendly(true)}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Let’s Talk
          </button>
        </section>

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-4 w-full max-w-3xl h-[80vh] relative shadow-xl">
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
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <svg className='mb-2' width='32' height='32' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='17 8 12 3 7 8'/><line x1='12' y1='3' x2='12' y2='15'/></svg>
<h3 className="text-2xl font-semibold text-blue-700 mb-2">AI Chatbot Setup</h3>
            <p className="text-gray-600">Custom bots for your website and socials that handle FAQs, qualify leads, and book calls automatically.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <svg className='mb-2' width='32' height='32' fill='none' stroke='#10b981' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M4 4v5h.582A2.418 2.418 0 0 1 7 6.582V4H4zM20 20v-5h-.582A2.418 2.418 0 0 0 17 17.418V20h3zM4 20h3v-2.582A2.418 2.418 0 0 0 4.582 15H4v5zM20 4h-3v2.582A2.418 2.418 0 0 0 19.418 9H20V4z'/></svg>
<h3 className="text-2xl font-semibold text-green-700 mb-2">Workflow Automation</h3>
            <p className="text-gray-600">Automate repetitive tasks across your favorite platforms like Zapier, Airtable, Make, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <svg className='mb-2' width='32' height='32' fill='none' stroke='#8b5cf6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M9 12l2 2l4 -4'/><path d='M21 12a9 9 0 1 1-6.219-8.56'/></svg>
<h3 className="text-2xl font-semibold text-purple-700 mb-2">Lead Qualification Bots</h3>
            <p className="text-gray-600">Smart bots ask, score, and pass top leads to your CRM—so you close faster with less work.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Client Success Stories</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">We're just getting started. These will be real stories from clients soon. Be one of the first and let us help you automate smarter.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-left shadow">
              <p className="text-gray-700 italic">“Hausmind AI streamlined our client onboarding, saving hours every week.”</p>
              <p className="text-blue-700 mt-4 font-semibold">— Future Client</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-left shadow">
              <p className="text-gray-700 italic">“The lead bot qualified 12 hot leads in one day. Game changer.”</p>
              <p className="text-blue-700 mt-4 font-semibold">— Early Adopter</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-left shadow">
              <p className="text-gray-700 italic">“Automated tasks we didn’t even realize were wasting time.”</p>
              <p className="text-blue-700 mt-4 font-semibold">— Startup Founder</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-20 px-6 text-center">
          <h4 className="text-3xl font-bold mb-4 text-gray-900">Let’s Start Something</h4>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Not ready to book a demo yet? Reach out and let's chat. We’d love to learn about your goals and how AI can help.
          </p>
          <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="max-w-xl mx-auto grid gap-4">
            <input type="text" name="name" placeholder="Your Name" className="p-3 rounded bg-gray-100 text-gray-900 border" required />
            <input type="email" name="email" placeholder="Your Email" className="p-3 rounded bg-gray-100 text-gray-900 border" required />
            <textarea name="message" placeholder="Your Message" rows="5" className="p-3 rounded bg-gray-100 text-gray-900 border" required></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 border-t border-gray-300 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
