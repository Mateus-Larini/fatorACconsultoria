import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const FckConcreto = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FCK do Concreto: O Que É e Como Escolher a Resistência Certa",
    description: "Guia completo sobre FCK: o que significa, classes de resistência, tabela por aplicação e como escolher corretamente para cada tipo de obra.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-03-10",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/fck-concreto`,
  };

  return (
    <>
      <Helmet>
        <title>FCK do Concreto: O Que É e Como Escolher | Guia Técnico - Fator AC</title>
        <meta name="description" content="Entenda o que é FCK do concreto, as classes de resistência (C20, C25, C30, C35, C40), tabela por aplicação e como escolher a resistência certa para laje, piso, fundação e calçada." />
        <link rel="canonical" href={`${SITE_URL}/fck-concreto`} />
        <meta property="og:title" content="FCK do Concreto: Guia Completo de Resistência | Fator AC" />
        <meta property="og:description" content="O que é FCK, como escolher e tabela de resistência por aplicação." />
        <meta property="og:url" content={`${SITE_URL}/fck-concreto`} />
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
              <Breadcrumb items={[{ label: "FCK do Concreto" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  FCK do <span className="text-accent">Concreto</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Entenda o que é FCK, como as classes de resistência funcionam e como escolher corretamente
                  para cada tipo de aplicação na sua obra.
                </p>
              </div>
            </div>
          </section>

          {/* O que é FCK */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O Que É <span className="text-accent">FCK</span>?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    FCK é a sigla para <strong className="text-foreground">Resistência Característica do Concreto
                    à Compressão</strong>, medida em Megapascal (MPa). É o valor mínimo de resistência que o
                    concreto deve atingir aos 28 dias de idade, de acordo com a ABNT NBR 8953.
                  </p>
                  <p>
                    Na prática, o FCK representa a <strong className="text-foreground">capacidade de suportar
                    cargas</strong>. Um concreto C25 (FCK 25 MPa) resiste a uma pressão de 25 milhões de Pascal
                    por metro quadrado antes de romper. Quanto maior o FCK, maior a resistência — e também
                    maior o consumo de cimento e o custo.
                  </p>
                  <p>
                    A nomenclatura segue o padrão: <strong className="text-foreground">C</strong> (de Concreto)
                    + <strong className="text-foreground">número</strong> (valor do FCK em MPa). Portanto, C20 
                    significa FCK 20 MPa, C30 significa FCK 30 MPa, e assim por diante.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Classes de resistência */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Classes de <span className="text-accent">Resistência</span> e Aplicações
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold">Classe</th>
                        <th className="text-left py-3 px-4 font-bold">FCK (MPa)</th>
                        <th className="text-left py-3 px-4 font-bold">Aplicações Típicas</th>
                        <th className="text-left py-3 px-4 font-bold">Custo Relativo</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-accent font-semibold">C20</td>
                        <td className="py-3 px-4">20 MPa</td>
                        <td className="py-3 px-4">Contrapiso, calçadas de pedestres, muros de arrimo simples</td>
                        <td className="py-3 px-4">$</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-accent font-semibold">C25</td>
                        <td className="py-3 px-4">25 MPa</td>
                        <td className="py-3 px-4">Lajes residenciais, vigas, pilares, fundações rasas, pisos</td>
                        <td className="py-3 px-4">$$</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-accent font-semibold">C30</td>
                        <td className="py-3 px-4">30 MPa</td>
                        <td className="py-3 px-4">Edifícios de até 5 pavimentos, pisos industriais, fundações profundas</td>
                        <td className="py-3 px-4">$$$</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 text-accent font-semibold">C35</td>
                        <td className="py-3 px-4">35 MPa</td>
                        <td className="py-3 px-4">Edifícios altos, estruturas protendidas, peças pré-moldadas</td>
                        <td className="py-3 px-4">$$$$</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-accent font-semibold">C40+</td>
                        <td className="py-3 px-4">40+ MPa</td>
                        <td className="py-3 px-4">Grandes estruturas, pontes, obras especiais, concreto de alta performance</td>
                        <td className="py-3 px-4">$$$$$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Importante:</strong> a ABNT NBR 6118 determina que o FCK
                  mínimo para elementos estruturais é de 20 MPa. Para obras em ambientes agressivos
                  (litoral, indústrias), o FCK mínimo pode ser maior. Sempre siga o projeto estrutural.
                </p>
              </div>
            </div>
          </section>

          {/* Relação com custo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A Relação Entre <span className="text-accent">FCK e Custo</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Cada aumento de classe de resistência significa mais cimento por m³ de concreto, o que
                    impacta diretamente o <a href="/preco-concreto-usinado" className="text-accent hover:underline">preço</a>.
                    A diferença entre um C20 e um C30 pode representar um acréscimo significativo por m³.
                  </p>
                  <p>
                    O erro mais comum é especificar FCK acima do necessário "por segurança". Se o projeto
                    estrutural pede C25, usar C30 não torna a estrutura mais segura — apenas mais cara.
                    O engenheiro calculista já aplica os coeficientes de segurança exigidos pela norma
                    ao especificar o FCK.
                  </p>
                  <p>
                    Por outro lado, usar FCK abaixo do especificado é{" "}
                    <strong className="text-destructive">extremamente perigoso</strong>. Pode comprometer a
                    segurança estrutural, gerar fissuração, deformações excessivas e responsabilidade civil
                    e criminal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Como especificar */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Como Especificar o <span className="text-accent">FCK Correto</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A definição do FCK é responsabilidade do <strong className="text-foreground">engenheiro
                    calculista</strong> no projeto estrutural. O profissional considera: cargas atuantes,
                    vãos livres, classe de agressividade ambiental, tipo de estrutura e método construtivo.
                  </p>
                  <p>
                    Ao comprar concreto usinado, o FCK é o primeiro dado que a central precisa. Junto com ele,
                    é necessário informar o{" "}
                    <a href="/slump-concreto" className="text-accent hover:underline">slump</a> desejado, o
                    tipo de aplicação (laje, pilar, fundação), o volume necessário e o horário da concretagem.
                  </p>
                  <p>
                    A Fator AC verifica se a especificação do projeto está adequada às condições reais da obra,
                    analisa alternativas que mantenham a segurança com melhor custo-benefício e acompanha a
                    concretagem para garantir conformidade técnica.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Dúvida Sobre o <span className="text-accent">FCK para Sua Obra</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                O engenheiro Willian Silva analisa seu projeto e confirma se o FCK especificado está
                adequado — ou identifica onde é possível otimizar sem comprometer segurança.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Consultar Especialista em FCK
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Slump do Concreto", description: "O outro parâmetro essencial: trabalhabilidade e consistência.", href: "/slump-concreto" },
              { title: "Concreto para Laje", description: "Qual FCK usar para cada tipo de laje.", href: "/concreto-para-laje" },
              { title: "Preço do Concreto Usinado", description: "Como o FCK influencia diretamente o preço por m³.", href: "/preco-concreto-usinado" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FckConcreto;
