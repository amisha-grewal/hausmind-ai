import Head from 'next/head'
import Hero from '../components/Hero'
import Services from '../components/Services'
import UseCases from '../components/UseCases'
import About from '../components/About'
import Calendly from '../components/Calendly'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hausmind AI</title>
        <meta name="description" content="Smarter Systems. Automated Growth." />
      </Head>
      <Hero />
      <Services />
      <UseCases />
      <About />
      <Calendly />
      <Contact />
      <Footer />
    </>
  )
}