import { Button } from "@/components/ui/button";
import { Instagram, Target, Lightbulb, Shield, Award, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[var(--gradient-subtle)] relative overflow-hidden" aria-label="Sobre Willian Silva e Consultoria em Concreto Usinado">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Target className="absolute top-20 right-20 rotate-12" size={120} />
        <Award className="absolute bottom-20 left-20 -rotate-12" size={100} />
        <TrendingUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={140} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">Expertise Reconhecida no Mercado</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Willian Silva</h1>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-4">
              Engenheiro Civil e Pós-Graduando em Tecnologia do Concreto
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </header>

          {/* Main content */}
          <article className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Com <strong className="text-accent">mais de 13 anos de experiência</strong> em centrais de concreto usinado em Maringá, desenvolvi uma visão <strong className="font-semibold text-foreground">360° do setor</strong> — desde laboratório e programação até vendas técnicas e balanceamento.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Essa trajetória me permite identificar oportunidades que outros profissionais não enxergam, <strong className="text-foreground font-semibold">transformando especificações técnicas em decisões financeiramente inteligentes</strong>.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Minha metodologia combina <strong className="font-semibold text-foreground">rigor técnico com pragmatismo empresarial</strong>, garantindo que cada real investido em concreto gere o máximo retorno em performance, durabilidade e economia.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Não vendo consultoria. <strong className="text-accent font-semibold">Vendo tranquilidade</strong> — a certeza de que sua escolha em concreto usinado é tecnicamente correta e financeiramente otimizada.
              </p>
            </div>
          </article>

          {/* Value propositions */}
          <section className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12" aria-labelledby="porque-escolher">
            <h2 id="porque-escolher" className="text-2xl md:text-3xl font-bold mb-8 text-center">Por Que Escolher a Fator A/C?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="text-accent group-hover:scale-110 transition-transform" size={36} />
                </div>
                <h3 className="font-bold text-lg mb-3">Missão Clara</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Democratizar o acesso ao conhecimento técnico especializado em concreto usinado, tornando-o acessível e aplicável.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="text-accent group-hover:scale-110 transition-transform" size={36} />
                </div>
                <h3 className="font-bold text-lg mb-3">Diferencial Único</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traduzimos jargões técnicos de concreto em linguagem de negócios, conectando engenharia civil e resultados financeiros.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="text-accent group-hover:scale-110 transition-transform" size={36} />
                </div>
                <h3 className="font-bold text-lg mb-3">Compromisso Total</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Relacionamentos duradouros baseados em resultados concretos e transparência absoluta em projetos de concreto usinado.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <aside className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center" aria-label="Chamada para ação: Consultoria em Concreto Usinado">
            <div className="flex justify-center gap-4 mb-6">
              <Award className="text-accent" size={40} />
              <TrendingUp className="text-accent" size={40} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tenha um <strong className="text-accent">Especialista como Sócio Silencioso</strong>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Imagine ter acesso ilimitado a um engenheiro especialista em concreto usinado que garante que cada decisão sobre sua obra seja tecnicamente perfeita e financeiramente inteligente.
              Siga no Instagram para conteúdo exclusivo!
            </p>
            <Button variant="cta" size="lg" className="text-lg" asChild>
              <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2" />
                Seguir no Instagram
              </a>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
};
