'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/ab.png"
            alt="Logo"
            className="h-15 w-auto rounded-md"
          />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`hover:text-blue-600 ${
                item.id === 'home' ? 'text-blue-600' : 'text-black'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botões à direita */}
        <div className="hidden md:flex items-center space-x-2">
          <a
            href="#home"
            className="bg-blue-800 text-white px-4 py-2 rounded font-bold text-sm"
          >
            ALBA
          </a>
          <a
            href="https://wa.me/5511945481911"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded "
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-9 w-9"
            />
          </a>
        </div>

        {/* Botão mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#alba"
            className="block bg-blue-800 text-white px-4 py-2 rounded text-center font-bold"
          >
            ALBA
          </a>
          <a
            href="https://wa.me/5511945481911"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-6 w-6 mx-auto"
            />
          </a>
        </nav>
      )}
    </header>
  )
}
