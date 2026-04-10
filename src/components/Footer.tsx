import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Fator AC Consultoria" className="h-14 mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Consultoria especializada em concreto usinado que transforma decisões técnicas complexas 
              em economia real e qualidade garantida para sua obra.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <MapPin className="text-accent" size={16} />
              <span className="text-muted-foreground">Maringá e região</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className="text-muted-foreground hover:text-accent transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to="/#processo" className="text-muted-foreground hover:text-accent transition-colors">
                  Processo
                </Link>
              </li>
              <li>
                <Link to="/calculadora" className="text-muted-foreground hover:text-accent transition-colors">
                  Calculadora de Concreto
                </Link>
              </li>
              <li>
                <Link to="/#contato" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Guias Técnicos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/concreto-usinado-maringa" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Concreto Usinado em Maringá
                </Link>
              </li>
              <li>
                <Link to="/preco-concreto-usinado" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Preço do Concreto Usinado
                </Link>
              </li>
              <li>
                <Link to="/concreto-para-laje" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Concreto para Laje
                </Link>
              </li>
              <li>
                <Link to="/concreto-para-piso" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Concreto para Piso
                </Link>
              </li>
              <li>
                <Link to="/fck-concreto" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  FCK do Concreto
                </Link>
              </li>
              <li>
                <Link to="/slump-concreto" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Slump do Concreto
                </Link>
              </li>
              <li>
                <Link to="/areas-atendimento" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Áreas de Atendimento
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
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
                href="mailto:contato@fatoracconsultoria.com.br"
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
