import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gabriel Gambarini",
    content: "Competente, profissionais , bom atendimento, tivemos uma boa experiência na concretagem de um piso!",
    rating: 5,
  },
  {
    name: "Marcela Leonel",
    content: "Excelente empresa. Séria e responsável. No dia da entrega o Willian acompanhou todo o processo pessoalmente. Como demandou muitos caminhões, bem com o prazo era curto, prestaram todo tipo de auxílio. A empres é de Marialva e entregaram em Ivatuba/PR",
    rating: 5,
  },
  {
    name: "Fabio Dom",
    content: "Ótimo atendimento do William. Tudo certinho conforme o combinado. Entrega rápida. Recomendo.",
    rating: 5,
  },
  {
    name: "Izabel Brolezi Inacio",
    content: "Gostei do produto e o atendimento do vendedor William foi ótimo, super atencioso, super recomendo 👏👏",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Que Nossos <span className="text-accent">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados concretos de quem já transformou suas obras com nossa consultoria
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-background border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" size={48} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-base text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-bold text-sm">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-foreground">+500 Obras Assessoradas</div>
              <div className="text-sm text-muted-foreground">100% de satisfação comprovada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
