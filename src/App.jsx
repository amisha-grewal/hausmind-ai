import React from 'react';

export default function App() {
  return (
    <div className='min-h-screen bg-white text-gray-900 font-sans'>
      <header className='px-6 py-4 border-b shadow-sm'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-blue-600'>Hausmind AI</h1>
          <nav className='space-x-6'>
            <a href='#services' className='text-gray-600 hover:text-blue-600'>Services</a>
            <a href='#about' className='text-gray-600 hover:text-blue-600'>About</a>
            <a href='#contact' className='text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition'>Book a Demo</a>
          </nav>
        </div>
      </header>
      <section className='text-center py-24 px-6 bg-gradient-to-br from-blue-50 to-white'>
        <h2 className='text-5xl font-bold mb-4'>Smarter Systems. Automated Growth.</h2>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-6'>We build AI bots and automations that run your business while you focus on growth.</p>
        <button className='text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition'>Book a Free Demo</button>
      </section>
      <section id='services' className='py-20 px-6 max-w-6xl mx-auto text-center'>
        <h3 className='text-3xl font-bold mb-12'>What We Do</h3>
        <div className='grid md:grid-cols-3 gap-8 text-left'>
          <div className='p-6 bg-white border rounded-xl shadow hover:shadow-lg transition'>
            <h4 className='text-xl font-semibold text-blue-600 mb-2'>AI Chatbot Setup</h4>
            <p className='text-gray-600'>Deploy smart bots on your site and social platforms to handle FAQs, qualify leads, and book meetings.</p>
          </div>
          <div className='p-6 bg-white border rounded-xl shadow hover:shadow-lg transition'>
            <h4 className='text-xl font-semibold text-green-600 mb-2'>Workflow Automation</h4>
            <p className='text-gray-600'>Automate repetitive business tasks and connect your favorite tools like Zapier, Airtable, and ChatGPT.</p>
          </div>
          <div className='p-6 bg-white border rounded-xl shadow hover:shadow-lg transition'>
            <h4 className='text-xl font-semibold text-purple-600 mb-2'>Lead Qualification Bots</h4>
            <p className='text-gray-600'>Use AI to score and filter leads, delivering only the best prospects to your inbox or CRM.</p>
          </div>
        </div>
      </section>
      <section id='about' className='py-20 px-6 bg-gray-50 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h3 className='text-3xl font-bold mb-4'>About Hausmind AI</h3>
          <p className='text-gray-700 text-lg'>Hausmind AI helps modern businesses scale through intelligent automation. Whether you're a solo founder or an enterprise, we deliver custom AI systems that save time and drive results.</p>
        </div>
      </section>
      <section id='contact' className='py-20 px-6 bg-white text-center border-t'>
        <h4 className='text-3xl font-bold mb-4'>Ready to Build Your AI System?</h4>
        <p className='text-gray-600 mb-6'>Book a free strategy session and see how automation can grow your business.</p>
        <button className='text-white bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition'>Book Your Free Demo</button>
      </section>
      <footer className='py-8 px-6 bg-gray-100 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} Hausmind AI. All rights reserved.
      </footer>
    </div>
  );
}