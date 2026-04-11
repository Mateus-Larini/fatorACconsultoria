import { useEffect, useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  HelpCircle, Loader2, CheckCircle2, ShieldCheck, Clock, BarChart3,
  Building2, Wrench, TrendingUp, Users, Calculator, Check, Lock,
} from "lucide-react";
import { SITE_URL } from "@/lib/contact";

const WEBHOOK_URL = "https://fluxos.concretousinadomaringa.com.br/webhook/PRECOSCONCRETO";

const aplicacaoOptions = [
  "Não sei informar", "Laje", "Contrapiso", "Calçada", "Blocos", "Sapatas",
  "Estacas", "Vigas Baldrame", "Escada", "Piscina", "Piso Polido",
];
const cidadeOptions = [
  "Não sei informar", "Floresta", "Iguaraçu", "Itambé", "Jandaia do Sul",
  "Mandaguaçu", "Mandaguari", "Marialva", "Maringá", "Paiçandu", "Sarandi",
];
const fckOptions = ["Não sei informar", "15", "20", "25", "30", "35", "40+"];
const slumpOptions = ["Não sei informar", "10±2", "12±2", "14±2", "16±2", "18±2", "20±2", "22±3"];
const britaOptions = ["Não sei informar", "Brita 0", "Brita 1", "Brita 1/2", "Mescla"];
const bombaOptions = ["Não sei informar", "Sem bomba/Bica", "Bomba Estacionária", "Bomba Lança"];
const concreiteiraOptions = [
  "Central Concretos - Sarandi",
  "Concrebras - Maringá",
  "ConcreForte - Mandaguari",
  "ConcreInga - Sarandi",
  "Concrelagos - Maringá",
  "Concremax - Marialva",
  "Engemix - Maringá",
  "Inga Sul - Marialva",
  "JL Concretos - Maringá",
  "Lajemix - Maringá",
  "Lajeresk - Marialva",
  "Supermix - Maringá",
  "UsiVale - Jandaia do Sul",
  "VLP3 concretos - Maringá",
];

const bombaTextos: Record<string, string> = {
  "Sem bomba/Bica": "Locais de fácil acesso onde o caminhão chega.",
  "Bomba Estacionária": "Bom alcance. Exige manuseio de mangotes pesados pela equipe. Ruim para vigas/pilares isolados.",
  "Bomba Lança": "Alcança o ponto exato. Custo maior. Exige solo compactado (sapatas) e 5m de distância de redes elétricas.",
};

const STEPS = [
  { icon: Building2, label: "Dados da Obra" },
  { icon: Wrench, label: "Especificações" },
  { icon: TrendingUp, label: "Mercado" },
  { icon: Users, label: "Seus Dados" },
];

interface TooltipLabelProps {
  htmlFor: string;
  label: string;
  tooltip: string;
}

const TooltipLabel = ({ htmlFor, label, tooltip }: TooltipLabelProps) => {
  const [open, setOpen] = useState(false);

  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1.5">
      {label}
      <button
        type="button"
        className="group relative cursor-help"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
        aria-label={`Informação sobre ${label}`}
      >
        <HelpCircle size={15} className="text-muted-foreground hover:text-accent transition-colors" />
        <span
          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-lg bg-card border border-border p-3 text-xs font-normal text-foreground shadow-xl transition-opacity z-50 ${open ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          {tooltip}
        </span>
      </button>
    </label>
  );
};

const inputClass =
  "w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent transition-all";

