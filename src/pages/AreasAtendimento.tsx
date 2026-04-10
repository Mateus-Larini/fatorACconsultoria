import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, MapPin, CheckCircle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const cidades = [
  {
    nome: "Maringá",
    desc: "Sede da Fator AC Consultoria. Atendimento prioritário com menor tempo de deslocamento. Capital regional com polo construtivo intenso — edifícios, condomínios, indústrias e obras residenciais de todos os portes.",
    destaque: true,
  },
  {
    nome: "Sarandi",
    desc: "Cidade conurbada com Maringá, com forte crescimento imobiliário. Atendemos obras residenciais, comerciais e industriais com o mesmo nível técnico da sede.",
  },
  {
    nome: "Marialva",
    desc: "Polo agroindustrial com crescente demanda por galpões, barracões e obras rurais de grande porte. Consultoria especializada para obras que exigem pisos industriais e fundações robustas.",
  },
  {
    nome: "Paiçandu",
    desc: "Cidade em expansão urbana, com novos loteamentos e obras residenciais. Atendimento completo com visita técnica, cálculo de volume e acompanhamento da concretagem.",
  },
  {
    nome: "Mandaguari",
    desc: "Município com atuação diversificada em obras residenciais, comerciais e de infraestrutura. Oferecemos consultoria técnica para otimizar o custo e a qualidade do concreto em cada projeto.",
  },
  {
    nome: "Mandaguaçu",
    desc: "Atendemos obras de diferentes portes na cidade, desde calçadas e pisos residenciais até estruturas em concreto armado, sempre com orientação técnica personalizada.",
  },
  {
    nome: "Jandaia do Sul",
    desc: "Cidade com demanda crescente por concreto usinado em obras residenciais e comerciais. Realizamos visita técnica para garantir a especificação precisa mesmo com a distância da central.",
  },
  {
    nome: "Floresta",
    desc: "Atendimento com foco em obras rurais e de infraestrutura, além de construções residenciais. Consultoria técnica que garante que o concreto chegue nas condições ideais à obra.",
  },
  {
    nome: "Itambé",
    desc: "Obras residenciais e comerciais com atendimento técnico completo. Planejamento logístico para garantir que o concreto chegue dentro do prazo de utilização.",
  },
  {
    nome: "Iguaraçu",
    desc: "Município atendido pela Fator AC com os mesmos padrões de consultoria técnica e acompanhamento. Orientação sobre volume, FCK, slump e logística de entrega.",
  },
];

const AreasAtendimento = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Áreas de Atendimento: Concreto Usinado em Maringá e Região Metropolitana",
    description: "A Fator AC Consultoria atende Maringá, Sarandi, Marialva, Paiçandu, Mandaguari, Mandaguaçu, Jandaia do Sul, Floresta, Itambé e Iguaraçu com consultoria técnica em concreto usinado.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-01-01",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/areas-atendimento`,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fator AC Consultoria",
    description: "Consultoria técnica em concreto usinado em Maringá e região metropolitana.",
    telephone: "+55-44-99138-5218",
    email: "contato@fatoracconsultoria.com.br",
    url: SITE_URL,
    areaServed: cidades.map((c) => ({
      "@type": "City",
      name: c.nome,
      containedInPlace: { "@type": "State", name: "Paraná" },
    })),
    serviceType: [
      "Consultoria em Concreto Usinado",
      "Especificação Técnica de Concreto",
      "Cálculo de Volume de Concreto",
      "Acompanhamento de Concretagem",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Concreto Usinado Maringá, Sarandi, Marialva e Região | Fator AC</title>
        <meta name="description" content="A Fator AC atende Maringá, Sarandi, Marialva, Paiçandu, Mandaguari, Mandaguaçu, Jandaia do Sul e toda região metropolitana com consultoria técnica em concreto usinado. Visita técnica presencial." />
        <link rel="canonical" href={`${SITE_URL}/areas-atendimento`} />
        <meta property="og:title" content="Áreas de Atendimento - Concreto Usinado | Fator AC" />
        <meta property="og:description" content="Consultoria em concreto usinado para Maringá, Sarandi, Marialva, Paiçandu e toda região metropolitana." />
        <meta property="og:url" content={`${SITE_URL}/areas-atendimento`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-28 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
            <div className="container relative mx-auto px-4">
              <Breadcrumb items={[{ label: "Áreas de Atendimento" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Áreas de <span className="text-accent">Atendimento</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A Fator AC Consultoria leva expertise técnica em concreto usinado para toda a região
                  metropolitana de Maringá, com visita técnica presencial em cada projeto.
                </p>
              </div>
            </div>
          </section>

          {/* Cidades */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Cidades <span className="text-accent">Atendidas</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cidades.map((cidade) => (
                    <div
                      key={cidade.nome}
                      className={`bg-card border rounded-xl p-6 hover:border-accent/50 transition-all ${
                        cidade.destaque ? "border-accent/30 ring-1 ring-accent/10" : "border-border"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="text-accent" size={20} />
                        <h3 className="font-bold text-lg">
                          {cidade.nome}
                          {cidade.destaque && (
                            <span className="ml-2 text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                              Sede
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cidade.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Como funciona */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Como Funciona o <span className="text-accent">Atendimento</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Independentemente da cidade, o processo é o mesmo: você entra em contato, apresenta
                    sua obra e recebe orientação técnica personalizada. O atendimento inclui:
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { step: "1", title: "Contato inicial", desc: "Apresente sua obra pelo WhatsApp ou telefone. Envie planta, projeto estrutural ou fotos." },
                    { step: "2", title: "Análise técnica", desc: "O engenheiro Willian Silva analisa o projeto e as condições da obra para definir a especificação ideal." },
                    { step: "3", title: "Visita técnica", desc: "Visita presencial para medição, verificação de acesso e definição do volume exato de concreto." },
                    { step: "4", title: "Especificação e orçamento", desc: "Definição detalhada: FCK, slump, volume, necessidade de bombeamento e cronograma de entrega." },
                    { step: "5", title: "Acompanhamento", desc: "Suporte técnico durante a concretagem para garantir que tudo saia conforme o planejado." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-all">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sua Obra Está na <span className="text-accent">Região de Maringá</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato e agende uma visita técnica. A consultoria da Fator AC garante o concreto
                certo, no volume certo, para a sua obra — em qualquer cidade da região.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Agendar Visita Técnica
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Concreto Usinado em Maringá", description: "Entenda como funciona a entrega e consultoria em Maringá.", href: "/concreto-usinado-maringa" },
              { title: "Calculadora de Concreto", description: "Calcule o volume exato de concreto para sua obra.", href: "/calculadora" },
              { title: "Preço do Concreto Usinado", description: "Fatores que influenciam o preço e como economizar.", href: "/preco-concreto-usinado" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AreasAtendimento;
