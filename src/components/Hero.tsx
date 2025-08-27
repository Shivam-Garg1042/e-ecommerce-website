import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Flash Weekend",
      subtitle: "Sale",
      offer: "BUY 1 GET 30% OFF | BUY 2 GET 40% OFF | BUY 3 GET 50% OFF",
      cta: "SHOP NOW"
    },
    {
      id: 2,
      image: hero2,
      title: "Elegant",
      subtitle: "Collection",
      offer: "DISCOVER OUR PREMIUM ETHNIC WEAR COLLECTION",
      cta: "EXPLORE NOW"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "translate-x-0" : 
              index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className="relative h-full w-full">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl ml-auto mr-8 md:mr-16 text-right">
                    <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-elegant border-0">
                      <div className="space-y-6">
                        <div>
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-none">
                            {slide.title}{" "}
                            <span className="text-primary italic">{slide.subtitle}</span>
                          </h1>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row gap-4 text-lg md:text-xl font-medium">
                            {slide.offer.includes("|") ? (
                              slide.offer.split("|").map((part, i) => (
                                <div key={i} className="flex flex-col items-center">
                                  <span className="text-foreground">{part.trim()}</span>
                                </div>
                              ))
                            ) : (
                              <span className="text-muted-foreground">{slide.offer}</span>
                            )}
                          </div>
                        </div>

                        <Button 
                          size="lg" 
                          className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-elegant transition-all hover:scale-105"
                        >
                          {slide.cta}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-3 shadow-soft"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground rounded-full p-3 shadow-soft"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary scale-125" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;