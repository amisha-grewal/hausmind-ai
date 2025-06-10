
import React, { useEffect, useState } from "react";

export default function App() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 shadow ${shrink ? "py-2" : "py-4"}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <img src="/logo.png" alt="Hausmind AI" style={{ height: shrink ? "50px" : "75px" }} />
          <a href="#book" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm">Book a Demo</a>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-100 to-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">We build AI bots and automations that run your business while you focus on growth.</p>
          <a href="#book" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-700">Book a Free Demo</a>
        </section>

        {/* About */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Hausmind AI</h2>
          <p className="text-gray-600 text-lg">We help modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise, we deliver custom AI systems that save time and drive real results.</p>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-100 px-6">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">🤖 AI Chatbot Setup</h3>
              <p className="text-gray-600">Deploy bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔁 Workflow Automation</h3>
              <p className="text-gray-600">Automate tasks across Zapier, Airtable, and ChatGPT — save time and reduce manual work.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🎯 Lead Qualification Bots</h3>
              <p className="text-gray-600">Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6">Client Stories in Progress</h2>
          <p className="text-gray-600 max-w-xl mx-auto">We're just getting started! Be among the first to join Hausmind AI and shape the future of automation. Early clients receive exclusive insights, support, and partnership perks.</p>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-6 bg-gray-50" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">Have a question or prefer email instead of booking? Reach out directly.</p>
            <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="grid gap-4">
              <input type="text" name="name" placeholder="Your Name" required className="p-3 border rounded-lg" />
              <input type="email" name="email" placeholder="Your Email" required className="p-3 border rounded-lg" />
              <textarea name="message" placeholder="Your Message" rows="4" required className="p-3 border rounded-lg" />
              <button type="submit" className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </section>

        {/* Calendly */}
        <section className="py-20 px-6 bg-white" id="book">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Book a Free Demo</h2>
            <div className="overflow-hidden rounded-xl shadow-xl">
              <iframe
                src="https://calendly.com/inquiry-hausmindai/new-meeting"
                width="100%"
                height="600"
                frameBorder="0"
                title="Book a Demo"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500 border-t">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
