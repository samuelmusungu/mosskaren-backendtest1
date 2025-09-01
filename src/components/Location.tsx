import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { useState } from "react";

const Location = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showMap, setShowMap] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Karen Plains Road", "Karen, Nairobi", "Kenya"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 730 987 654"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sun: 11:00 AM - 11:00 PM", "Kitchen closes at 10:30 PM"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@themosskarren.com", "reservations@themosskarren.com"]
    }
  ];

  const handleShowDirections = () => {
    const coordinates = "-1.3671,36.7523"; // Karen Plains approximate coordinates
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates}&destination_place_id=ChIJwdJgYnGRLxgRhwqDhwqDhw`;
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Karen Plains, we're easily accessible and offer 
            convenient parking for all our guests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button 
              onClick={handleShowDirections}
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Find Us Here
            </h3>
            
            {!showMap ? (
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Interactive Map
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    To display an interactive map, please enter your Mapbox public token below. 
                    You can get one free at mapbox.com
                  </p>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Enter your Mapbox public token"
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="w-full"
                    />
                    <Button 
                      onClick={() => setShowMap(true)}
                      disabled={!mapboxToken.trim()}
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Show Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-96 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive map would appear here with Mapbox integration
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Karen Plains Road, Karen, Nairobi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Location Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Free Parking</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">♿</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Accessible</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;