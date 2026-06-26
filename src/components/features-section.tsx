import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Широкий диапазон измерений",
    description: "Анализ частиц от 10 нм до 3500 мкм методом лазерной дифракции — от наноэмульсий до крупных гранул.",
    icon: "range",
    badge: "10 нм – 3.5 мм",
  },
  {
    title: "Высокая точность и повторяемость",
    description: "Воспроизводимость результатов лучше 1% благодаря стабильной оптике и интеллектуальной калибровке.",
    icon: "target",
    badge: "Точность <1%",
  },
  {
    title: "Сухой и мокрый ввод проб",
    description: "Универсальные диспергаторы для порошков, суспензий и эмульсий без переналадки прибора.",
    icon: "droplet",
    badge: "2 в 1",
  },
  {
    title: "Экспресс-анализ",
    description: "Полный цикл измерения за 10–15 секунд с автоматическим расчётом распределения по размерам.",
    icon: "zap",
    badge: "15 сек",
  },
  {
    title: "Соответствие стандартам",
    description: "Полное соответствие ISO 13320 и фармакопеям GMP для лабораторий и контроля качества.",
    icon: "shield",
    badge: "ISO 13320",
  },
  {
    title: "Умное ПО и отчёты",
    description: "Наглядные графики распределения, экспорт в Excel/PDF и поддержка протоколов 21 CFR Part 11.",
    icon: "chart",
    badge: "Софт",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Возможности анализатора</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Лабораторная точность измерения размера частиц для исследований и контроля качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "range" && "📏"}
                    {feature.icon === "target" && "🎯"}
                    {feature.icon === "droplet" && "💧"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "chart" && "📊"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}