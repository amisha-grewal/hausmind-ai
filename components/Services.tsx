export default function Services() {
  return (
    <section id="services" className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold mb-2">Custom AI Bots</h3>
          <p>Automate routine tasks and workflows.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
          <p>Insights from your data to drive decisions.</p>
        </div>
      </div>
    </section>
  )
}