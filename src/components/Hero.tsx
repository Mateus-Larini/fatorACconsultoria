import { Button } from "@/components/ui/button";
import { Instagram, CheckCircle, Building2, TrendingUp, Shield, Award } from "lucide-react";
import willianPhotoConcretoUsinado from "@/assets/willian-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      
      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Building2 className="absolute top-20 left-10 text-accent/10 animate-pulse" size={60} />
        <TrendingUp className="absolute top-40 right-20 text-accent/10 animate-pulse" size={50} style={{ animationDelay: '1s' }} />
        <Shield className="absolute bottom-40 left-20 text-accent/10 animate-pulse" size={55} style={{ animationDelay: '2s' }} />
        <Award className="absolute bottom-20 right-10 text-accent/10 animate-pulse" size={65} style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-accent font-semibold text-sm">+13 Anos de Expertise Técnica</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Decisões Técnicas Que{" "}
              <span className="text-accent">Economizam Milhares</span>{" "}
              na Sua Obra
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Consultoria especializada em concreto usinado que transforma complexidade técnica 
              em economia real — sem comprometer qualidade ou segurança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-base md:text-lg group"
                asChild
              >
                <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 group-hover:scale-110 transition-transform" />
                  Seguir no Instagram
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base"
                asChild
              >
                <a href="#sobre">
                  Conhecer a Metodologia
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm text-muted-foreground">Análise Técnica Completa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm text-muted-foreground">Economia Comprovada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent" size={20} />
                <span className="text-sm text-muted-foreground">Zero Risco Técnico</span>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative animate-fade-in lg:justify-self-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[3/4] relative">
                <img
                  src={willianPhotoConcretoUsinado}
                  alt="Willian Silva - Engenheiro Civil Especialista em Concreto Usinado"
                  className="w-full h-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-[var(--shadow-premium)]">
              <div className="text-4xl font-bold">13+</div>
              <div className="text-sm font-semibold whitespace-nowrap">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
