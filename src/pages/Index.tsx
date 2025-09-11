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
  ChevronUp,
  ChevronRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const Index = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<1 | 2>(1);
  
  // Dental office background images
  const backgroundImages = [
    "./images/dental-office-1.jpg", // Examination room with green chair
    "./images/dental-office-2.jpg", // Examination room with blue chair  
    "./images/dental-office-3.jpg"  // Waiting room
  ];

  // Gallery images for the practice section
  const galleryImages = [
    "./images/entrance.jpg",
    "./images/entrance2.jpg", 
    "./images/group_photo.jpg",
    "./images/receptionist.jpg",
    "./images/waiting-room.jpg"
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((previousIndex) => {
        const nextIndex = (previousIndex + 1) % backgroundImages.length;
        setPrevImageIndex(previousIndex);
        setActiveLayer((layer) => (layer === 1 ? 2 : 1));
        return nextIndex;
      });
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
  
  const serviceCategories = [
    {
      title: "General & Preventive Care",
      services: [
        "Routine dental examination & check-ups",
        "Scale and polish (general cleaning)",
        "Deep cleaning",
        "Emergency treatment & pain relief"
      ]
    },
    {
      title: "Restorative Dentistry",
      services: [
        "Dental fillings",
        "Crowns and bridges",
        "Root canal treatment",
        "Tooth extractions",
        "Full and partial dentures",
        "Denture repairs, relines and addition of teeth"
      ]
    },
    {
      title: "Advanced & Implants",
      services: [
        "Implant supported crowns, bridges and dentures"
      ]
    },
    {
      title: "Cosmetic Dentistry",
      services: [
        "Teeth whitening (in chair and at home)"
      ]
    },
    {
      title: "Protective Care",
      services: [
        "Night guards for grinding",
        "Custom made sport mouth guards"
      ]
    },
    {
      title: "Paediatric Dentistry",
      services: [
        "Paediatric dentistry - We love seeing children!",
        "Paediatric cleaning (polishing)",
        "Topical fluoride treatment",
        "Dental sealants"
      ]
    },
    {
      title: "Specialized Treatment",
      services: [
        "Treatment under general anaesthesia",
        "Treatment under in-chair sedation"
      ]
    }
  ];

  const doctors = [
    {
      name: "Dr. Flip Coetzee",
      specialty: "General Dentistry",
      education: "B.Ch.D. (Stell.), N.D.T. (Stell)",
      image: "./images/coetsee.jpg"
    },
    {
      name: "Dr. Jacques Du Plessis",
      specialty: "General Dentistry",
      education: "B.Ch.D. (PRET), DIP. ODONT (PRET)",
      image: "./images/dp.jpg"
    },
    {
      name: "Dr Louise Niddrie",
      specialty: "General Dentistry",
      education: "B.Ch.D. (UWC), PGDip (UWC)",
      image: "./images/niddrie.jpg"
    },
    {
      name: "Gloudine",
      specialty: "Oral Hygienist",
      education: "B.OH (Stell.)",
      image: "./images/gloudine.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Slideshow (crossfade) */}
        <div className="absolute inset-0 opacity-40">
          {/* Layer 1 */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${activeLayer === 1 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${backgroundImages[activeLayer === 1 ? currentImageIndex : prevImageIndex]})`,
              backgroundColor: 'hsl(var(--muted))'
            }}
          />
          {/* Layer 2 */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${activeLayer === 2 ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${backgroundImages[activeLayer === 2 ? currentImageIndex : prevImageIndex]})`,
              backgroundColor: 'hsl(var(--muted))'
            }}
          />
        </div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Drs Coetzee, Du Plessis & Niddrie
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground">
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
          
          <div className="space-y-8">
            {serviceCategories.slice(0, showAllServices ? serviceCategories.length : 4).map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-col items-center space-y-4 sm:space-y-5 max-w-2xl mx-auto">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-4 sm:space-x-5 w-full justify-center">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                      <span className="text-base sm:text-lg text-foreground text-center">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {serviceCategories.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllServices(!showAllServices)}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  {showAllServices ? (
                    <>
                      Show Less Categories
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More Categories
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Practice
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <Carousel 
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              skipSnaps: false,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-3/4 lg:basis-2/3">
                  <div className="relative">
                    <div className="aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={image} 
                        alt={`Practice photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex bg-background/90 hover:bg-background border-2 border-border shadow-lg z-10 left-2 sm:-left-12" />
            <CarouselNext className="flex bg-background/90 hover:bg-background border-2 border-border shadow-lg z-10 right-2 sm:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Practicioners
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              skipSnaps: false,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {doctors.map((doctor, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-8 sm:p-8 text-center h-full flex flex-col">
                      <div className="mb-8 sm:mb-8">
                        <div className="w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden border-4 border-muted">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {doctor.name}
                      </h3>
                      <div className="space-y-4 sm:space-y-4 flex-grow">
                        <div className="flex items-center justify-center space-x-3">
                          <Stethoscope className="h-5 w-5 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                          <span className="text-accent font-semibold text-base sm:text-base md:text-lg">
                            {doctor.specialty}
                          </span>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                          <GraduationCap className="h-5 w-5 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">
                            {doctor.education}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="flex bg-background/90 hover:bg-background border-2 border-border shadow-lg z-10 left-2 sm:-left-12" />
            <CarouselNext className="flex bg-background/90 hover:bg-background border-2 border-border shadow-lg z-10 right-2 sm:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Services & Information Section */}
      <section id="services-info" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Information
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Dental Laboratory */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Dental Laboratory
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                We are lucky to have Garden Route Dental Lab on our premises. In collaboration with the
                technician, we can ensure the best possible outcome when it comes to your prosthetic work.
              </p>
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
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg h-64 sm:h-96 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=57%20Albert%20Street%2C%20George%2C%20South%20Africa&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Practice Location - 22 Nelson Mandela Boulevard, George"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary-foreground/80">
            © 2025 Drs Coetzee, Du Plessis & Niddrie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;