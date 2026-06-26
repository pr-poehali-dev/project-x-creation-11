import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onDemoClick?: () => void
}

export function CTASection({ onDemoClick }: CTASectionProps) {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#6B0F1A]/10 via-[#9B1827]/5 to-[#6B0F1A]/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Подберём анализатор под вашу задачу
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Расскажите о ваших образцах и требованиях — мы предложим оптимальную конфигурацию прибора, проведём
            демонстрацию и тестовое измерение ваших проб.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onDemoClick}
              className="bg-[#6B0F1A] hover:bg-[#8B1A2A] text-white pulse-button text-lg px-8 py-4 border-0"
            >
              Запросить демо
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onDemoClick}
              className="border-[#6B0F1A] text-[#C4273A] hover:bg-[#6B0F1A] hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
