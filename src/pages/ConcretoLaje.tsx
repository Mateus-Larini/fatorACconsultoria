import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const ConcretoLaje = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Concreto para Laje: Qual Usar, Quanto Precisa e Cuidados Essenciais",
    description: "Guia completo sobre concreto para laje: FCK recomendado, slump ideal, cálculo de volume, tipos de laje e cuidados na concretagem.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-02-10",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/concreto-para-laje`,
  };

  return (
    <>
      <Helmet>
        <title>Concreto para Laje: Qual FCK Usar e Quanto Precisa | Fator AC</title>
        <meta name="description" content="Guia completo sobre concreto para laje. Saiba qual FCK usar, como calcular o volume, qual o slump ideal e os cuidados essenciais na concretagem. Consultoria técnica em Maringá e região." />
        <link rel="canonical" href={`${SITE_URL}/concreto-para-laje`} />
        <meta property="og:title" content="Concreto para Laje: Qual FCK Usar e Quanto Precisa | Fator AC" />
        <meta property="og:description" content="Qual FCK usar na laje? Como calcular o volume? Guia técnico completo para concretagem de laje." />
        <meta property="og:url" content={`${SITE_URL}/concreto-para-laje`} />
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
              <Breadcrumb items={[{ label: "Concreto para Laje" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Concreto para <span className="text-accent">Laje</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Guia técnico completo: qual concreto usar, como calcular o volume correto e quais cuidados
                  evitam problemas na concretagem da laje.
                </p>
              </div>
            </div>
          </section>

          {/* Tipos de laje */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tipos de Laje e <span className="text-accent">Concreto Adequado</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Cada tipo de laje exige especificações diferentes de concreto. A escolha correta depende do
                    projeto estrutural, dos vãos, da carga prevista e das condições de execução. Os tipos mais
                    comuns na região de Maringá são:
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="font-bold text-lg mb-2">Laje Maciça</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Indicada para vãos maiores e cargas elevadas. Consome mais concreto, pois toda a seção é
                      preenchida. <strong>FCK típico: 25 a 30 MPa.</strong> Slump: 10 a 16 cm. Exige atenção
                      especial ao escoramento e vibração.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="font-bold text-lg mb-2">Laje Nervurada (com cubetas)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Reduz o consumo de concreto usando formas plásticas (cubetas) para criar vazios. Excelente
                      relação custo-benefício. <strong>FCK típico: 25 a 35 MPa.</strong> Slump: 12 a 16 cm.
                      Precisa de atenção no preenchimento das nervuras.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all">
                    <h3 className="font-bold text-lg mb-2">Laje Pré-fabricada (treliçada)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A mais comum em obras residenciais. Usa vigotas pré-fabricadas preenchidas com lajotas e
                      capeamento de concreto. <strong>FCK típico: 25 MPa.</strong> Slump: 8 a 12 cm para o
                      capeamento. Volume necessário é menor que a laje maciça.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FCK e Slump */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-accent">FCK</span> e <span className="text-accent">Slump</span> para Laje
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold">Tipo de Laje</th>
                        <th className="text-left py-3 px-4 font-bold">FCK Recomendado</th>
                        <th className="text-left py-3 px-4 font-bold">Slump Ideal</th>
                        <th className="text-left py-3 px-4 font-bold">Observação</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Residencial (treliçada)</td>
                        <td className="py-3 px-4 text-accent font-semibold">25 MPa</td>
                        <td className="py-3 px-4">8–12 cm</td>
                        <td className="py-3 px-4">Capeamento de 5 a 7 cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Residencial (maciça)</td>
                        <td className="py-3 px-4 text-accent font-semibold">25–30 MPa</td>
                        <td className="py-3 px-4">10–16 cm</td>
                        <td className="py-3 px-4">Espessura de 10 a 15 cm</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Edifício (nervurada)</td>
                        <td className="py-3 px-4 text-accent font-semibold">30–35 MPa</td>
                        <td className="py-3 px-4">12–16 cm</td>
                        <td className="py-3 px-4">Pode exigir bombeamento</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Industrial</td>
                        <td className="py-3 px-4 text-accent font-semibold">30–40 MPa</td>
                        <td className="py-3 px-4">10–14 cm</td>
                        <td className="py-3 px-4">Verificar carga de utilização</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Atenção:</strong> estas são referências gerais. A definição final de{" "}
                  <a href="/fck-concreto" className="text-accent hover:underline">FCK</a> e{" "}
                  <a href="/slump-concreto" className="text-accent hover:underline">slump</a> deve
                  sempre seguir o projeto estrutural do engenheiro responsável.
                </p>
              </div>
            </div>
          </section>

          {/* Como calcular */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Como Calcular o Volume de <span className="text-accent">Concreto para Laje</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Para lajes maciças, a fórmula é direta: <strong className="text-foreground">comprimento × largura
                    × espessura = volume em m³</strong>. Para uma laje de 8m × 6m com 12 cm de espessura:
                    8 × 6 × 0,12 = 5,76 m³.
                  </p>
                  <p>
                    Para lajes treliçadas, o cálculo considera apenas o capeamento (camada de concreto acima das
                    lajotas), geralmente entre 5 e 7 cm. Os inter-eixos preenchidos com concreto também devem ser
                    contabilizados, conforme o projeto.
                  </p>
                  <p>
                    Em todos os casos, adicione entre <strong className="text-foreground">5% e 10% de margem</strong> para
                    perdas. Use nossa{" "}
                    <a href="/calculadora" className="text-accent hover:underline font-semibold">calculadora de concreto</a>{" "}
                    para obter o volume exato.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cuidados */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cuidados Essenciais na <span className="text-accent">Concretagem de Laje</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <CheckCircle className="text-accent" size={20} />
                      Boas Práticas
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Conferir formas e escoramento antes do início</li>
                      <li>• Molhar as formas e a ferragem para evitar absorção</li>
                      <li>• Usar vibrador de imersão para adensar o concreto</li>
                      <li>• Nivelar com régua vibratória ou sarrafo</li>
                      <li>• Iniciar cura úmida nas primeiras 24 horas</li>
                      <li>• Manter a cura por no mínimo 7 dias</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="text-destructive" size={20} />
                      Erros que Comprometem a Laje
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Adicionar água no concreto para facilitar o espalhamento</li>
                      <li>• Não vibrar adequadamente, causando bolhas de ar</li>
                      <li>• Desformar antes do tempo recomendado</li>
                      <li>• Não realizar cura úmida (causa fissuras por retração)</li>
                      <li>• Lançar concreto com slump inadequado ao tipo de laje</li>
                      <li>• Usar FCK inferior ao especificado no projeto</li>
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
                Planejando a <span className="text-accent">Concretagem da Sua Laje</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC faz a verificação técnica, calcula o volume exato e especifica o concreto ideal
                para sua laje. Sem surpresas no dia da concretagem.
              </p>
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  Solicitar Consultoria para Laje
                </a>
              </Button>
            </div>
          </section>

          <RelatedArticles
            articles={[
              { title: "Calculadora de Concreto", description: "Calcule o volume exato de concreto para sua laje.", href: "/calculadora" },
              { title: "FCK do Concreto", description: "Guia completo sobre classes de resistência e como escolher.", href: "/fck-concreto" },
              { title: "Bombeamento de Concreto", description: "Quando usar bomba na concretagem da laje.", href: "/bombeamento-concreto" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConcretoLaje;
