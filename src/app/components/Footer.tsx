import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
          <div className="text-3xl font-bold text-blue-400 mb-4">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="rounded-lg shadow-xl h-30 max-w-md w-auto block"
            />
          </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Engenharia que Move. Soluções que Transformam.
            </p>
            <p className="text-gray-400 text-sm">
              Especializados em inovação mecânica para a indústria em movimento.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300">(11) 94548 - 1911</span>
                
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300">(11) 98314 - 2002</span>
                
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300">Alba@albamanutencao.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3 text-blue-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Projetos de Máquinas</li>
              <li>Retrofit de Equipamentos</li>
              <li>Manutenção Mecânica</li>
              <li>Consultoria Industrial</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Alba Engenharia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
