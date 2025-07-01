export default function Servicos() {
    return (
      <section id="servicos" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Serviços</h2>
  
          <div className="space-y-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gray-700 text-white px-4 py-2 rounded inline-block">
                  Projetos e Soluções de Máquinas
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Desenvolvemos projetos customizados de máquinas industriais, combinando inovação e eficiência
                  para atender às demandas específicas de cada setor. Nossa expertise garante soluções
                  robustas e confiáveis.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/Reator-rm.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Máquinas industriais" 
                  className="rounded-lg  max-w-md w-full"
                />
              </div>
            </div>
            
            <div className="relative top-10 left-0 w-full">
                      <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
                        <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
                      </svg>
                    </div>
  
            <div className="bg-gray-100 py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center order-2 lg:order-1">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Retrofit de equipamentos" 
                      className="rounded-lg shadow-xl max-w-md w-full"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold mb-4 bg-gray-700 text-white px-4 py-2 rounded inline-block">
                      Retrofit em Equipamentos
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Modernizamos equipamentos existentes com tecnologia avançada, proporcionando maior eficiência,
                      redução de custos e prolongamento da vida útil dos seus ativos industriais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="relative">
              <svg viewBox="0 0 1200 120" className="w-full h-20 fill-blue-600">
                <path d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z" />
              </svg>
            </div>
  
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gray-700 text-white px-4 py-2 rounded inline-block">
                  Manutenções Mecânicas
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Oferecemos serviços completos de manutenção preventiva e corretiva, garantindo o funcionamento
                  otimizado de seus equipamentos e reduzindo paradas não programadas.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/empresa.png" 
                  alt="Manutenção mecânica" 
                  className="rounded-lg shadow-xl h-96 max-w-md w-full"
                />
              </div>
            </div>
  
            <div className="text-center mt-16">
              <a href="#contato" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold">
                Tire a Dúvida Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }