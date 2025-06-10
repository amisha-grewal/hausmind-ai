import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <a href="#contact" className="bg-black text-white px-6 py-3 rounded-xl inline-block">Book a Demo</a>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">AI Chatbots</h3>
            <p>Custom-trained bots that handle client inquiries 24/7.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Workflow Automation</h3>
            <p>Automate repetitive business processes to save time and money.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">CRM Integration</h3>
            <p>Seamlessly connect our systems with your existing tools.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Use Cases</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Ideal for real estate agents, consultants, and service providers. Focus on growth while we handle lead follow-ups, appointment booking, and more.
        </p>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Hausmind AI</h2>
        <p className="max-w-3xl mx-auto">
          We're a forward-thinking tech company helping small businesses leverage AI. Our mission is to automate everyday tasks so you can scale faster.
        </p>
      </section>

      {/* Calendly */}
      <section id="contact" className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Book a Consultation</h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://calendly.com/hausmind/30min"
            width="100%"
            height="600"
            frameBorder="0"
            title="Schedule Meeting"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
