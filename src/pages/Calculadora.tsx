import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Calculator, MapPin, CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { Helmet } from "react-helmet-async";

const faqItems = [
  {
    question: "Qual concreto utilizar para laje?",
    answer:
      "Para lajes residenciais convencionais, o concreto mais indicado é o FCK 25 MPa (ou C25), que atende à maioria dos projetos estruturais. Já para lajes de edifícios com maior carga ou vãos maiores, pode ser necessário um FCK 30 MPa ou superior. A definição correta depende do projeto estrutural elaborado pelo engenheiro responsável. A Fator AC analisa seu projeto e indica o traço ideal, evitando que você pague por uma resistência acima do necessário — ou corra riscos com uma abaixo.",
  },
  {
    question: "Quantos metros de concreto vai em X metros de laje?",
    answer:
      "O cálculo é simples: multiplique a área da laje (comprimento × largura) pela espessura. Por exemplo, uma laje de 50 m² com 10 cm de espessura consome 5 m³ de concreto (50 × 0,10 = 5). Na prática, recomendamos adicionar entre 5% e 10% de margem para perdas com transporte e lançamento. Use nossa calculadora acima para obter o volume exato para sua obra.",
  },
  {
    question: "Quantos metros quadrados faz um metro cúbico de concreto?",
    answer:
      "Depende da espessura da aplicação. Com 10 cm de espessura, 1 m³ de concreto cobre 10 m². Com 8 cm, cobre 12,5 m². Com 15 cm, cobre aproximadamente 6,6 m². A regra prática é: divida 1 pela espessura em metros. Nossa calculadora faz esse cálculo automaticamente para você, considerando a espessura exata do seu projeto.",
  },
  {
    question: "Qual o melhor concreto para contrapiso e calçada?",
    answer:
      "Para contrapiso, o concreto mais utilizado é o FCK 20 MPa, com slump (abatimento) entre 8 e 12 cm para facilitar o espalhamento. Para calçadas externas, recomendamos ao menos FCK 20 MPa com atenção especial ao acabamento superficial para evitar escorregamentos. Em áreas com tráfego de veículos, como entradas de garagem, o ideal é o FCK 25 MPa. A Fator AC especifica o traço correto para cada aplicação, garantindo durabilidade e custo justo.",
  },
  {
    question: "Quanto rende um metro cúbico de concreto usinado?",
    answer:
      "Um metro cúbico (1 m³) de concreto usinado equivale a 1.000 litros e rende exatamente 1 m³ de estrutura preenchida. Na prática, o rendimento real varia conforme a aplicação: em lajes com espessura de 10 cm rende 10 m², em pisos de 8 cm rende 12,5 m², e em fundações com seção de 30×30 cm rende aproximadamente 11 metros lineares. A chave para não desperdiçar é o cálculo preciso — algo que garantimos na visita técnica da Fator AC.",
  },
];

