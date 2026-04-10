import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, AlertTriangle, CheckCircle, DollarSign, TrendingUp, Truck } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const PrecoConcreto = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Preço do Concreto Usinado: O Que Influencia e Como Economizar",
    description: "Entenda os fatores que determinam o preço do concreto usinado em Maringá e como otimizar o custo sem comprometer a qualidade da obra.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-02-01",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/preco-concreto-usinado`,
  };

  return (
    <>
      <Helmet>
        <title>Preço do Concreto Usinado em Maringá 2026 | Fator AC</title>
        <meta name="description" content="Entenda o que influencia o preço do concreto usinado em Maringá. FCK, slump, volume, distância e bombeamento: cada fator impacta o valor final. Saiba como economizar com consultoria técnica da Fator AC." />
        <link rel="canonical" href={`${SITE_URL}/preco-concreto-usinado`} />
        <meta property="og:title" content="Preço do Concreto Usinado em Maringá 2026 | Fator AC" />
        <meta property="og:description" content="Fatores que determinam o preço do concreto usinado e como economizar na sua obra em Maringá e região." />
        <meta property="og:url" content={`${SITE_URL}/preco-concreto-usinado`} />
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
              <Breadcrumb items={[{ label: "Preço do Concreto Usinado" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Preço do <span className="text-accent">Concreto Usinado</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  O que influencia o valor do m³ de concreto usinado em Maringá e como você pode economizar
                  significativamente com as especificações corretas.
                </p>
              </div>
            </div>
          </section>

          {/* Fatores que influenciam */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Fatores Que Determinam o <span className="text-accent">Preço</span>
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: DollarSign,
                      title: "Resistência (FCK)",
                      desc: "Quanto maior o FCK, maior o consumo de cimento e o custo. Um C30 custa mais que um C20. A Fator AC garante que você use o FCK exato do projeto, sem pagar por resistência desnecessária.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Slump (Abatimento)",
                      desc: "Slumps mais altos exigem mais aditivos plastificantes, encarecendo o m³. Nem toda aplicação precisa de slump alto — a especificação correta evita custo extra.",
                    },
                    {
                      icon: Truck,
                      title: "Volume e Distância",
                      desc: "Pedidos maiores diluem o custo fixo de frete e operação. A distância entre central e obra também impacta: quanto mais longe, maior o custo logístico.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                      <item.icon className="text-accent mb-4" size={32} />
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Como economizar */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Como <span className="text-accent">Economizar</span> Sem Comprometer a Qualidade
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A maior fonte de economia no concreto usinado não está em negociar centavos no preço por m³ —
                    está em <strong className="text-foreground">especificar corretamente</strong>. Muitas obras
                    pagam por FCK 30 quando o projeto exige apenas FCK 25. Outras pedem slump 22 cm quando 12 cm
                    seria suficiente para a aplicação. Cada ajuste desnecessário para cima representa custo real
                    por caminhão.
                  </p>
                  <p>
                    A Fator AC analisa o projeto estrutural, as condições de acesso da obra e o método de
                    lançamento para especificar exatamente o concreto necessário. Isso significa economia de até
                    35% no custo total da concretagem — sem comprometer resistência, durabilidade ou segurança.
                  </p>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="text-accent" size={20} />
                      Onde Economizar
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Usar o <a href="/fck-concreto" className="text-accent hover:underline">FCK exato</a> do projeto estrutural</li>
                      <li>• Ajustar o <a href="/slump-concreto" className="text-accent hover:underline">slump</a> ao método de lançamento</li>
                      <li>• Calcular o <a href="/calculadora" className="text-accent hover:underline">volume preciso</a> para evitar sobras</li>
                      <li>• Concentrar pedidos para diluir frete</li>
                      <li>• Planejar a concretagem para evitar pedidos urgentes</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={20} />
                      Onde Não Economizar
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Nunca use FCK abaixo do especificado no projeto</li>
                      <li>• Não adicione água na obra para aumentar fluidez</li>
                      <li>• Não dispense bombeamento quando o acesso é difícil</li>
                      <li>• Não reduza volume abaixo do necessário (faltar concreto é pior que sobrar)</li>
                      <li>• Não compre apenas pelo preço, sem análise técnica</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Erro comum */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O Erro Mais Caro: <span className="text-accent">Comprar Apenas Pelo Preço</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Quando se compara apenas o preço do m³ entre fornecedores, ignora-se o que realmente
                    define o custo final da concretagem: a <strong className="text-foreground">adequação da
                    especificação ao projeto</strong>. Um concreto mais barato com FCK errado pode gerar falhas
                    que custam 10 vezes o valor "economizado". Um concreto mais caro porém desnecessário drena
                    margem sem agregar valor.
                  </p>
                  <p>
                    A consultoria técnica transforma a compra de concreto de uma decisão baseada em preço para
                    uma <strong className="text-foreground">decisão baseada em engenharia</strong> — onde cada
                    real investido tem justificativa técnica e retorno comprovado.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Quer Saber o <span className="text-accent">Preço Otimizado</span> para Sua Obra?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC faz a especificação técnica e indica o tipo, volume e preço justo de concreto para
                o seu projeto. Sem custo de diagnóstico inicial.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Solicitar Orçamento Técnico
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "FCK do Concreto", description: "Entenda as classes de resistência e como escolher o FCK certo.", href: "/fck-concreto" },
              { title: "Slump do Concreto", description: "O que é slump, como meden e qual o ideal para sua aplicação.", href: "/slump-concreto" },
              { title: "Calculadora de Concreto", description: "Calcule o volume exato de concreto para sua obra.", href: "/calculadora" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrecoConcreto;
