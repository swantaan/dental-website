import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Stethoscope,
  GraduationCap,
  Award,
  Clock
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const services = [
    "Routine dental examination & Check-up",
    "Emergency treatment & Pain relief",
    "Dental fillings",
    "Tooth extractions",
    "Crowns and bridges",
    "Root canal treatment",
    "Full and partial dentures",
    "Denture repairs, relines and addition of teeth",
    "Implant supported crowns, bridges and dentures",
    "Scale and polish (General cleaning)",
    "Deep cleaning and root planning",
    "Teeth whitening (In chair and at home)",
    "Night guards for grinding",
    "Custom made sport mouth guards",
    "Paediatric dentistry (Children)",
    "Treatment under general anaesthesia "
  ];

  const doctors = [
    {
      name: "Dr. Flip Coetzee",
      specialty: "General Dentistry",
      experience: "15+ years",
      education: "B.Ch. D (Stell), Dip Odont (Stell)",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Jacques Du Plessis",
      specialty: "General Dentistry",
      experience: "15+ years",
      education: "B.Ch.D (Pret), PGDip (Pret)",
      image: "https://images.unsplash.com/photo-2b71ea197ec2-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Louise Niddrie",
      specialty: "Orthodontics",
      experience: "2+ years",
      education: "B.Ch.D (UWC), PGDip (UWC)",
      image: "https://images.unsplash.com/photo-2b71ea197ec2-84ea40e86dd3?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Gloudine",
      specialty: "Hygenist",
      experience: "15+ years",
      education: "B.OH (Stell)",
      image: "https://images.unsplash.com/photo-2b71ea197ec2-84ea40e86dd3?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[70vh] flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Excellence in 
            <span className="block text-accent">Dental Care</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Friendly family dentists specializing in general dentistry
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => window.location.href = 'tel:+27448746455'}
          >
            <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            Call Now
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                <span className="text-base sm:text-lg text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Doctors
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with the highest quality care.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {doctors.map((doctor, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-muted"
                        />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {doctor.name}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Stethoscope className="h-4 w-4 text-accent" />
                          <span className="text-accent font-semibold text-sm sm:text-base">
                            {doctor.specialty}
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground text-sm sm:text-base">
                            {doctor.experience}
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground text-xs sm:text-sm">
                            {doctor.education}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Dental Laboratory Section */}
      <section id="laboratory" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Information
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Dental Laboratory</h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              We are lucky to have Garden Route Dental Lab on our premises. In collaboration with the technician, we can ensure the best possible outcome when it comes to your prosthetic work.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Referrals</h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              For advanced dental procedures such as orthodontic treatment, full mouth rehabilitation, treatment of oral disease & periodontitis, complicated wisdom teeth removal and implants, we will refer you to the appropriate dental specialist.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Medical Aid</h3>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We accept most non-network medical aids. No payment plan options available. Private patients are requested to settle their bill directly after their appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">(044) 874 6455</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">denprak@telkomsa.net</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted p-3 rounded-full">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        57 Albert Street / Nelson Mandela Blv. 22<br />
                        George South<br />
                        George, 6529
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Office Hours
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-muted rounded-lg h-64 sm:h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=57+Albert+Street,+George,+South+Africa&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Dentists in George</p>
          <p className="text-primary-foreground/80">
            © 2025 Dental Practice. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;