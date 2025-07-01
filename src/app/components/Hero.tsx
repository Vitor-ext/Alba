export default function Hero() {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: ` url('/background-home1.png')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" >
            INOVAÇÃO MECÂNICA<br />PARA O MUNDO EM<br />MOVIMENTO
          </h1>
          <a href="#quem-somos" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
            Quem Somos
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>
    )
  }
  