import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Fator AC Consultoria" className="h-14 mb-4" />
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Consultoria especializada em concreto usinado que transforma decisões técnicas complexas 
              em economia real e qualidade garantida para sua obra.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <MapPin className="text-accent" size={16} />
              <span className="text-muted-foreground">Atendimento em Maringá e região</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#processo" className="text-muted-foreground hover:text-accent transition-colors">
                  Processo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Siga-nos</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/fatoracconsultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Instagram className="text-accent" size={18} />
                </div>
                <span>@fatoracconsultoria</span>
              </a>
              
              <a 
                href="tel:+5544991385218"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="text-accent" size={18} />
                </div>
                <span>(44) 99138-5218</span>
              </a>
              
              <a 
                href="mailto:contato@fatorac.com.br"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={18} />
                </div>
                <span className="break-all text-sm">contato@fatoracconsultoria.com.br</span>
              </a>
              
              <Button variant="cta" size="lg" className="w-full mt-4" asChild>
                <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" />
                  Seguir Agora
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground mb-2">
            &copy; {new Date().getFullYear()} Fator AC Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            CREA-PR • Engenharia Civil Especializada em Concreto Usinado
          </p>
        </div>
      </div>
    </footer>
  );
};
