import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle, Bookmark, Sparkles, TrendingUp } from "lucide-react";

export const InstagramSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <Instagram className="absolute top-20 right-20 animate-pulse" size={120} />
        <Sparkles className="absolute bottom-20 left-20 animate-pulse" size={100} style={{ animationDelay: '1s' }} />
        <TrendingUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12" size={150} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <Instagram className="text-accent" size={20} />
              <span className="text-accent font-semibold text-sm">Acompanhe Nosso Conteúdo</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Dicas Exclusivas de{" "}
              <span className="text-accent">Concreto Usinado</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Siga nosso Instagram para receber conteúdo técnico, dicas práticas, 
              cases de sucesso e insights valiosos sobre economia e qualidade em obras.
            </p>
          </div>

          {/* Instagram Features */}
          <div className="grid sm:grid-cols-3 gap-6 py-8">
            <div className="flex flex-col items-center gap-3 p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Heart className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-foreground">Cases Reais</h3>
              <p className="text-sm text-muted-foreground text-center">
                Veja projetos reais e resultados comprovados
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
                <MessageCircle className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-foreground">Dicas Técnicas</h3>
              <p className="text-sm text-muted-foreground text-center">
                Conteúdo exclusivo sobre concreto usinado
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-all hover:scale-105">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
                <Bookmark className="text-accent" size={24} />
              </div>
              <h3 className="font-bold text-foreground">Economia Garantida</h3>
              <p className="text-sm text-muted-foreground text-center">
                Aprenda a otimizar custos sem perder qualidade
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="premium" 
              size="lg" 
              className="text-base group"
              asChild
            >
              <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 group-hover:scale-110 transition-transform" />
                Seguir @fatoracconsultoria
              </a>
            </Button>
            
          </div>

          {/* Trust Badge */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              📱 Conteúdo atualizado diariamente com insights valiosos para sua obra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
