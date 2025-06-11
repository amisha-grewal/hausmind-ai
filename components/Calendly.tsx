import { useEffect } from 'react'

export default function Calendly() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    document.body.appendChild(script)
  }, [])

  return (
    <section id="calendly" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Schedule a Demo</h2>
      <div className="flex justify-center">
        <div className="calendly-inline-widget" data-url="<YOUR_CALENDLY_URL>" style={{ minWidth: '320px', height: '630px' }} />
      </div>
    </section>
  )
}