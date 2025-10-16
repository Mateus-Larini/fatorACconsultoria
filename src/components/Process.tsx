import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, CheckSquare, MessageCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Técnico Completo",
    description: "Análise profunda das especificações do projeto, condições de execução, fornecedores disponíveis e objetivos técnicos e financeiros.",
    deliverable: "Relatório de diagnóstico inicial"
  },
  {
    number: "02",
    icon: FileText,
    title: "Especificação Otimizada",
    description: "Desenvolvimento de especificações técnicas precisas que equilibram performance, durabilidade e custo, eliminando superdimensionamentos.",
    deliverable: "Especificação técnica detalhada"
  },
  {
    number: "03",
    icon: CheckSquare,
    title: "Validação e Homologação",
    description: "Revisão com fornecedores, validação de preços e qualidade, garantindo que as especificações sejam fielmente executadas.",
    deliverable: "Parecer técnico de aprovação"
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Acompanhamento Contínuo",
    description: "Suporte durante toda a execução, com ajustes conforme necessário e garantia de que os resultados esperados sejam alcançados.",
    deliverable: "Suporte técnico permanente"
  },
];

export const Process = () => {
  return (
    <section id="processo" className="py-24 bg-[var(--gradient-subtle)] relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Search className="absolute top-20 left-20 rotate-12" size={100} />
        <CheckSquare className="absolute bottom-20 right-20 -rotate-12" size={110} />
        <MessageCircle className="absolute top-1/2 right-1/4 rotate-45" size={90} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Metodologia Comprovada</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como <span className="text-accent">Transformamos</span> Sua Obra
          </h2>
          <p className="text-xl text-muted-foreground">
            Processo estruturado em 4 etapas que garantem economia, qualidade e tranquilidade
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="p-6 md:p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-6xl md:text-7xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                          {step.number}
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <Icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-sm font-semibold text-accent">
                          Entregável: {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="text-accent/30" size={32} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para <span className="text-accent">Otimizar sua Obra</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inicie agora uma análise gratuita e descubra quanto você pode economizar 
            sem comprometer qualidade
          </p>
          <Button variant="cta" size="lg" className="text-lg" asChild>
            <a href="https://wa.me/5544991385218" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" />
              Solicitar Análise Gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
