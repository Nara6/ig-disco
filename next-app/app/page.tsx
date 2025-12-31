import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <Services />
        <Process />
        <Team />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ScrollAnimation />
    </>
  );
}
