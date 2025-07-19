import { Card, CardContent } from "@/components/ui/card";

export default function LogoSection() {
  return (
    <section className="py-16 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <img 
                  src="/lovable-uploads/7eca913c-ed96-4513-983d-ee9792f49211.png" 
                  alt="Selkies & Merrows Logo" 
                  className="max-w-sm w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Mythical Creatures of the Sea
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our name draws inspiration from the mythical selkies and merrows - enchanting sea beings 
                from Celtic folklore. Like these legendary creatures who moved gracefully between land and sea, 
                our diving programs help you discover your own connection to the underwater world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}