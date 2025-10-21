import { Card } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Shield, Clock, TrendingDown, XCircle } from "lucide-react";

const challenges = [
  {
    icon: DollarSign,
    title: "Custos Desnecessários",
    description: "Especificações superdimensionadas que encarecem a obra sem agregar valor técnico real.",
    impact: "Até 40% de desperdício financeiro"
  },
  {
    icon: Shield,
    title: "Risco de Falhas Estruturais",
    description: "Concreto inadequado que compromete segurança, durabilidade e pode gerar responsabilidade técnica.",
    impact: "Prejuízos milionários possíveis"
  },
  {
    icon: Clock,
    title: "Atrasos na Execução",
    description: "Problemas de trabalhabilidade, concretagem e cura que atrasam cronogramas e aumentam custos.",
    impact: "Multas e perda de credibilidade"
  },
  {
    icon: AlertTriangle,
    title: "Decisões Sem Embasamento",
    description: "Escolhas baseadas apenas em preço ou recomendações de vendedores, não em análise técnica.",
    impact: "Risco operacional elevado"
  },
  {
    icon: TrendingDown,
    title: "Perda de Competitividade",
    description: "Concorrentes otimizando custos enquanto você paga mais pelo mesmo resultado técnico.",
    impact: "Margens reduzidas"
  },
  {
    icon: XCircle,
    title: "Falta de Controle Técnico",
    description: "Dependência total de fornecedores sem validação independente das especificações recebidas.",
    impact: "Vulnerabilidade operacional"
  },
];

export const Problems = () => {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <AlertTriangle className="absolute top-20 left-20 rotate-12 animate-pulse" size={100} />
        <XCircle className="absolute bottom-20 right-20 -rotate-12 animate-pulse" size={90} style={{ animationDelay: '1s' }} />
        <Shield className="absolute top-1/2 right-1/4 rotate-45" size={110} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full mb-6">
            <span className="text-destructive font-semibold text-sm">Desafios do Setor</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Problemas Que <span className="text-accent">Custam Caro</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sem orientação técnica especializada, decisões aparentemente simples podem resultar 
            em prejuízos significativos
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-background border-border hover:border-destructive/30 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-destructive/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-all group-hover:scale-110">
                  <Icon className="text-destructive group-hover:rotate-6 transition-transform" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-semibold text-destructive">
                    ⚠️ {challenge.impact}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Solution teaser */}
        <div className="mt-16 text-center bg-accent/5 border border-accent/20 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            A Solução Está em <span className="text-accent">Decisões Técnicas Informadas</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa consultoria em concreto usinado elimina esses riscos, transformando incerteza em segurança e 
            desperdício em economia
          </p>
        </div>
      </div>
    </section>
  );
};
