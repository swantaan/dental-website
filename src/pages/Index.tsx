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
    "General Dentistry & Oral Health Checkups",
    "Teeth Cleaning & Preventive Care",
    "Dental Crowns & Bridges",
    "Root Canal Treatment",
    "Tooth Extractions",
    "Dental Implants",
    "Cosmetic Dentistry & Whitening",
    "Orthodontics & Braces",
    "Periodontal (Gum) Treatment",
    "Emergency Dental Care"
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Dentistry",
      experience: "15+ years",
      education: "DDS, University of Michigan",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Oral Surgery",
      experience: "12+ years",
      education: "DMD, Harvard School of Dental Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Orthodontics",
      experience: "10+ years",
      education: "DDS, UCLA School of Dentistry",
      image: "https://images.unsplash.com/photo-1594824731317-84ea40e86dd3?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Dr. David Thompson",
      specialty: "Cosmetic Dentistry",
      experience: "18+ years",
      education: "DDS, NYU College of Dentistry",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Excellence in 
            <span className="block text-accent">Dental Care</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Providing comprehensive dental services with advanced technology and compassionate care for your entire family.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            Schedule Appointment
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Dental Laboratory
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              Our state-of-the-art dental laboratory is equipped with the latest technology and staffed by skilled technicians 
              who work closely with our dentists to create custom dental restorations. From crowns and bridges to dentures 
              and implant-supported prosthetics, we maintain the highest standards of precision and aesthetics.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              By having our laboratory on-site, we can ensure faster turnaround times, better quality control, and more 
              affordable pricing for our patients. Our lab technicians use only the finest materials and employ advanced 
              CAD/CAM technology to create restorations that are both beautiful and durable.
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent">
              <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-base sm:text-lg font-semibold">
                Certified Laboratory Excellence
              </span>
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
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted p-3 rounded-full">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">info@dentalcare.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-muted p-3 rounded-full">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        123 Main Street<br />
                        Downtown, City 12345
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