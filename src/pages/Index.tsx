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
  Clock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Dental office background images
  const backgroundImages = [
    "./images/dental-office-1.jpg", // Examination room with green chair
    "./images/dental-office-2.jpg", // Examination room with blue chair  
    "./images/dental-office-3.jpg"  // Waiting room
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Debug: Log when slideshow changes
  useEffect(() => {
    console.log('Slideshow changed to image:', currentImageIndex, backgroundImages[currentImageIndex]);
  }, [currentImageIndex, backgroundImages]);

  // Preload images to prevent white flash
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  const services = [
    // General & Preventive
    "Routine dental examination & check-ups",
    "Scale and polish (general cleaning)",
    "Deep cleaning and root planning",
    "Emergency treatment & pain relief",
    
    // Restorative
    "Dental fillings",
    "Crowns and bridges",
    "Root canal treatment",
    "Tooth extractions",
    "Full and partial dentures",
    "Denture repairs, relines and addition of teeth",
    
    // Advanced & Implants
    "Implant supported crowns, bridges and dentures",
    
    // Cosmetic
    "Teeth whitening (in chair and at home)",
    
    // Protective
    "Night guards for grinding",
    "Custom made sport mouth guards",
    
    // Paediatric
    "Paediatric dentistry - We love seeing children!",
    "Paediatric cleaning (polishing)",
    "Topical fluoride treatment",
    "Dental sealants",
    
    // Specialized Treatment
    "Treatment under general anaesthesia",
    "Treatment under in-chair sedation"
  ];

  const doctors = [
    {
      name: "Dr. Flip Coetzee",
      specialty: "General Dentistry",
      experience: "15+ years",
      education: "B.Ch. D (Stell), Dip Odont (Stell)",
      //image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Jacques Du Plessis",
      specialty: "General Dentistry",
      experience: "12+ years",
      education: "B.Ch.D (Pret), PGDip (Pret)",
      //image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr Louise Niddrie",
      specialty: "General Dentistry",
      experience: "2+ years",
      education: "B.Ch.D (UWC), PGDip (UWC)",
      //image: "https://images.unsplash.com/photo-1594824731317-84ea40e86dd3?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Gloudine",
      specialty: "General Dentistry",
      experience: "6+ years",
      education: "B.OH (Stell)",
      //image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Slideshow */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundColor: 'hsl(var(--muted))' // Fallback background
          }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Excellence in 
            <span className="block text-accent">Dental Care</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Friendly family dentists specializing in general dentistry.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => {
              // Check if mobile and open phone, otherwise scroll to contact
              if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.location.href = 'tel:(044) 874 6455';
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            {/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Call Now' : 'Schedule Appointment'}
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
          
          <div className="relative">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto relative">
              {services.slice(0, showAllServices ? services.length : 8).map((service, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="text-base sm:text-lg text-foreground">{service}</span>
                </div>
              ))}
              
              {services.length > 8 && !showAllServices && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/50 via-muted/30 to-transparent pointer-events-none"></div>
              )}
            </div>
            
            {services.length > 8 && (
              <div className="text-center mt-8 relative z-10">
                <button
                  onClick={() => setShowAllServices(!showAllServices)}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  {showAllServices ? (
                    <>
                      Show Less
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More Services
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
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
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto bg-muted border-4 border-muted flex items-center justify-center">
                          <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground" />
                        </div>
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
            <CarouselPrevious className="bg-background/80 hover:bg-background border-2 border-border shadow-lg" />
            <CarouselNext className="bg-background/80 hover:bg-background border-2 border-border shadow-lg" />
          </Carousel>
        </div>
      </section>

      {/* Services & Information Section */}
      <section id="services-info" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services & Information
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Dental Laboratory */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Our Dental Laboratory
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                We are lucky to have Garden Route Dental Lab on our premises. In collaboration with the
                technician, we can ensure the best possible outcome when it comes to your prosthetic work.
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base font-semibold">
                  Certified Laboratory Excellence
                </span>
              </div>
            </div>

            {/* Referrals */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Referrals
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                For advanced dental procedures such as orthodontic treatment, full mouth rehabilitation,
                treatment of oral disease & periodontitis, complicated wisdom teeth removal and implants,
                we will refer you to the appropriate dental specialist.
              </p>
            </div>

            {/* Medical Aid */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Medical Aid
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We accept most non-network medical aids. No payment plan options available. Private
                patients are requested to settle their bill directly after their appointment.
              </p>
            </div>
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
                      <a href="tel:(044) 874 6455" className="text-muted-foreground">(044) 874 6455</a>
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
                        George South, George, 6529
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
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-muted rounded-lg h-64 sm:h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-accent" />
                <p className="text-base sm:text-lg">Interactive Map</p>
                <p className="text-sm">Map integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Excellence in Dental Care</p>
          <p className="text-primary-foreground/80">
            © 2024 Dental Practice. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;