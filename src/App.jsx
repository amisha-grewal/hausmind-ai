
export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="p-6 border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Hausmind AI</h1>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition">
            Book a Demo
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-5xl font-bold mb-4">Smarter Systems. Automated Growth.</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          We build AI bots and automations that run your business while you focus on growth.
        </p>
        <a href="#contact" className="bg-black text-white px-6 py-3 rounded-2xl text-lg font-semibold">
          Book a Free Demo
        </a>
      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">AI Chatbot Setup</h3>
          <p>Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">Workflow Automation</h3>
          <p>Automate repetitive tasks across Zapier, Airtable, ChatGPT and other platforms.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold text-purple-600 mb-2">Lead Qualification Bots</h3>
          <p>Use AI to score and pass top leads to your inbox or CRM — instantly.</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-900">About Hausmind AI</h3>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          We help businesses ditch manual work with custom AI systems. Whether you're a solopreneur or a scaling team, we build the tools that save you time and drive real results.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-yellow-50 text-gray-900 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Why Choose Hausmind AI?</h3>
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="text-xl font-semibold mb-2">Lightning-Fast Setup</h4>
              <p>Most of our systems are up and running within days, not weeks — so you see results fast.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="text-xl font-semibold mb-2">Human-Centered Automation</h4>
              <p>We build bots that feel human — not robotic. Your customers stay engaged and supported.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h4 className="text-xl font-semibold mb-2">Custom, Not Cookie-Cutter</h4>
              <p>Your workflows are unique — so are our solutions. We tailor everything to your business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center bg-blue-50">
        <h4 className="text-3xl font-bold mb-4">Contact Us</h4>
        <form action="https://formspree.io/f/xjkrgvqn" method="POST" className="max-w-xl mx-auto text-left">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 mb-4 border rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 mb-4 border rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 mb-4 border rounded h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-300 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}
