import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const ConcretoPiso = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Concreto para Piso e Contrapiso: Especificação e Boas Práticas",
    description: "Guia técnico sobre concreto para piso industrial, residencial e contrapiso. FCK, slump, espessura e acabamento adequados para cada aplicação.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-02-20",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/concreto-para-piso`,
  };

  return (
    <>
      <Helmet>
        <title>Concreto para Piso e Contrapiso | Especificação Técnica - Fator AC</title>
        <meta name="description" content="Guia completo sobre concreto para piso e contrapiso. FCK ideal, slump, espessura, diferenças entre piso industrial e residencial. Consultoria técnica em Maringá e região." />
        <link rel="canonical" href={`${SITE_URL}/concreto-para-piso`} />
        <meta property="og:title" content="Concreto para Piso e Contrapiso | Especificação Técnica - Fator AC" />
        <meta property="og:description" content="FCK, slump e espessura ideais para piso e contrapiso. Guia técnico por especialista em concreto usinado." />
        <meta property="og:url" content={`${SITE_URL}/concreto-para-piso`} />
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
              <Breadcrumb items={[{ label: "Concreto para Piso e Contrapiso" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Concreto para <span className="text-accent">Piso e Contrapiso</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Especificação técnica completa para piso industrial, piso residencial e contrapiso.
                  FCK, slump, espessura e acabamento para cada aplicação.
                </p>
              </div>
            </div>
          </section>

          {/* Diferença piso vs contrapiso */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-accent">Piso</span> vs <span className="text-accent">Contrapiso</span>: Qual a Diferença?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-accent">Contrapiso</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Camada de regularização aplicada sobre a laje ou solo compactado, que serve de base para
                      o revestimento final (cerâmica, porcelanato, vinílico). Não é elemento estrutural.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>FCK típico:</strong> 15–20 MPa</li>
                      <li>• <strong>Espessura:</strong> 3–7 cm</li>
                      <li>• <strong>Slump:</strong> 8–12 cm</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="text-xl font-bold mb-3 text-accent">Piso de Concreto</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Elemento estrutural que recebe cargas diretamente — seja trânsito de pessoas, veículos
                      ou equipamentos. O piso de concreto é o acabamento final, sem revestimento adicional.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• <strong>FCK típico:</strong> 25–35 MPa</li>
                      <li>• <strong>Espessura:</strong> 8–20 cm</li>
                      <li>• <strong>Slump:</strong> 8–12 cm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Especificação por tipo */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Especificação por <span className="text-accent">Tipo de Aplicação</span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2">Piso Residencial (garagem, área gourmet)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Para áreas residenciais com tráfego leve, o concreto com{" "}
                      <a href="/fck-concreto" className="text-accent hover:underline">FCK 25 MPa</a> e espessura de
                      10 a 12 cm é suficiente. O <a href="/slump-concreto" className="text-accent hover:underline">slump</a> entre
                      8 e 10 cm facilita o nivelamento. Armação com tela soldada Q138 ou Q196 evita trincas por retração.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2">Piso Industrial (galpão, depósito)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pisos industriais recebem cargas pesadas de empilhadeiras e estantes. Exigem FCK 30 MPa
                      ou superior, espessura de 15 a 20 cm e, frequentemente, adição de fibras de aço ou
                      polipropileno para controle de fissuração. O projeto de juntas de retração é fundamental
                      e deve ser calculado por engenheiro.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2">Contrapiso para Revestimento</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Quando o objetivo é apenas nivelar a superfície para receber piso cerâmico ou porcelanato,
                      FCK 20 MPa é suficiente. A espessura depende do desnível a corrigir, geralmente entre
                      3 e 7 cm. Um slump mais elevado (10–12 cm) facilita o espalhamento e o nivelamento com régua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Boas práticas */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Boas Práticas para <span className="text-accent">Piso e Contrapiso</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <CheckCircle className="text-accent" size={20} />
                      Faça
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Compactar bem o solo antes de concretar</li>
                      <li>• Usar lona plástica como barreira de umidade</li>
                      <li>• Executar juntas de retração a cada 3 a 4 metros</li>
                      <li>• Aplicar acabamento antes do concreto iniciar a pega</li>
                      <li>• Iniciar cura úmida nas primeiras horas</li>
                      <li>• Calcular o <a href="/calculadora" className="text-accent hover:underline">volume exato</a> antes de pedir</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={20} />
                      Evite
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Concretar sobre solo sem compactação adequada</li>
                      <li>• Adicionar água ao concreto para facilitar espalhamento</li>
                      <li>• Esquecer as juntas de retração (causam trincas aleatórias)</li>
                      <li>• Deixar o concreto secar sem cura (fissuras por retração)</li>
                      <li>• Usar FCK inferior ao necessário para a carga prevista</li>
                      <li>• Aplicar revestimento antes da cura completa (28 dias)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa Especificar Concreto para <span className="text-accent">Piso ou Contrapiso</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC analisa seu projeto e especifica o concreto ideal para sua aplicação —
                resistência, slump e volume exatos para evitar problemas e desperdício.
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
              { title: "Concreto para Calçada", description: "Especificação de concreto para calçada e entrada de garagem.", href: "/concreto-para-calcada" },
              { title: "Slump do Concreto", description: "Como o slump afeta o espalhamento e acabamento do piso.", href: "/slump-concreto" },
              { title: "Preço do Concreto Usinado", description: "Fatores que influenciam o preço e como otimizar o custo.", href: "/preco-concreto-usinado" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConcretoPiso;
