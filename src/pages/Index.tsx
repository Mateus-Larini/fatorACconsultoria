import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { InstagramSection } from "@/components/Instagram";
import { Testimonials } from "@/components/Testimonials";
import { HomeFAQ } from "@/components/HomeFAQ";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/lib/contact";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Concreto Usinado Maringá | Consultoria Técnica Especializada - Fator AC</title>
        <meta
          name="description"
          content="Consultoria especializada em concreto usinado em Maringá e região. +13 anos de experiência, economia comprovada de até 35%, análise técnica com engenheiro civil. Atendimento em Maringá, Sarandi, Marialva, Paiçandu e toda região metropolitana."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Concreto Usinado Maringá | Consultoria Técnica Especializada - Fator AC" />
        <meta
          property="og:description"
          content="Consultoria premium em concreto usinado na região de Maringá. Reduza custos e aumente a qualidade com o engenheiro Willian Silva, especialista em tecnologia do concreto."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Stats />
          <About />
          <Problems />
          <Services />
          <Process />
          <HomeFAQ />
          <InstagramSection />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
