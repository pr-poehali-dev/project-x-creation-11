import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onDemoClick?: () => void
}

export function Navbar({ onDemoClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#111318]/95 backdrop-blur-md border-b border-[#6B0F1A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Fla<span className="text-[#9B1827]">rs</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#applications" className="font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200">
                Применение
              </a>
              <a href="#features" className="font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200">
                Возможности
              </a>
              <a href="#faq" className="font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200">
                Вопросы
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={onDemoClick}
              className="bg-[#6B0F1A] hover:bg-[#8B1A2A] text-white font-geist border-0"
            >
              Запросить демо
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#C4273A] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#111318]/98 border-t border-[#6B0F1A]/30">
              <a
                href="#applications"
                className="block px-3 py-2 font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Применение
              </a>
              <a
                href="#features"
                className="block px-3 py-2 font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Возможности
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 font-geist text-gray-300 hover:text-[#C4273A] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Вопросы
              </a>
              <div className="px-3 py-2">
                <Button
                  onClick={() => { setIsOpen(false); onDemoClick?.() }}
                  className="w-full bg-[#6B0F1A] hover:bg-[#8B1A2A] text-white font-geist border-0"
                >
                  Запросить демо
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
