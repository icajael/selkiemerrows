import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import LogoSection from "@/components/LogoSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <LogoSection />
      <Gallery />
      <section id="contact" className="py-20 bg-gradient-deep">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
