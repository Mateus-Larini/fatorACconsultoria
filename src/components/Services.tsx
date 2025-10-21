import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Ruler, Home, HardHat, CheckCircle, Instagram } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construtoras & Incorporadoras",
    description: "Maximize margens sem comprometer qualidade. Análise técnica que se converte em economia real nos seus projetos.",
    benefits: ["Redução de custos", "Otimização de especificações", "Gestão de fornecedores"]
  },
  {
    icon: Ruler,
    title: "Engenheiros & Arquitetos",
    description: "Eleve sua credibilidade técnica com especificações precisas e fundamentadas. Seja o profissional que entrega mais valor.",
    benefits: ["Especificações assertivas", "Suporte técnico contínuo", "Validação de projetos"]
  },
  {
    icon: Home,
    title: "Proprietários & Investidores",
    description: "Segurança total nas decisões técnicas. Saiba exatamente o que está comprando e por que é a melhor escolha.",
    benefits: ["Clareza nas decisões", "Economia garantida", "Qualidade assegurada"]
  },
  {
    icon: HardHat,
    title: "Mestres de Obra & Executores",
    description: "Evite problemas na execução com especificações adequadas. Garanta que o concreto facilite seu trabalho, não o complique.",
    benefits: ["Facilidade na execução", "Menos retrabalho", "Prazos cumpridos"]
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Building2 className="absolute top-20 left-20 rotate-12 animate-pulse" size={110} />
        <HardHat className="absolute bottom-20 right-20 -rotate-12 animate-pulse" size={100} style={{ animationDelay: '1.5s' }} />
        <Ruler className="absolute top-1/2 right-1/4 rotate-45" size={90} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Soluções Sob Medida</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Consultoria Especializada em Concreto Para <span className="text-accent">Cada Necessidade</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transformamos complexidade técnica em vantagem competitiva para diferentes perfis de clientes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-border">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-xs text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Premium CTA Box */}
        <div className="bg-gradient-to-r from-card to-card/50 border-2 border-accent/30 rounded-2xl p-8 md:p-12 shadow-[var(--shadow-premium)]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Mais que Consultoria: Um <span className="text-accent">Parceiro Estratégico</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Você não contrata apenas análises técnicas — você ganha um especialista dedicado que 
              garante cada decisão seja tecnicamente perfeita e financeiramente otimizada. É como ter 
              um sócio engenheiro trabalhando exclusivamente para o sucesso do seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" />
                  Seguir no Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg" asChild>
                <a href="#processo">
                  Ver Como Funciona
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
