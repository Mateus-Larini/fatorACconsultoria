import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_URL, SITE_URL } from "@/lib/contact";

const ConcretoCalcada = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Concreto para Calçada: Resistência, Espessura e Especificação Correta",
    description: "Guia técnico de concreto para calçada e entrada de garagem: FCK, espessura, juntas de dilatação e acabamento antiderrapante.",
    author: { "@type": "Person", name: "Willian Silva", jobTitle: "Engenheiro Civil" },
    publisher: { "@type": "Organization", name: "Fator AC Consultoria" },
    datePublished: "2026-03-01",
    dateModified: "2026-04-10",
    url: `${SITE_URL}/concreto-para-calcada`,
  };

  return (
    <>
      <Helmet>
        <title>Concreto para Calçada e Garagem | Resistência e Durabilidade - Fator AC</title>
        <meta name="description" content="Concreto para calçada e entrada de garagem: qual FCK usar, espessura recomendada, juntas de dilatação e acabamento antiderrapante. Guia técnico pela Fator AC de Maringá." />
        <link rel="canonical" href={`${SITE_URL}/concreto-para-calcada`} />
        <meta property="og:title" content="Concreto para Calçada e Garagem | Fator AC" />
        <meta property="og:description" content="Guia completo de concreto para calçada: FCK, espessura, juntas e acabamento." />
        <meta property="og:url" content={`${SITE_URL}/concreto-para-calcada`} />
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
              <Breadcrumb items={[{ label: "Concreto para Calçada" }]} />
              <div className="max-w-4xl mx-auto mt-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  Concreto para <span className="text-accent">Calçada e Garagem</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Especificação correta de resistência, espessura e acabamento para calçadas de pedestres,
                  entradas de garagem e áreas externas.
                </p>
              </div>
            </div>
          </section>

          {/* Especificação por tipo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-accent">FCK</span> e Espessura por Tipo de Calçada
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold">Tipo de Uso</th>
                        <th className="text-left py-3 px-4 font-bold">FCK Mínimo</th>
                        <th className="text-left py-3 px-4 font-bold">Espessura</th>
                        <th className="text-left py-3 px-4 font-bold">Armação</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Calçada de pedestres</td>
                        <td className="py-3 px-4 text-accent font-semibold">20 MPa</td>
                        <td className="py-3 px-4">8–10 cm</td>
                        <td className="py-3 px-4">Opcional (tela Q92)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Entrada de garagem (veículos leves)</td>
                        <td className="py-3 px-4 text-accent font-semibold">25 MPa</td>
                        <td className="py-3 px-4">10–12 cm</td>
                        <td className="py-3 px-4">Tela Q138 ou Q196</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4">Estacionamento (veículos pesados)</td>
                        <td className="py-3 px-4 text-accent font-semibold">30 MPa</td>
                        <td className="py-3 px-4">12–15 cm</td>
                        <td className="py-3 px-4">Tela Q196 ou superior</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Área de manobra / caminhões</td>
                        <td className="py-3 px-4 text-accent font-semibold">30–35 MPa</td>
                        <td className="py-3 px-4">15–20 cm</td>
                        <td className="py-3 px-4">Armação calculada</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  O slump recomendado para calçadas fica entre 8 e 10 cm. Para
                  entender melhor como o <a href="/slump-concreto" className="text-accent hover:underline">slump</a>{" "}
                  influencia a aplicação, consulte nosso guia técnico.
                </p>
              </div>
            </div>
          </section>

          {/* Juntas e acabamento */}
          <section className="py-16 bg-[var(--gradient-subtle)]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Juntas de Dilatação e <span className="text-accent">Acabamento</span>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    As juntas de retração são <strong className="text-foreground">obrigatórias</strong> em
                    calçadas de concreto. Sem elas, o concreto vai trincar — a questão é onde. As juntas
                    controlam onde a fissura acontece, mantendo a estética e a integridade da peça.
                  </p>
                  <p>
                    <strong className="text-foreground">Regra prática:</strong> execute juntas serradas ou
                    moldadas a cada 2 a 3 metros em ambas as direções. A profundidade da junta deve ser de
                    ¼ a ⅓ da espessura da calçada. Para uma calçada de 10 cm, a junta deve ter 2,5 a 3,3 cm
                    de profundidade.
                  </p>
                  <p>
                    Para áreas externas, o acabamento deve ser <strong className="text-foreground">antiderrapante</strong>.
                    As técnicas mais comuns são: vassourado (passar vassoura de cerdas duras na superfície fresca),
                    desempenado grosso ou estampado. Nunca use acabamento liso (queimado) em áreas externas sujeitas
                    à chuva — o risco de escorregamento é alto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Passo a passo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Passo a Passo da <span className="text-accent">Calçada de Concreto</span>
                </h2>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Preparação do solo", desc: "Escavar até a profundidade necessária, compactar o solo e nivelar. Se necessário, aplicar camada de brita graduada." },
                    { step: "2", title: "Formas e armação", desc: "Instalar formas de madeira no nível correto. Posicionar tela soldada ou armação conforme projeto." },
                    { step: "3", title: "Lançamento", desc: "Receber o concreto usinado e distribuir uniformemente dentro das formas. Não adicionar água." },
                    { step: "4", title: "Adensamento e nivelamento", desc: "Vibrar (em espessuras maiores) e nivelar com régua ou sarrafo apoiado nas formas." },
                    { step: "5", title: "Acabamento", desc: "Aplicar acabamento antiderrapante (vassourado) antes do concreto iniciar a pega." },
                    { step: "6", title: "Juntas e cura", desc: "Executar juntas de retração. Iniciar cura úmida e manter por no mínimo 7 dias." },
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
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Use nossa{" "}
                  <a href="/calculadora" className="text-accent hover:underline font-semibold">calculadora de concreto</a>{" "}
                  para saber exatamente quantos m³ sua calçada precisa.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-accent/5 border-y border-accent/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Vai Concretar Sua <span className="text-accent">Calçada ou Garagem</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                A Fator AC especifica o concreto ideal, calcula o volume e orienta a execução para
                garantir durabilidade e acabamento perfeito.
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
              { title: "Concreto para Piso", description: "Especificação de concreto para piso industrial e residencial.", href: "/concreto-para-piso" },
              { title: "FCK do Concreto", description: "Como escolher a resistência certa para cada aplicação.", href: "/fck-concreto" },
              { title: "Calculadora de Concreto", description: "Calcule o volume exato para sua calçada.", href: "/calculadora" },
            ]}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConcretoCalcada;
