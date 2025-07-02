import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import QuemSomos from '@/app/components/QuemSomos'
import Servicos from '@/app/components/Servicos'
import Avaliacoes from '@/app/components/Avaliacoes'
import Footer from '@/app/components/Footer'
import Contact from './components/Contacts'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Avaliacoes />
      <Contact />  
      <Footer />
    </>
  )
}
