import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой диапазон размеров частиц измеряет прибор?",
      answer:
        "Анализаторы ParticleLab измеряют частицы в диапазоне от 10 нм до 3500 мкм методом лазерной дифракции — от наноэмульсий до крупных гранул.",
    },
    {
      question: "Какой метод измерения используется?",
      answer:
        "Используется метод лазерной дифракции в полном соответствии со стандартом ISO 13320. Распределение частиц по размерам рассчитывается автоматически.",
    },
    {
      question: "Можно ли анализировать и порошки, и суспензии?",
      answer:
        "Да. Прибор оснащается модулями сухого и мокрого диспергирования, что позволяет работать с порошками, суспензиями и эмульсиями без переналадки.",
    },
    {
      question: "Сколько времени занимает одно измерение?",
      answer:
        "Полный цикл измерения с расчётом распределения занимает 10–15 секунд, что делает прибор удобным для серийного контроля качества.",
    },
    {
      question: "Подходит ли прибор для фармацевтики и GMP?",
      answer:
        "Да. Программное обеспечение поддерживает протоколы 21 CFR Part 11, аудит-трейл и соответствует требованиям фармакопей и GMP.",
    },
    {
      question: "Предоставляете ли вы поверку и сервис?",
      answer:
        "Мы обеспечиваем калибровку, поверку, обучение персонала и техническую поддержку на всём сроке эксплуатации прибора.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы об анализаторах ParticleLab, методах измерения и сервисе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}