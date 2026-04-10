import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, AlertTriangle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const SlumpConcreto = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Slump do Concreto: O Que É, Como Medir e Qual Escolher",
    description: "Guia completo sobre slump (abatimento) do concreto: o que é, como é medido, tabela por aplicação e consequências do slump inadequado.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-03-15",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/slump-concreto`,
  };

  return (
    <>
      <Helmet>
        <title>Slump do Concreto: O Que É e Qual o Ideal | Fator AC</title>
        <meta name="description" content="O que é slump (abatimento) do concreto, como é medido pelo slump test, tabela de slump por aplicação e as consequências de especificar errado. Guia técnico pela Fator AC." />
        <link rel="canonical" href={`${SITE_URL}/slump-concreto`} />
        <meta property="og:title" content="Slump do Concreto: Guia Completo | Fator AC" />
        <meta property="og:description" content="O que é slump, como medir e qual o ideal para laje, piso, fundação e bombeamento." />
        <meta property="og:url" content={`${SITE_URL}/slump-concreto`} />
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
              <Breadcrumb items={[{ label: "Slump do Concreto" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Slump do <span className="text-accent">Concreto</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  O que é slump (abatimento), como é medido, qual o ideal para cada aplicação e por que
                  especificar errado custa caro.
                </p>
              </div>
            </div>
          </section>

          {/* O que é */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O Que É <span className="text-accent">Slump</span> (Abatimento)?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Slump é a medida da <strong className="text-foreground">consistência e trabalhabilidade</strong> do
                    concreto fresco. Em termos simples, indica o quão "mole" ou "duro" o concreto está quando
                    chega na obra. É determinado pelo <strong className="text-foreground">ensaio de abatimento
                    do tronco de cone</strong> (slump test), conforme a ABNT NBR NM 67.
                  </p>
                  <p>
                    O teste funciona assim: preenche-se um molde cônico de 30 cm de altura com concreto fresco,
                    retira-se o molde verticalmente e mede-se quanto o concreto "abateu" (desceu). Se desceu
                    10 cm, o slump é de 10 cm. Quanto maior o slump, mais fluido é o concreto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tabela por aplicação */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Slump Recomendado por <span className="text-accent">Aplicação</span>
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold">Aplicação</th>
                        <th className="text-left py-3 px-4 font-bold">Slump (cm)</th>
                        <th className="text-left py-3 px-4 font-bold">Justificativa</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Fundação (bloco, sapata)</td>
                        <td className="py-3 px-4 text-accent font-semibold">5–8 cm</td>
                        <td className="py-3 px-4">Concreto mais seco para manter forma dentro da escavação</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><a href="/concreto-para-piso" className="text-accent hover:underline">Piso e contrapiso</a></td>
                        <td className="py-3 px-4 text-accent font-semibold">8–12 cm</td>
                        <td className="py-3 px-4">Facilita espalhamento e nivelamento com régua</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><a href="/concreto-para-calcada" className="text-accent hover:underline">Calçada e garagem</a></td>
                        <td className="py-3 px-4 text-accent font-semibold">8–10 cm</td>
                        <td className="py-3 px-4">Consistência para espalhamento sem escorrer das formas</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4"><a href="/concreto-para-laje" className="text-accent hover:underline">Laje (convencional)</a></td>
                        <td className="py-3 px-4 text-accent font-semibold">10–16 cm</td>
                        <td className="py-3 px-4">Facilita lançamento e vibração entre armaduras</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Vigas e pilares</td>
                        <td className="py-3 px-4 text-accent font-semibold">10–14 cm</td>
                        <td className="py-3 px-4">Precisa fluir entre as armaduras densas</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4"><a href="/bombeamento-concreto" className="text-accent hover:underline">Concreto bombeado</a></td>
                        <td className="py-3 px-4 text-accent font-semibold">10–16 cm</td>
                        <td className="py-3 px-4">Mínimo de 10 cm para não entupir a tubulação</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Slump errado */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Consequências do <span className="text-accent">Slump Inadequado</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={20} />
                      Slump Muito Baixo
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Dificuldade no lançamento e espalhamento</li>
                      <li>• Falhas de preenchimento (bicheiras)</li>
                      <li>• Dificuldade de vibração adequada</li>
                      <li>• Equipe adiciona água na obra (proibido!)</li>
                      <li>• Tempo de concretagem aumenta drasticamente</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={20} />
                      Slump Muito Alto
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Segregação dos agregados (brita desce, pasta sobe)</li>
                      <li>• Exsudação (água sobe para a superfície)</li>
                      <li>• Redução da resistência final</li>
                      <li>• Retração plástica e fissuras</li>
                      <li>• Custo maior por uso de mais aditivo</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-accent/5 border border-accent/20 rounded-xl p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Regra fundamental:</strong> nunca adicione água ao
                    concreto na obra para aumentar o slump. Isso reduz a resistência, aumenta a porosidade
                    e compromete a durabilidade. Se o slump chegar abaixo do especificado, a orientação correta
                    é recusar o caminhão ou solicitar que a central ajuste com aditivo superplastificante.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Slump e preço */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  O Slump Afeta o <span className="text-accent">Preço</span>?
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Sim. Slumps mais altos exigem maior quantidade de aditivos plastificantes ou
                    superplastificantes, o que acrescenta custo ao m³. A diferença varia, mas pode ser
                    significativa entre um slump 8 e um slump 22.
                  </p>
                  <p>
                    A consultoria da Fator AC analisa o método de lançamento, as condições de acesso da obra
                    e o tipo de aplicação para determinar o{" "}
                    <strong className="text-foreground">menor slump operacionalmente viável</strong> — garantindo
                    boa trabalhabilidade sem custo desnecessário com aditivos. Isso é parte do que gera a
                    economia de até 35% que nossos clientes observam.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa Definir o <span className="text-accent">Slump Ideal</span> para Sua Obra?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC especifica o slump correto para cada etapa da sua obra, considerando tipo de
                aplicação, condições de acesso e método de lançamento.
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
              { title: "FCK do Concreto", description: "Como a resistência e o slump se complementam na especificação.", href: "/fck-concreto" },
              { title: "Bombeamento de Concreto", description: "O slump mínimo para bombeamento e cuidados essenciais.", href: "/bombeamento-concreto" },
              { title: "Preço do Concreto Usinado", description: "Como o slump influencia o custo do m³.", href: "/preco-concreto-usinado" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SlumpConcreto;
