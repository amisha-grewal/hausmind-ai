
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
  <circle cx='12' cy='12' r='10'/>
  <circle cx='8' cy='8' r='1'/>
  <circle cx='16' cy='8' r='1'/>
  <circle cx='8' cy='16' r='1'/>
  <circle cx='16' cy='16' r='1'/>
  <line x1='8' y1='8' x2='16' y2='8'/>
  <line x1='8' y1='16' x2='16' y2='16'/>
  <line x1='8' y1='8' x2='8' y2='16'/>
  <line x1='16' y1='8' x2='16' y2='16'/>
</svg> width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M3 17l6-6 4 4 8-8'/>
          <path d='M14 7h7v7'/>
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
          <svg className='mb-3' width='32' height='32' fill='none' stroke='#3b82f6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='17 8 12 3 7 8'/><line x1='12' y1='3' x2='12' y2='15'/></svg>
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">AI Chatbot Setup</h3>
          <p className="text-gray-600">Smart bots on your site or socials to handle FAQs, qualify leads, and book meetings.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <svg className='mb-3' width='32' height='32' fill='none' stroke='#10b981' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M4 4v5h.582A2.418 2.418 0 0 1 7 6.582V4H4zM20 20v-5h-.582A2.418 2.418 0 0 0 17 17.418V20h3zM4 20h3v-2.582A2.418 2.418 0 0 0 4.582 15H4v5zM20 4h-3v2.582A2.418 2.418 0 0 0 19.418 9H20V4z'/></svg>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Workflow Automation</h3>
          <p className="text-gray-600">Automate tasks across Zapier, Airtable, ChatGPT, and other platforms.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left">
          <svg className='mb-3' width='32' height='32' fill='none' stroke='#8b5cf6' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'><path d='M9 12l2 2l4 -4'/><path d='M21 12a9 9 0 1 1-6.219-8.56'/></svg>
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Lead Qualification Bots</h3>
          <p className="text-gray-600">Score and filter leads, delivering the best ones to your inbox or CRM.</p>
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
