
import React from "react";

export default function HausmindAI() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 transition-all duration-300 shadow-sm" id="site-header">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <img src="/logo.png" alt="Hausmind AI Logo" className="h-[150px] transition-all duration-300 ease-in-out" id="site-logo" />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold"
            onClick={() => document.getElementById('calendly-modal').classList.remove('hidden')}
          >
            Book a Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 text-center">
        <svg className='mx-auto mb-6' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
  <path d='M3 17l6-6 4 4 8-8' />
  <path d='M14 7h7v7' />
</svg>
          <circle cx='12' cy='12' r='10'/>
          <circle cx='8' cy='8' r='1'/>
          <circle cx='16' cy='8' r='1'/>
          <circle cx='8' cy='16' r='1'/>
          <circle cx='16' cy='16' r='1'/>
          <line x1='8' y1='8' x2='16' y2='8'/>
          <line x1='8' y1='16' x2='16' y2='16'/>
          <line x1='8' y1='8' x2='8' y2='16'/>
          <line x1='16' y1='8' x2='16' y2='16'/>
        </svg>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Smarter Systems. Automated Growth.</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold"
          onClick={() => document.getElementById('calendly-modal').classList.remove('hidden')}
        >
          Book a Free Demo
        </button>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">AI Chatbot Setup</h3>
          <p className="text-gray-600">Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Workflow Automation</h3>
          <p className="text-gray-600">Automate tasks across Zapier, Airtable, ChatGPT, and other platforms.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Lead Qualification Bots</h3>
          <p className="text-gray-600">Score and filter leads, delivering the best ones to your inbox or CRM.</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">About Hausmind AI</h3>
          <p className="text-gray-600 text-lg">
            We help businesses ditch manual work with custom AI systems. Whether you're a solopreneur or a scaling team, we build the tools that save you time and drive real results.
          </p>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h4 className="text-3xl font-bold mb-6">Client Results (Coming Soon)</h4>
        <p className="text-gray-600">
          We’re currently onboarding our first clients. Check back soon for real-world AI wins!
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h4 className="text-3xl font-bold mb-4">Not ready to book?</h4>
          <p className="text-gray-600 mb-6">Reach out with questions or requests and we’ll get back within 1 business day.</p>
          <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="grid gap-4">
            <input type="text" name="name" placeholder="Your Name" className="p-3 rounded-md border border-gray-300" required />
            <input type="email" name="email" placeholder="Your Email" className="p-3 rounded-md border border-gray-300" required />
            <textarea name="message" placeholder="Your Message" className="p-3 rounded-md border border-gray-300" rows="5" required />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>

      {/* Calendly Modal */}
      <div id="calendly-modal" className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 hidden">
        <div className="bg-white rounded-xl p-4 w-full max-w-2xl relative">
          <button className="absolute top-2 right-3 text-gray-600 text-xl" onClick={() => document.getElementById('calendly-modal').classList.add('hidden')}>
            &times;
          </button>
          <div className="w-full h-[600px]">
            <iframe
              src="https://calendly.com/inquiry-hausmindai/new-meeting"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Demo"
            ></iframe>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function () {
            const header = document.getElementById('site-header');
            const logo = document.getElementById('site-logo');
            if (window.scrollY > 30) {
              logo.style.height = '70px';
              header.classList.add('shadow-md');
            } else {
              logo.style.height = '150px';
              header.classList.remove('shadow-md');
            }
          });
        `,
      }} />
    </div>
  );
}
