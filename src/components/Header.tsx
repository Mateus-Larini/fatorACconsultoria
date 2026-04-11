import { useState } from "react";
import { Menu, X, Instagram, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Início", href: "/#home" },
  { name: "Sobre", href: "/#sobre" },
  { name: "Metodologia", href: "/#servicos" },
  { name: "Processo", href: "/#processo" },
  { name: "Calculadora", href: "/calculadora" },
  { name: "Contato", href: "/#contato" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/#home" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Fator AC Consultoria" className="h-14 md:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="cta" size="sm" asChild>
              <Link to="/precos-de-concreto">
                <Thermometer className="mr-1.5" size={16} />
                Termômetro de Preços
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-1.5" size={16} />
                Instagram
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 px-4 text-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/precos-de-concreto" onClick={() => setIsMenuOpen(false)}>
                  <Thermometer className="mr-2" />
                  Termômetro de Preços
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://www.instagram.com/fatoracconsultoria/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" />
                  Seguir no Instagram
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
