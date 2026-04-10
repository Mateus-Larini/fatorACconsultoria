import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle, Building2, Shield, TrendingUp } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const ConcretoUsinadoMaringa = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Concreto Usinado em Maringá: Consultoria Técnica Especializada",
    description: "Tudo sobre concreto usinado em Maringá: vantagens, como funciona a entrega, diferença para concreto virado em obra e por que contratar consultoria técnica especializada.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-01-15",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/concreto-usinado-maringa`,
  };

  return (
    <>
      <Helmet>
        <title>Concreto Usinado em Maringá | Entrega e Consultoria Técnica - Fator AC</title>
        <meta name="description" content="Concreto usinado em Maringá com consultoria técnica especializada. Entenda as vantagens do concreto usinado, como funciona a entrega e por que a Fator AC é referência na região. Atendimento em Maringá, Sarandi, Marialva e Paiçandu." />
        <link rel="canonical" href={`${SITE_URL}/concreto-usinado-maringa`} />
        <meta property="og:title" content="Concreto Usinado em Maringá | Entrega e Consultoria Técnica - Fator AC" />
        <meta property="og:description" content="Concreto usinado em Maringá com consultoria técnica. Vantagens, entrega, especificação e economia com a Fator AC." />
        <meta property="og:url" content={`${SITE_URL}/concreto-usinado-maringa`} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-28 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
            <div className="container relative mx-auto px-4">
              <Breadcrumb items={[{ label: "Concreto Usinado em Maringá" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Concreto Usinado em{" "}
                  <span className="text-accent">Maringá</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Entenda por que o concreto usinado é a escolha inteligente para sua obra e como a consultoria
                  técnica da Fator AC garante economia real e segurança estrutural na região de Maringá.
                </p>
              </div>
            </div>
          </section>

          {/* O que é concreto usinado */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O Que É <span className="text-accent">Concreto Usinado</span>?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Concreto usinado é o concreto produzido em <strong className="text-foreground">central dosadora</strong> com
                    controle rigoroso de proporções entre cimento, agregados (brita e areia), água e aditivos.
                    Diferentemente do concreto virado em obra, cada caminhão betoneira que sai da central carrega
                    um produto com <strong className="text-foreground">rastreabilidade completa</strong>: dosagem registrada,
                    resistência especificada e laudo técnico que comprova o atendimento à norma ABNT NBR 7212.
                  </p>
                  <p>
                    Em Maringá e região, o concreto usinado é a escolha predominante para obras estruturais —
                    lajes, vigas, pilares, fundações, pisos industriais e residenciais. A razão é simples:
                    <strong className="text-foreground"> qualidade controlada, velocidade de execução e
                    responsabilidade técnica</strong> que o concreto virado em obra não consegue oferecer
                    com a mesma confiabilidade.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Diferenças */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Concreto Usinado <span className="text-accent">vs</span> Virado em Obra
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-accent/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-accent">Concreto Usinado</h3>
                    <ul className="space-y-3">
                      {[
                        "Dosagem controlada por computador",
                        "Resistência garantida por laudo (FCK)",
                        "Homogeneidade entre caminhões",
                        "Rastreabilidade completa da produção",
                        "Velocidade de concretagem muito superior",
                        "Responsabilidade técnica da central dosadora",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card border border-destructive/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-destructive">Virado em Obra</h3>
                    <ul className="space-y-3">
                      {[
                        "Dosagem manual, sujeita a erro humano",
                        "Sem garantia formal de resistência",
                        "Variação entre misturas é inevitável",
                        "Sem rastreabilidade ou laudo técnico",
                        "Produção lenta, depende de mão de obra",
                        "Toda responsabilidade é do construtor",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Shield className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Como funciona em Maringá */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Como Funciona a Entrega de Concreto Usinado em{" "}
                  <span className="text-accent">Maringá</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O processo inicia com a definição da especificação técnica: qual <a href="/fck-concreto" className="text-accent hover:underline">FCK</a>,
                    qual <a href="/slump-concreto" className="text-accent hover:underline">slump</a> e qual volume
                    sua obra precisa. Após o pedido, a central programa a produção e envia os caminhões betoneira
                    conforme o cronograma combinado. Na região metropolitana de Maringá, o tempo médio de
                    deslocamento entre a central e a obra varia de 15 a 40 minutos, dependendo da cidade.
                  </p>
                  <p>
                    É fundamental que a obra esteja preparada para receber o concreto: formas conferidas, ferragem
                    posicionada, equipe de concretagem pronta e <a href="/bombeamento-concreto" className="text-accent hover:underline">bomba
                    posicionada</a> (quando necessário). Cada caminhão betoneira comporta entre 6 e 10 m³, e o
                    concreto deve ser aplicado em até 2 horas após a produção para manter as propriedades.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Por que consultoria */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Por Que Contratar <span className="text-accent">Consultoria Técnica</span> em Maringá?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all">
                    <Building2 className="text-accent mx-auto mb-4" size={36} />
                    <h3 className="font-bold text-lg mb-2">Especificação Precisa</h3>
                    <p className="text-sm text-muted-foreground">
                      Análise técnica do projeto para definir exatamente o tipo, resistência e volume de
                      concreto que sua obra precisa — sem superdimensionamento.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all">
                    <TrendingUp className="text-accent mx-auto mb-4" size={36} />
                    <h3 className="font-bold text-lg mb-2">Economia Comprovada</h3>
                    <p className="text-sm text-muted-foreground">
                      Engenheiros e construtores que contratam consultoria técnica economizam em média 35% no
                      custo do concreto, sem comprometer segurança.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all">
                    <Shield className="text-accent mx-auto mb-4" size={36} />
                    <h3 className="font-bold text-lg mb-2">Zero Retrabalho</h3>
                    <p className="text-sm text-muted-foreground">
                      Especificação correta desde o início elimina problemas de trabalhabilidade, cura
                      inadequada e falhas que geram retrabalho.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprar concreto usinado sem orientação técnica é como comprar medicamento sem receita: você
                  pode até acertar, mas o risco de errar e pagar caro pelo erro é alto. A consultoria da Fator AC
                  funciona como um seguro inteligente — custa pouco e elimina riscos que podem custar milhares.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de Concreto Usinado em <span className="text-accent">Maringá</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fale com o engenheiro Willian Silva e receba orientação técnica personalizada para sua obra.
                Visita técnica, medição e especificação precisa.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Solicitar Consultoria
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Preço do Concreto Usinado", description: "O que influencia o preço e como economizar na compra de concreto usinado.", href: "/preco-concreto-usinado" },
              { title: "Concreto para Laje", description: "Qual FCK, slump e volume usar na laje da sua obra.", href: "/concreto-para-laje" },
              { title: "Áreas de Atendimento", description: "Cidades atendidas pela Fator AC na região metropolitana de Maringá.", href: "/areas-atendimento" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConcretoUsinadoMaringa;
