import { Card, CardContent } from "@/components/ui/card";
import freediverImg from "@/assets/freediver.jpg";
import scubaImg from "@/assets/scuba-diver.jpg";

export default function About() {
  return (
    <section className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">ABOUT US</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">SELKIES & MERROWS</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Selkies & Merrows, owned by Jael Atendido, operates as part of the Ocean Camp Diving Resort 
                  located in Bagalangit, Mabini, Batangas. This venture focuses on providing a comprehensive 
                  range of aquatic training and certification opportunities. The services include freediving 
                  lessons, where students can learn the art of diving without heavy scuba gear, and scuba diving 
                  courses that cater to various skill levels.
                </p>
                <br />
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition to training, and with the help of Ocean Camp Diving Resort, Selkies & Merrows offers 
                  official certifications for both freediving and scuba diving, ensuring students gain recognized 
                  credentials in the diving community. The program is designed to help enthusiasts improve their 
                  skills in a supportive and professional environment, with experienced coaches and high-quality 
                  equipment to enhance their learning experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${freediverImg})` }}></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">FREEDIVING SCHEDULES</h3>
              <p className="text-gray-700">
                Learn the art of freediving with our expert instructors. Experience the freedom of diving 
                without heavy equipment while exploring the underwater world.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${scubaImg})` }}></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">SCUBA DIVING RATES</h3>
              <p className="text-gray-700">
                Professional scuba diving courses and certifications for all levels. From beginners to 
                advanced divers, we provide comprehensive training programs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-3">FREEDIVING RATES</h4>
              <p className="text-gray-700">Competitive pricing for all freediving courses and experiences.</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-3">LOCATION & CARPOOL</h4>
              <p className="text-gray-700">Convenient location with carpool arrangements available.</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-3">DIVING CERTIFICATIONS</h4>
              <p className="text-gray-700">Official certifications recognized worldwide.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}