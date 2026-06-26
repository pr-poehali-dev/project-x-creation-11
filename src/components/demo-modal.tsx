import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  const handleClose = () => {
    setSent(false)
    setForm({ name: "", company: "", email: "", phone: "", message: "" })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-lg bg-[#13151a] border border-[#6B0F1A]/40 rounded-2xl shadow-2xl z-10">
        <div className="flex items-center justify-between p-6 border-b border-[#6B0F1A]/20">
          <div>
            <h2 className="font-orbitron text-xl font-bold text-white">
              Запросить <span className="text-[#9B1827]">демо</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">Мы свяжемся с вами в течение 1 рабочего дня</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-white transition-colors p-1"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#6B0F1A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-[#C4273A]" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-400 mb-6">Наш менеджер свяжется с вами по указанным контактам для согласования демонстрации.</p>
            <Button
              onClick={handleClose}
              className="bg-[#6B0F1A] hover:bg-[#8B1A2A] text-white border-0"
            >
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-gray-300 text-sm">Ваше имя *</Label>
                <Input
                  required
                  placeholder="Иван Иванов"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-[#1a1d24] border-[#6B0F1A]/30 text-white placeholder:text-gray-600 focus:border-[#9B1827]"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-gray-300 text-sm">Компания</Label>
                <Input
                  placeholder="ООО «Лаборатория»"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="bg-[#1a1d24] border-[#6B0F1A]/30 text-white placeholder:text-gray-600 focus:border-[#9B1827]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label className="text-gray-300 text-sm">Email *</Label>
              <Input
                required
                type="email"
                placeholder="ivan@company.ru"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-[#1a1d24] border-[#6B0F1A]/30 text-white placeholder:text-gray-600 focus:border-[#9B1827]"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-gray-300 text-sm">Телефон</Label>
              <Input
                type="tel"
                placeholder="+7 (999) 000-00-00"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-[#1a1d24] border-[#6B0F1A]/30 text-white placeholder:text-gray-600 focus:border-[#9B1827]"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-gray-300 text-sm">Что планируете измерять?</Label>
              <Textarea
                placeholder="Опишите ваши образцы или задачу..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="bg-[#1a1d24] border-[#6B0F1A]/30 text-white placeholder:text-gray-600 focus:border-[#9B1827] resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6B0F1A] hover:bg-[#8B1A2A] text-white border-0 py-5 text-base font-semibold"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Icon name="Loader2" size={16} className="animate-spin" />
                  Отправка...
                </span>
              ) : "Отправить заявку"}
            </Button>

            <p className="text-gray-600 text-xs text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
