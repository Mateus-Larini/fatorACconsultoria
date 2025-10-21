import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "35%",
    label: "Economia Média em Custo Benefício",
    description: "Redução comprovada em projetos"
  },
  {
    icon: Building2,
    value: "500+",
    label: "Obras Assessoradas",
    description: "Projetos de diversos portes"
  },
  {
    icon: Users,
    value: "13+",
    label: "Anos de Mercado",
    description: "Experiência consolidada"
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfação",
    description: "Clientes recomendam nossos serviços"
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-card border-y border-border relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <TrendingUp className="absolute top-10 right-10 rotate-12" size={100} />
        <Building2 className="absolute bottom-10 left-10 -rotate-12" size={100} />
        <Award className="absolute top-1/2 left-1/4 rotate-45" size={80} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Que <span className="text-accent">Comprovam Excelência</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Números que refletem nosso compromisso com a qualidade e economia nas suas obras
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all group-hover:rotate-6">
                  <Icon className="text-accent group-hover:scale-110 transition-transform" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
