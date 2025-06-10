
import React from "react";
import { ChartBar, Settings, CheckCircle } from "lucide-react";
import "./index.css";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <header className="sticky top-0 z-50 bg-white shadow transition-all duration-300 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="Hausmind AI" style={{ height: "60px" }} />
          <button
            onClick={() => {
              const script = document.createElement("script");
              script.src = "https://assets.calendly.com/assets/external/widget.js";
              script.async = true;
              document.body.appendChild(script);
              window.Calendly.initPopupWidget({ url: 'https://calendly.com/inquiry-hausmindai/new-meeting' });
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Book a Free Demo
          </button>
        </div>
      </header>

      <main className="py-20">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
          <p className="text-xl text-gray-600">We build AI bots and automations that run your business while you focus on growth.</p>
        </section>

        <section className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <ChartBar className="text-blue-500 w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-2">AI Chatbot Setup</h2>
            <p>Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <Settings className="text-green-500 w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Workflow Automation</h2>
            <p>Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <CheckCircle className="text-purple-500 w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Lead Qualification Bots</h2>
            <p>Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t mt-16">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
