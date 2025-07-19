import { Card, CardContent } from "@/components/ui/card";

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
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(/lovable-uploads/3a3780ab-6dd0-46b4-a34a-5ce8455f151e.png)` }}></div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">FREEDIVING SCHEDULES</h3>
              <p className="text-gray-700">
                Learn the art of freediving with our expert instructors. Experience the freedom of diving 
                without heavy equipment while exploring the underwater world.
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl overflow-hidden">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(/lovable-uploads/a3ca3bb9-734f-429b-8d81-46c4a3d7b6f8.png)` }}></div>
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
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-primary mb-4 text-center">FREEDIVING RATES</h4>
              
              {/* Moon Stone Package */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h5 className="font-bold text-primary text-lg mb-2">MOON STONE PACKAGE</h5>
                <p className="text-2xl font-bold text-accent mb-2">₱2,699 <span className="text-sm font-normal">per pax</span></p>
                <p className="text-sm text-gray-600 mb-3">Day Tour (Whole Day Dive) - No accommodation included</p>
                <div className="text-xs text-gray-700">
                  <p className="font-semibold mb-1">Includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>1 Day dive pass</li>
                    <li>1 Theory class</li>
                    <li>2 Open water dive sessions</li>
                    <li>Coaching fee & entrance fee</li>
                    <li>Freediving videos & gear rental</li>
                    <li>Lunch & free muscle tee</li>
                  </ul>
                </div>
              </div>

              {/* Crescent Moon Package */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <h5 className="font-bold text-primary text-lg mb-2">CRESCENT MOON PACKAGE</h5>
                <p className="text-2xl font-bold text-accent mb-2">₱3,999 <span className="text-sm font-normal">per pax</span></p>
                <p className="text-sm text-gray-600 mb-3">2 Days & 1 Night - Shared aircon room accommodation</p>
                <div className="text-xs text-gray-700">
                  <p className="font-semibold mb-1">Includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>2 Days dive pass</li>
                    <li>1 Theory class</li>
                    <li>3 Open water dive sessions</li>
                    <li>3 Board meals (lunch-dinner-breakfast)</li>
                    <li>Shared aircon room accommodation</li>
                    <li>All gear & coaching included</li>
                  </ul>
                </div>
              </div>

              {/* Sun Package */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h5 className="font-bold text-primary text-lg mb-2">SUN PACKAGE</h5>
                <p className="text-2xl font-bold text-accent mb-2">₱3,699 <span className="text-sm font-normal">per pax</span></p>
                <p className="text-sm text-gray-600 mb-3">2 Days & 1 Night - Shared fan room accommodation</p>
                <div className="text-xs text-gray-700">
                  <p className="font-semibold mb-1">Includes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>2 Days dive pass</li>
                    <li>1 Theory class</li>
                    <li>3 Open water dive sessions</li>
                    <li>3 Board meals (lunch-dinner-breakfast)</li>
                    <li>Shared fan room accommodation</li>
                    <li>All gear & coaching included</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 mt-4 text-center italic">
                Solo joiners welcome on weekends! Carpool arrangements available separately.
              </p>
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