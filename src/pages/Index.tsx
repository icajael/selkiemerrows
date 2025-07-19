import Hero from "@/components/Hero";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <section id="contact" className="py-20 bg-gradient-deep">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