const cidades = [
  "Maringá",
  "Marialva",
  "Sarandi",
  "Mandaguari",
  "Mandaguaçu",
  "Jandaia do Sul",
  "Paiçandu",
  "Floresta",
  "Itambé",
  "Iguaraçu",
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const Calculadora = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Calculadora de Concreto Usinado | Maringá e Região - Fator AC</title>
        <meta
          name="description"
          content="Calcule o volume exato de concreto usinado para sua obra em Maringá e região. Ferramenta gratuita da Fator AC para lajes, pisos, calçadas, vigas e pilares. Atendimento em Maringá, Sarandi, Marialva, Paiçandu e toda região metropolitana."
        />
        <meta
          name="keywords"
          content="calculadora concreto usinado, calcular concreto laje, volume concreto Maringá, concreto usinado Maringá, calculadora concreto online, quanto concreto para laje, concreto para calçada, contrapiso concreto"
        />
        <link rel="canonical" href="https://www.fatoracconsultoria.com.br/calculadora" />
        <meta property="og:title" content="Calculadora de Concreto Usinado | Maringá e Região - Fator AC" />
        <meta
          property="og:description"
          content="Calcule gratuitamente o volume de concreto usinado para sua obra. Ferramenta da Fator AC Consultoria — atendimento em Maringá e região metropolitana."
        />
        <meta property="og:url" content="https://www.fatoracconsultoria.com.br/calculadora" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative pt-28 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
            <div className="container relative mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                  <span className="text-accent font-semibold text-sm">Ferramenta Gratuita</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Calculadora de{" "}
                  <span className="text-accent">Concreto Usinado</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Calcule o volume exato de concreto para sua obra em Maringá e região. Evite desperdício
                  e garanta que não falte material no dia da concretagem.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator iframe Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Calculator className="text-accent" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Calcule Agora</h2>
                    <p className="text-sm text-muted-foreground">
                      Insira as dimensões e obtenha o volume de concreto necessário
                    </p>
                  </div>
                </div>
                <iframe
                  src="https://cosmic-crumble-9f8138.netlify.app"
                  width="100%"
                  height="700px"
                  style={{ border: "none", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
                  title="Calculadora de Volume de Concreto Fator AC"
                  loading="lazy"
                />

                {/* CTA below calculator */}
                <div className="mt-8 text-center space-y-4">
                  <Button variant="cta" size="lg" className="text-base md:text-lg group" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                      Solicitar Consultoria Técnica
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Agendamos uma visita técnica para medição e cálculo exato da sua concretagem. Feche seu
                    pedido com segurança, sem faltar material e sem sobras desnecessárias.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Fator AC Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-subtle)] opacity-60" />
            <div className="container relative mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                    <span className="text-accent font-semibold text-sm">Nosso Diferencial</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Por que escolher a <span className="text-accent">Fator AC</span> para sua concretagem?
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <Users className="text-accent mb-4" size={32} />
                    <h3 className="text-lg font-bold mb-2">Atendimento Consultivo e Próximo</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Na Fator AC, cada obra recebe atenção individualizada e orientação técnica desde o
                      primeiro contato. Nosso engenheiro analisa pessoalmente as necessidades do seu
                      projeto antes de recomendar qualquer traço, com um atendimento próximo, claro e
                      focado na realidade da sua obra.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <TrendingUp className="text-accent mb-4" size={32} />
                    <h3 className="text-lg font-bold mb-2">Economia Real, Não Apenas Preço</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Centrais tradicionais vendem volume. Nós otimizamos a especificação técnica para que
                      você compre exatamente o que precisa — na resistência certa, no slump adequado e no
                      volume preciso. Isso significa economia de verdade, não apenas um preço por m³ menor com
                      surpresas depois.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <Shield className="text-accent mb-4" size={32} />
                    <h3 className="text-lg font-bold mb-2">Segurança Técnica Garantida</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Enquanto centrais de grande porte entregam concreto de forma padronizada, a
                      Fator AC valida cada especificação para as condições reais da sua obra. Você tem
                      a tranquilidade de um engenheiro especialista respaldando cada decisão técnica.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <CheckCircle className="text-accent mb-4" size={32} />
                    <h3 className="text-lg font-bold mb-2">Medição Prévia e Cálculo Preciso</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Realizamos visita técnica para medir e calcular exatamente o volume necessário.
                      Nada de "chutes" que resultam em sobra de concreto (desperdício de dinheiro) ou
                      falta de material (atraso e comprometimento estrutural).
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <Button variant="cta" size="lg" className="text-base md:text-lg group" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                      Solicitar Consultoria Técnica
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Agendamos uma visita técnica para medição e cálculo exato da sua concretagem. Feche
                    seu pedido com segurança, sem faltar material e sem sobras desnecessárias.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                    <span className="text-accent font-semibold text-sm">Tire Suas Dúvidas</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Perguntas Frequentes Sobre{" "}
                    <span className="text-accent">Concreto Usinado</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Respostas diretas para as dúvidas mais comuns de quem está planejando uma
                    concretagem
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold hover:text-accent hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-10 text-center space-y-4">
                  <p className="text-muted-foreground">
                    Ainda tem dúvidas? Fale diretamente com nosso especialista.
                  </p>
                  <Button variant="cta" size="lg" className="text-base md:text-lg group" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                      Solicitar Consultoria Técnica
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Agendamos uma visita técnica para medição e cálculo exato da sua concretagem. Feche
                    seu pedido com segurança, sem faltar material e sem sobras desnecessárias sem dores de cabeça.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Area de Atendimento */}
          <section className="py-16 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <MapPin className="text-accent" size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold">Área de Atendimento</h2>
                </div>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  A Fator AC Consultoria atende toda a região metropolitana de Maringá, levando
                  expertise técnica em concreto usinado diretamente para a sua obra.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {cidades.map((cidade) => (
                    <span
                      key={cidade}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {cidade}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Calculadora;
