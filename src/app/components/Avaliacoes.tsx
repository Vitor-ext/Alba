import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'João Silva',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'Excelente trabalho da equipe A3A. Projeto executado com precisão e dentro do prazo estabelecido. Recomendo fortemente.'
  },
  {
    name: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1679611978819-f10168367155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVsaGVyJTIwcm9zdG98ZW58MHx8MHx8fDI%3D',
    text: 'Profissionais altamente qualificados. O retrofit realizado em nossos equipamentos superou as expectativas.'
  },
  {
    name: 'Carlos Oliveira',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    text: 'Parceria de longa data. Sempre entregam soluções inovadoras e eficientes para nossos desafios industriais.'
  }
]

export default function Avaliacoes() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">Avaliações</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, image, text }) => (
            <div key={name} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">{name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}