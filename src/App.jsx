import { useState, useEffect } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className={`p-4 md:p-6 bg-white fixed top-0 w-full z-50 transition-all ${scrolled ? 'py-2 shadow-sm' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img
            src="/logo.png"
            alt="Hausmind AI Logo"
            style={{ height: scrolled ? '4rem' : '9.375rem', transition: 'height 0.3s ease' }}
          />
          <button
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
          >
            Book a Demo
          </button>
        </div>
      </header>

      <main className="pt-48">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-900 to-black text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Smarter Systems. Automated Growth.</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            We build AI bots and automations that run your business while you focus on growth.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold"
          >
            Book a Free Demo
          </button>
        </section>
        {/* Services, Use Cases, Contact Form, etc. */}
        {/* ... */}
      </main>

      {/* Iframe Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-11/12 max-w-3xl h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
            >
              ✕
            </button>
            <iframe
              src="https://calendly.com/inquiry-hausmindai?embed_domain=localhost&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      )}
    </div>
);
}
