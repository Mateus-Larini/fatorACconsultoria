import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    question: "Qual a diferença entre concreto usinado e concreto virado em obra?",
    answer:
      "O concreto usinado é produzido em central dosadora com controle rigoroso de proporções, qualidade dos materiais e rastreabilidade por laudo técnico. Já o concreto virado em obra é misturado manualmente ou com betoneira no canteiro, sem o mesmo controle de dosagem. O usinado garante resistência conforme especificação (FCK), uniformidade entre os caminhões e responsabilidade técnica da central — vantagens críticas para qualquer obra estrutural.",
    linkText: "Conheça as vantagens do concreto usinado em Maringá",
    linkHref: "/concreto-usinado-maringa",
  },
  {
    question: "Quanto custa o concreto usinado em Maringá?",
    answer:
      "O preço do m³ de concreto usinado em Maringá varia conforme a resistência (FCK), o abatimento (slump), o volume do pedido, a distância da central até a obra e a necessidade de bombeamento. Um FCK mais alto ou um slump mais elevado custam mais, mas nem sempre são necessários. A Fator AC analisa seu projeto para especificar exatamente o que você precisa, evitando que pague por resistência ou trabalhabilidade acima do necessário.",
    linkText: "Entenda o que influencia o preço do concreto usinado",
    linkHref: "/preco-concreto-usinado",
  },
  {
    question: "Qual tipo de concreto usar para laje residencial?",
    answer:
      "Para lajes residenciais convencionais, o concreto mais indicado é o FCK 25 MPa (classe C25), que atende à maioria dos projetos estruturais. Para lajes de edifícios com maiores cargas ou vãos maiores, pode ser necessário FCK 30 MPa ou superior. A definição correta sempre depende do projeto estrutural do engenheiro responsável. O slump recomendado para lajes fica entre 10 e 16 cm, dependendo das condições de lançamento.",
    linkText: "Guia completo de concreto para laje",
    linkHref: "/concreto-para-laje",
  },
  {
    question: "Qual concreto é indicado para piso e contrapiso?",
    answer:
      "Para contrapiso residencial, o concreto convencional com FCK 20 MPa e slump entre 8 e 12 cm atende bem. Para piso industrial com tráfego de empilhadeiras, o ideal é FCK 30 MPa ou superior, com fibras de polipropileno ou aço. A espessura, o acabamento superficial e as juntas de retração são tão importantes quanto a resistência do concreto para garantir durabilidade.",
    linkText: "Saiba mais sobre concreto para piso e contrapiso",
    linkHref: "/concreto-para-piso",
  },
  {
    question: "Qual o melhor concreto para calçada e entrada de garagem?",
    answer:
      "Para calçadas de pedestres, FCK 20 MPa com espessura de 8 a 10 cm é suficiente. Já para entradas de garagem e áreas com tráfego de veículos leves, recomendamos no mínimo FCK 25 MPa com espessura de 10 a 12 cm. Acabamento superficial com textura antiderrapante e juntas de dilatação a cada 2 a 3 metros são essenciais para evitar trincas e garantir segurança.",
    linkText: "Guia de concreto para calçada e garagem",
    linkHref: "/concreto-para-calcada",
  },
  {
    question: "O que é FCK e como escolher a resistência do concreto?",
    answer:
      "FCK (Resistência Característica do Concreto à Compressão) é o valor de resistência mínimo que o concreto deve atingir aos 28 dias de cura, medido em MPa. As classes mais comuns vão de C20 (20 MPa) a C40 (40 MPa). Escolher o FCK correto é fundamental: abaixo do necessário compromete a segurança; acima, gera custo desnecessário. A especificação deve sempre seguir o projeto estrutural.",
    linkText: "Guia completo sobre FCK do concreto",
    linkHref: "/fck-concreto",
  },
  {
    question: "O que é slump do concreto e qual o ideal para minha obra?",
    answer:
      "Slump (ou abatimento) mede a consistência e trabalhabilidade do concreto fresco. É determinado pelo ensaio do tronco de cone (slump test) e expresso em centímetros. Para fundações: 5 a 8 cm. Para pisos e contrapisos: 8 a 12 cm. Para lajes e vigas: 10 a 16 cm. Para bombeamento: mínimo de 10 cm. Slump inadequado pode causar dificuldade no lançamento ou excesso de água, comprometendo a resistência final.",
    linkText: "Saiba como escolher o slump ideal",
    linkHref: "/slump-concreto",
  },
  {
    question: "Quando é necessário usar bomba de concreto?",
    answer:
      "O bombeamento é indicado quando o acesso do caminhão betoneira ao ponto de lançamento é difícil ou impossível — como lajes acima do térreo, fundações profundas, terrenos com acesso restrito ou grandes volumes que exigem velocidade de lançamento. A bomba estacionária atende até 80 metros de distância horizontal, enquanto a bomba lança (autobomba) oferece alcance vertical de até 40 metros.",
    linkText: "Guia completo sobre bombeamento de concreto",
    linkHref: "/bombeamento-concreto",
  },
  {
    question: "Como calcular a quantidade de concreto para minha obra?",
    answer:
      "O cálculo básico é: comprimento × largura × espessura (em metros) = volume em m³. Para uma laje com 50 m² e 10 cm de espessura: 50 × 0,10 = 5 m³. Recomendamos adicionar entre 5% e 10% de margem para perdas no transporte e lançamento. Para cálculos de vigas, pilares e fundações, as fórmulas variam conforme a geometria. Use nossa calculadora gratuita para obter o volume exato.",
    linkText: "Usar a calculadora de concreto gratuita",
    linkHref: "/calculadora",
  },
  {
    question: "Quais cidades a Fator AC atende na região de Maringá?",
    answer:
      "A Fator AC Consultoria atende toda a região metropolitana de Maringá, incluindo Maringá, Sarandi, Marialva, Paiçandu, Mandaguari, Mandaguaçu, Jandaia do Sul, Floresta, Itambé e Iguaraçu. Cada projeto recebe visita técnica presencial para medição, análise das condições de acesso e especificação precisa do concreto ideal para sua obra.",
    linkText: "Veja todas as áreas de atendimento",
    linkHref: "/areas-atendimento",
  },
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

export const HomeFAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[var(--gradient-subtle)] relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm">
                Dúvidas Sobre Concreto Usinado
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Perguntas Frequentes Sobre{" "}
              <span className="text-accent">Concreto Usinado</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Respostas técnicas diretas para as dúvidas mais comuns de quem está
              planejando uma obra em Maringá e região
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`home-faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-accent hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-3">
                  <p>{item.answer}</p>
                  <Link
                    to={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline"
                  >
                    {item.linkText}
                    <ArrowRight size={14} />
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
