export default function QuemSomos() {
    return (
      <section id="quem-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Quem Somos</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Somos especialistas em soluções mecânicas inovadoras para a indústria. 
                Com mais de duas décadas de experiência, desenvolvemos projetos customizados 
                que atendem às necessidades específicas de cada cliente.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nossa equipe combina expertise técnica com tecnologia de ponta para 
                entregar resultados excepcionais em projetos de engenharia mecânica.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">Projetos Realizados</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/image 1.png" 
                alt="Projeto industrial" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/image 2.png" 
                alt="Equipamento mecânico" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/image 3.png" 
                alt="Engenharia" 
                className="rounded-lg shadow-lg col-span-2 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }