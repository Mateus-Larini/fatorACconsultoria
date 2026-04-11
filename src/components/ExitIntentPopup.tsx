import { useState, useEffect, useCallback } from "react";
import { X, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "fatorac_exit_popup_dismissed";

export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  const dismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch { /* ignore */ }

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };

    // Only on desktop — mobile doesn't have exit intent
    const mq = window.matchMedia("(pointer: fine)");
    if (mq.matches) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-accent/30 bg-card p-6 sm:p-8 shadow-2xl animate-fade-in text-center space-y-4">
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
          <Thermometer className="text-accent" size={28} />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Antes de sair...
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Já recebeu um orçamento de concreto? Descubra <strong className="text-foreground">gratuitamente</strong> se o preço é justo com nosso Termômetro de Preços. Resultado no WhatsApp em 2 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button variant="cta" size="lg" className="flex-1" asChild onClick={dismiss}>
            <Link to="/precos-de-concreto">
              <Thermometer className="mr-2" size={18} />
              Analisar Meu Orçamento
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="flex-1 text-muted-foreground" onClick={dismiss}>
            Agora não
          </Button>
        </div>
      </div>
    </div>
  );
};
