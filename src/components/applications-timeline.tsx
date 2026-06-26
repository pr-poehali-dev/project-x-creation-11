import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Фармацевтика",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Контроль размера частиц активных субстанций и вспомогательных веществ напрямую влияет на растворимость,
            биодоступность и стабильность лекарственных форм.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Контроль API и эксципиентов по GMP
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Анализ ингаляционных и таблеточных форм
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Соответствие фармакопеям и 21 CFR Part 11
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Материалы и порошки",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Гранулометрический состав определяет прочность, текучесть и спекаемость материалов — от цемента и
            металлических порошков до абразивов и пигментов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Цемент, керамика и строительные смеси
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Порошки для аддитивной печати и металлургии
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Пигменты, абразивы и катализаторы
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Пищевая и химическая отрасль",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Размер частиц влияет на текстуру, вкус, стабильность эмульсий и качество конечного продукта. Анализатор
            обеспечивает стабильность партий и контроль входного сырья.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Эмульсии, суспензии и напитки
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Какао, специи и сухие смеси
            </div>
            <div className="flex items-center gap-3 text-[#C4273A] text-sm">
              <div className="w-2 h-2 bg-[#6B0F1A] rounded-full"></div>
              Контроль входного сырья и готовой продукции
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-[#0d0f13]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Где применяется</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Анализаторы Flars используются в фармацевтике, материаловедении, пищевой и химической
            промышленности для контроля качества и научных исследований.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
