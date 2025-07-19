import { Card } from "@/components/ui/card";

export default function Gallery() {
  const photos = [
    {
      src: "/lovable-uploads/a3ca3bb9-734f-429b-8d81-46c4a3d7b6f8.png",
      alt: "Freediver exploring coral reef",
      title: "Coral Reef Exploration"
    },
    {
      src: "/lovable-uploads/07de0824-ce4b-43a6-ac91-04a781d814d3.png",
      alt: "Diver at surface with fins",
      title: "Surface Training"
    },
    {
      src: "/lovable-uploads/8afe0d0e-ab5a-4161-a55b-bf1b78305c5d.png",
      alt: "Freediver swimming through coral",
      title: "Underwater Navigation"
    },
    {
      src: "/lovable-uploads/5c748a7c-b7a4-464d-b092-7df7f165b02f.png",
      alt: "Freediver above colorful coral reef",
      title: "Reef Diving"
    },
    {
      src: "/lovable-uploads/3a3780ab-6dd0-46b4-a34a-5ce8455f151e.png",
      alt: "Freediver diving down into blue water",
      title: "Deep Water Freediving"
    },
    {
      src: "/lovable-uploads/eb0ab852-12bf-4700-99d9-5e671db7c048.png",
      alt: "Freediver near ocean floor",
      title: "Ocean Floor Exploration"
    },
    {
      src: "/lovable-uploads/0fc87047-b90f-4fdc-9fbd-30c60c6065a3.png",
      alt: "Freediver in clear blue water",
      title: "Blue Water Diving"
    },
    {
      src: "/lovable-uploads/8dc1123e-f7e6-4f88-a9a1-bdd3305f4477.png",
      alt: "Diver sitting on ocean floor",
      title: "Underwater Meditation"
    },
    {
      src: "/lovable-uploads/bf708481-8a88-4f81-9fcf-e0486be8b314.png",
      alt: "Freediver in open water",
      title: "Open Water Adventure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-deep">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">OUR DIVING ADVENTURES</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the magic of the underwater world through our professional diving programs. 
            These photos showcase real moments from our freediving and scuba diving expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {photos.map((photo, index) => (
            <Card key={index} className="group overflow-hidden backdrop-blur-md bg-white/10 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{photo.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}