import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Award, Heart } from "lucide-react";
import signatureDish from "@/assets/signature-dish.jpg";
import barArea from "@/assets/bar-area.jpg";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Open Daily",
      description: "Serving exceptional cuisine from 11 AM to 11 PM"
    },
    {
      icon: Users,
      title: "Private Events", 
      description: "Perfect venue for celebrations and corporate gatherings"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in dining and service"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and finest ingredients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nestled in the prestigious Karen Plains, The Moss Karen represents the perfect fusion 
            of contemporary dining and traditional hospitality. Our passion for culinary excellence 
            drives every dish we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Culinary Excellence
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our chef-driven menu celebrates both international flavors and local ingredients, 
              creating memorable dining experiences that reflect the vibrant culture of Nairobi. 
              Each dish tells a story of craftsmanship and creativity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From our signature grilled selections to innovative vegetarian options, 
              every meal at The Moss Karen is designed to delight and inspire.
            </p>
          </div>
          <div className="relative">
            <img 
              src={signatureDish} 
              alt="Signature dish" 
              className="rounded-2xl shadow-elegant w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
              <p className="font-semibold">Signature Dish</p>
              <p className="text-sm opacity-90">Chef's Special</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <img 
              src={barArea} 
              alt="Bar area" 
              className="rounded-2xl shadow-elegant w-full h-80 object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg">
              <p className="font-semibold">Premium Bar</p>
              <p className="text-sm opacity-90">Craft Cocktails</p>
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-foreground">
              Exceptional Bar Experience
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our sophisticated bar offers an extensive selection of premium spirits, 
              craft cocktails, and fine wines. Whether you're joining us for an aperitif 
              or ending the evening with a nightcap, our skilled bartenders craft each 
              drink with precision and flair.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The warm, inviting atmosphere makes our bar the perfect spot for 
              business meetings, romantic evenings, or catching up with friends.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;