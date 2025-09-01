import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-restaurant.jpg";
import signatureDish from "@/assets/signature-dish.jpg";
import barArea from "@/assets/bar-area.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryItems = [
    {
      type: "image",
      src: heroImage,
      title: "Elegant Dining Experience",
      description: "Immerse yourself in our sophisticated atmosphere"
    },
    {
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      title: "Chef's Kitchen Magic",
      description: "Watch our master chefs at work",
      poster: signatureDish
    },
    {
      type: "image",
      src: signatureDish,
      title: "Signature Dishes",
      description: "Artfully crafted culinary masterpieces"
    },
    {
      type: "image",
      src: barArea,
      title: "Premium Bar Experience",
      description: "Handcrafted cocktails and premium spirits"
    },
    {
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      title: "Behind the Scenes",
      description: "Experience the passion behind every dish",
      poster: barArea
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, galleryItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Experience The Moss Karen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Step into our world of culinary excellence and elegant ambiance
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Gallery Display */}
          <Card className="relative overflow-hidden shadow-elegant group">
            <div className="aspect-[16/9] relative">
              {galleryItems[currentSlide].type === "image" ? (
                <img
                  src={galleryItems[currentSlide].src}
                  alt={galleryItems[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <video
                  src={galleryItems[currentSlide].src}
                  poster={galleryItems[currentSlide].poster}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              
              {/* Overlay with content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 animate-fade-in">
                    {galleryItems[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white/90 animate-fade-in">
                    {galleryItems[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </Button>

          {/* Play/Pause Control */}
          <Button
            variant="outline"
            size="icon"
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125 shadow-glow"
                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-24 h-16 cursor-pointer transition-all duration-300 overflow-hidden ${
                index === currentSlide
                  ? "ring-2 ring-primary shadow-glow scale-110"
                  : "hover:scale-105 hover:shadow-elegant"
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={item.type === "image" ? item.src : item.poster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;