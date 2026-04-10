import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const BombeamentoConcreto = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bombeamento de Concreto: Quando Usar, Tipos e Cuidados",
    description: "Guia completo sobre bombeamento de concreto: quando é necessário, tipos de bomba, especificação do concreto bombeável e cuidados na operação.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-03-20",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/bombeamento-concreto`,
  };

  return (
    <>
      <Helmet>
        <title>Bombeamento de Concreto: Quando Usar e Quanto Custa | Fator AC</title>
        <meta name="description" content="Guia completo sobre bombeamento de concreto: quando é necessário, tipos de bomba (estacionária e lança), especificação do concreto bombeável e cuidados essenciais. Maringá e região." />
        <link rel="canonical" href={`${SITE_URL}/bombeamento-concreto`} />
        <meta property="og:title" content="Bombeamento de Concreto: Guia Completo | Fator AC" />
        <meta property="og:description" content="Quando usar bomba de concreto, tipos disponíveis e especificação do concreto bombeável." />
        <meta property="og:url" content={`${SITE_URL}/bombeamento-concreto`} />
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
              <Breadcrumb items={[{ label: "Bombeamento de Concreto" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Bombeamento de <span className="text-accent">Concreto</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Quando é necessário bombear, quais os tipos de bomba disponíveis e como especificar
                  o concreto para garantir operação segura e eficiente.
                </p>
              </div>
            </div>
          </section>

          {/* Quando bombear */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quando É Necessário <span className="text-accent">Bombear</span>?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O bombeamento é necessário sempre que o caminhão betoneira{" "}
                    <strong className="text-foreground">não consegue descarregar diretamente</strong> no ponto
                    de lançamento. As situações mais comuns em obras na região de Maringá incluem:
                  </p>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[
                    "Lajes acima do térreo (primeiro pavimento em diante)",
                    "Fundações profundas ou locais de difícil acesso",
                    "Terrenos sem espaço para o caminhão manobrar",
                    "Grandes volumes que exigem velocidade de lançamento",
                    "Distância entre o caminhão e o ponto de concretagem superior a 5 metros",
                    "Obras em ruas estreitas ou com desnível de terreno",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 bg-card border border-border rounded-lg p-4">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de bomba */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Tipos de <span className="text-accent">Bomba de Concreto</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-accent">Bomba Estacionária</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Equipamento fixo posicionado próximo ao caminhão, que bombeia o concreto através de
                      tubulação rígida ou mangote flexível até o ponto de lançamento.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Alcance horizontal:</strong> até 80 metros</li>
                      <li>• <strong>Alcance vertical:</strong> até 30 metros</li>
                      <li>• <strong>Ideal para:</strong> obras com acesso restrito, pisos, fundações</li>
                      <li>• <strong>Custo:</strong> menorque a bomba lança</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-accent">Bomba Lança (Autobomba)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Caminhão equipado com lança articulada (braço mecânico) que posiciona a saída do concreto
                      diretamente sobre o ponto de lançamento, com controle remoto.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Alcance vertical:</strong> 24 a 56 metros (depende do modelo)</li>
                      <li>• <strong>Ideal para:</strong> edifícios, lajes altas, grande alcance</li>
                      <li>• <strong>Vantagem:</strong> rapidez na montagem e precisão no lançamento</li>
                      <li>• <strong>Custo:</strong> mais alto, mas justifica em produtividade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Especificação do concreto bombeável */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Especificação do <span className="text-accent">Concreto Bombeável</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nem todo concreto pode ser bombeado. O concreto bombeável precisa atender requisitos
                    específicos de granulometria, finos e <a href="/slump-concreto" className="text-accent hover:underline">slump</a>{" "}
                    para fluir pela tubulação sem entupir ou segregar.
                  </p>
                  <p>
                    <strong className="text-foreground">Requisitos básicos:</strong>
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span><strong className="text-foreground">Slump mínimo de 10 cm</strong> — abaixo disso, a bomba não consegue succionar e empurrar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span><strong className="text-foreground">Brita 1 (19 mm)</strong> como agregado graúdo máximo — britas maiores entopem a tubulação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span><strong className="text-foreground">Teor de finos adequado</strong> — a pasta de cimento precisa lubrificar a tubulação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                      <span><strong className="text-foreground"><a href="/fck-concreto" className="text-accent hover:underline">FCK</a> conforme projeto</strong> — o bombeamento não altera a resistência especificada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Custo */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quanto Custa o <span className="text-accent">Bombeamento</span>?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    O custo do bombeamento é cobrado separadamente do concreto e varia conforme o tipo de
                    bomba, o volume bombeado e o tempo de utilização. Em geral, a bomba estacionária tem
                    custo menor que a bomba lança.
                  </p>
                  <p>
                    Embora represente um custo adicional, o bombeamento frequentemente{" "}
                    <strong className="text-foreground">compensa financeiramente</strong>: reduz o tempo de
                    concretagem, diminui a necessidade de mão de obra para transporte interno (carrinhos e
                    jericas), evita desperdício e garante melhor qualidade final pela velocidade de lançamento.
                  </p>
                  <p>
                    A Fator AC avalia se o bombeamento é realmente necessário para sua obra e, quando é,
                    indica o tipo de bomba mais adequado e o{" "}
                    <a href="/preco-concreto-usinado" className="text-accent hover:underline">custo-benefício</a>{" "}
                    da operação completa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de <span className="text-accent">Bombeamento</span> na Sua Obra?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC avalia o acesso, especifica o concreto bombeável e coordena a operação para
                garantir eficiência e economia.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Solicitar Avaliação Técnica
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Slump do Concreto", description: "Slump mínimo para bombeamento e tabela por aplicação.", href: "/slump-concreto" },
              { title: "Concreto para Laje", description: "Quando a laje precisa de bombeamento.", href: "/concreto-para-laje" },
              { title: "Concreto Usinado em Maringá", description: "Como funciona a entrega e logística de concreto na região.", href: "/concreto-usinado-maringa" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BombeamentoConcreto;
