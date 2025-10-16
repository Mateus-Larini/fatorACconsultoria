import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { InstagramSection } from "@/components/Instagram";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Problems />
        <Services />
        <Process />
        <InstagramSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