const selectClass =
  "w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent transition-all appearance-none cursor-pointer";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function formatCurrency(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const numericValue = parseInt(digits, 10) / 100;
  return numericValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getFilledSteps(fields: { volume: string; aplicacao: string; cidade: string; fck: string; slump: string; brita: string; bomba: string; valorOrcado: string; concreteira: string; nome: string; whatsapp: string }) {
  const a = fields.volume && fields.aplicacao && fields.cidade;
  const b = fields.fck && fields.slump && fields.brita && fields.bomba;
  const c = fields.valorOrcado && fields.concreteira;
  const d = fields.nome && fields.whatsapp.replace(/\D/g, "").length >= 10;
  let count = 0;
  if (a) count++;
  if (b) count++;
  if (c) count++;
  if (d) count++;
  return count;
}

const CheckIcon = ({ filled }: { filled: boolean }) => (
  filled
    ? <Check size={14} className="text-accent" />
    : <span className="w-3.5 h-3.5 rounded-full border border-muted-foreground/40" />
);

const TermometroPrecos = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [volume, setVolume] = useState("");
  const [aplicacao, setAplicacao] = useState("");
  const [cidade, setCidade] = useState("");
  const [fck, setFck] = useState("");
  const [slump, setSlump] = useState("");
  const [brita, setBrita] = useState("");
  const [bomba, setBomba] = useState("");
  const [valorOrcado, setValorOrcado] = useState("");
  const [concreteira, setConcreteira] = useState("");
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const filledSteps = getFilledSteps({ volume, aplicacao, cidade, fck, slump, brita, bomba, valorOrcado, concreteira, nome, whatsapp });
  const allFilled = filledSteps === 4;

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatPhone(e.target.value));
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValorOrcado(formatCurrency(e.target.value));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;

    setIsSubmitting(true);

    const payload = {
      volume,
      aplicacao,
      cidade,
      fck,
      slump,
      brita,
      bomba,
      valorOrcado,
      concreteira,
      nome,
      whatsapp,
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Termômetro de Preços de Concreto Usinado",
    description: "Descubra se o preço do concreto orçado para sua obra é justo. Nosso termômetro analisa valores por m³, FCK e distância.",
    url: `${SITE_URL}/precos-de-concreto`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    provider: {
      "@type": "Organization",
      name: "Fator AC Consultoria",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
  };

  return (
    <>
      <Helmet>
        <title>Preço de Concreto Usinado: Termômetro e Orçamentos na Região</title>
        <meta
          name="description"
          content="Descubra se o preço do concreto orçado para sua obra é justo. Nosso termômetro analisa valores por m³, FCK e distância. Não perca dinheiro na concretagem."
        />
        <link rel="canonical" href={`${SITE_URL}/precos-de-concreto`} />
        <meta property="og:title" content="Preço de Concreto Usinado: Termômetro e Orçamentos na Região" />
        <meta
          property="og:description"
          content="Descubra se o preço do concreto orçado para sua obra é justo. Nosso termômetro analisa valores por m³, FCK e distância."
        />
        <meta property="og:url" content={`${SITE_URL}/precos-de-concreto`} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="preço concreto, preço do concreto usinado, valor metro cúbico concreto, preço m³ concreto, concreto usinado preço Maringá" />
        <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative pt-28 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
            {/* Decorative floating icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <BarChart3 className="absolute top-32 right-[10%] text-accent/10 animate-pulse" size={60} style={{ animationDelay: "0s" }} />
              <TrendingUp className="absolute bottom-16 left-[8%] text-accent/10 animate-pulse" size={48} style={{ animationDelay: "1.5s" }} />
              <ShieldCheck className="absolute top-40 left-[15%] text-accent/10 animate-pulse" size={40} style={{ animationDelay: "3s" }} />
            </div>
            <div className="container relative mx-auto px-4">
              <Breadcrumb items={[{ label: "Termômetro de Preços" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Termômetro de Preços de{" "}
                  <span className="text-accent">Concreto Usinado</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Não feche o concreto da sua obra no escuro. As diferenças de preço, traço e taxa de entrega podem
                  custar milhares de reais. Insira o seu orçamento abaixo e nossa inteligência artificial cruzará as
                  informações com o banco de dados regional para te dizer, na hora, se você está fazendo um bom negócio
                  ou se está perdendo dinheiro e qualidade.
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  {[
                    { icon: ShieldCheck, text: "Análise gratuita" },
                    { icon: Clock, text: "Resultado em 2 min" },
                    { icon: BarChart3, text: "+350 orçamentos analisados" },
                  ].map((badge) => (
                    <span
                      key={badge.text}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-xs font-medium text-accent"
                    >
                      <badge.icon size={14} />
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Formulário */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                {isSuccess ? (
                  <div className="rounded-2xl border border-accent/30 bg-card p-10 text-center space-y-4 animate-fade-in">
                    <CheckCircle2 className="mx-auto text-accent" size={56} />
                    <h2 className="text-2xl font-bold text-foreground">Análise enviada com sucesso!</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
                      Estamos finalizando sua análise de orçamento. Em até 2 minutos o resultado detalhado chegará no
                      seu WhatsApp.
                    </p>

                    {/* CTA Calculadora após envio */}
                    <div className="pt-6 border-t border-border mt-6">
                      <p className="text-sm text-muted-foreground mb-3">Enquanto aguarda, confirme o volume da sua obra:</p>
                      <Button variant="outline" asChild>
                        <Link to="/calculadora">
                          <Calculator className="mr-2" size={16} />
                          Usar Calculadora de Concreto
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Progress bar */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        {STEPS.map((step, i) => {
                          const isDone = i < filledSteps;
                          const isCurrent = i === filledSteps;
                          return (
                            <div key={step.label} className="flex flex-col items-center gap-1.5 flex-1">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                  isDone
                                    ? "bg-accent border-accent text-accent-foreground"
                                    : isCurrent
                                      ? "border-accent/60 text-accent bg-accent/10"
                                      : "border-border text-muted-foreground"
                                }`}
                              >
                                {isDone ? <Check size={18} /> : <step.icon size={18} />}
                              </div>
                              <span className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${isDone ? "text-accent" : isCurrent ? "text-foreground" : "text-muted-foreground"}`}>
                                {step.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${(filledSteps / 4) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Passo {Math.min(filledSteps + 1, 4)} de 4 — {filledSteps === 0 ? "Comece aqui" : filledSteps < 4 ? "Continue preenchendo" : "Pronto para enviar!"}
                      </p>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="rounded-2xl border border-border bg-card p-6 sm:p-10 space-y-10"
                    >
                      {/* Bloco A */}
                      <fieldset className="space-y-5" disabled={isSubmitting}>
                        <legend className="flex items-center gap-2 text-xl font-bold text-accent mb-2">
                          <Building2 size={22} />
                          Dados da Obra
                          <CheckIcon filled={!!(volume && aplicacao && cidade)} />
                        </legend>

                        <div>
                          <TooltipLabel
                            htmlFor="volume"
                            label="Volume estimado (m³)"
                            tooltip="O valor do concreto pode variar de acordo com o volume solicitado. Volumes maiores = mais descontos."
                          />
                          <input
                            id="volume"
                            type="number"
                            min="1"
                            step="0.5"
                            required
                            placeholder="Ex: 8"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                            className={inputClass}
                          />
                          {volume && parseFloat(volume) >= 10 && (
                            <p className="mt-1.5 text-xs text-accent">Volume acima de 10 m³ costuma ter descontos por quantidade.</p>
                          )}
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="aplicacao"
                            label="Aplicação"
                            tooltip="Aplicações diferentes necessitam de traços e aditivos específicos, o que altera o valor final."
                          />
                          <select
                            id="aplicacao"
                            required
                            value={aplicacao}
                            onChange={(e) => setAplicacao(e.target.value)}
                            className={selectClass}
                          >
                            <option value="" disabled>Selecione...</option>
                            {aplicacaoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="cidade"
                            label="Cidade da Obra"
                            tooltip="Concreteiras cobram taxa de deslocamento para distâncias maiores."
                          />
                          <select
                            id="cidade"
                            required
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            className={selectClass}
                          >
                            <option value="" disabled>Selecione...</option>
                            {cidadeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </fieldset>

                      {/* CTA Calculadora entre blocos */}
                      <div className="flex items-center gap-3 rounded-xl bg-accent/5 border border-accent/20 p-4">
                        <Calculator className="text-accent shrink-0" size={24} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">Não tem certeza sobre o volume?</p>
                          <p className="text-xs text-muted-foreground">Use nossa calculadora gratuita para calcular o m³ exato da sua obra.</p>
                        </div>
                        <Button variant="outline" size="sm" asChild className="shrink-0">
                          <Link to="/calculadora">Calcular</Link>
                        </Button>
                      </div>

                      {/* Bloco B */}
                      <fieldset className="space-y-5" disabled={isSubmitting}>
                        <legend className="flex items-center gap-2 text-xl font-bold text-accent mb-2">
                          <Wrench size={22} />
                          Especificações Técnicas
                          <CheckIcon filled={!!(fck && slump && brita && bomba)} />
                        </legend>

                        <div>
                          <TooltipLabel
                            htmlFor="fck"
                            label="FCK"
                            tooltip="FCK 15 e 20: sem função estrutural. A partir do 25, siga o projeto. Não existe concreto universal; cada obra exige uma resistência específica."
                          />
                          <select id="fck" required value={fck} onChange={(e) => setFck(e.target.value)} className={selectClass}>
                            <option value="" disabled>Selecione...</option>
                            {fckOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="slump"
                            label="Slump"
                            tooltip="< 10: Seco. 10 a 16: Fluidez média, exige vibrador. > 16: Muito fluido, ideal para alta densidade de ferragem."
                          />
                          <select id="slump" required value={slump} onChange={(e) => setSlump(e.target.value)} className={selectClass}>
                            <option value="" disabled>Selecione...</option>
                            {slumpOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="brita"
                            label="Tipo de Brita"
                            tooltip="Brita 0: Mais cimento, mais caro. Brita 1: Mais barato, ruim para espessuras < 5cm. Brita 1/2: Intermediária (ideal), mas poucas centrais possuem."
                          />
                          <select id="brita" required value={brita} onChange={(e) => setBrita(e.target.value)} className={selectClass}>
                            <option value="" disabled>Selecione...</option>
                            {britaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="bomba"
                            label="Tipo de Bomba"
                            tooltip="O tipo de bomba impacta diretamente o custo e a logística de lançamento do concreto na obra."
                          />
                          <select id="bomba" required value={bomba} onChange={(e) => setBomba(e.target.value)} className={selectClass}>
                            <option value="" disabled>Selecione...</option>
                            {bombaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                          {bomba && bombaTextos[bomba] && (
                            <p className="mt-2 text-xs text-muted-foreground bg-secondary/40 rounded-md px-3 py-2 border border-border/50">
                              {bombaTextos[bomba]}
                            </p>
                          )}
                        </div>
                      </fieldset>

                      {/* Bloco C */}
                      <fieldset className="space-y-5" disabled={isSubmitting}>
                        <legend className="flex items-center gap-2 text-xl font-bold text-accent mb-2">
                          <TrendingUp size={22} />
                          Inteligência de Mercado
                          <CheckIcon filled={!!(valorOrcado && concreteira)} />
                        </legend>

                        <div>
                          <TooltipLabel
                            htmlFor="valorOrcado"
                            label="Valor orçado por m³"
                            tooltip="Informe o valor que a concreteira cotou por metro cúbico para que possamos comparar com a média regional."
                          />
                          <input
                            id="valorOrcado"
                            type="text"
                            inputMode="numeric"
                            required
                            placeholder="R$ 0,00"
                            value={valorOrcado}
                            onChange={handleCurrencyChange}
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <TooltipLabel
                            htmlFor="concreteira"
                            label="Concreteira Selecionada"
                            tooltip="Nem todas as concreteiras trabalham com todas as matérias-primas (ex: Brita 1/2). Selecione para avaliarmos se eles atendem sua especificação técnica exata e a distância logística."
                          />
                          <select
                            id="concreteira"
                            required
                            value={concreteira}
                            onChange={(e) => setConcreteira(e.target.value)}
                            className={selectClass}
                          >
                            <option value="" disabled>Selecione a concreteira...</option>
                            {concreiteiraOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      </fieldset>

                      {/* Bloco D */}
                      <fieldset className="space-y-5" disabled={isSubmitting}>
                        <legend className="flex items-center gap-2 text-xl font-bold text-accent mb-2">
                          <Users size={22} />
                          Seus Dados
                          <CheckIcon filled={!!(nome && whatsapp.replace(/\D/g, "").length >= 10)} />
                        </legend>

                        <div>
                          <label htmlFor="nome" className="block text-sm font-semibold text-foreground mb-1.5">
                            Nome
                          </label>
                          <input
                            id="nome"
                            type="text"
                            required
                            placeholder="Seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label htmlFor="whatsapp" className="block text-sm font-semibold text-foreground mb-1.5">
                            WhatsApp
                          </label>
                          <input
                            id="whatsapp"
                            type="tel"
                            required
                            placeholder="(44) 99999-9999"
                            value={whatsapp}
                            onChange={handlePhoneChange}
                            className={inputClass}
                            maxLength={15}
                          />
                        </div>

                        {/* Selo de privacidade */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Lock size={12} className="shrink-0" />
                          <span>Seus dados estão protegidos e não serão compartilhados com terceiros.</span>
                        </div>
                      </fieldset>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className={`w-full text-base py-6 transition-all duration-300 ${allFilled && !isSubmitting ? "animate-pulse shadow-[var(--shadow-premium)]" : ""}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 animate-spin" size={20} />
                            Analisando seu orçamento...
                          </>
                        ) : (
                          "Analisar Meu Orçamento Agora"
                        )}
                      </Button>

                      {isSubmitting && (
                        <p className="text-center text-sm text-muted-foreground animate-pulse">
                          Estamos finalizando sua análise de orçamento. Em até 2 minutos o resultado detalhado chegará no
                          seu WhatsApp.
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermometroPrecos;
