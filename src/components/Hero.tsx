import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/5c748a7c-b7a4-464d-b092-7df7f165b02f.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-ocean opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-wave">
            Selkies &
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-wave" style={{ animationDelay: '0.5s' }}>
            Merrows
          </h1>
        </div>
        
        <p className="text-2xl md:text-3xl mb-12 opacity-90 font-light">
          Discover the beauty beneath the tides
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-xl rounded-full shadow-2xl animate-float"
          style={{ animationDelay: '1s' }}
        >
          MESSAGE US HERE!
        </Button>
      </div>
      
      {/* Floating bubbles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>
    </div>
  );
}