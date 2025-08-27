import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import foodSpread from "@/assets/food-spread.jpg";
import heroImage from "@/assets/hero-cafe.jpg";
import interiorImage from "@/assets/interior-garden.jpg";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate some variations of our images for the gallery
  const galleryImages = [
    { src: foodSpread, alt: "غذاهای خوشمزه کافه دورهمی" },
    { src: interiorImage, alt: "فضای داخلی کافه" },
    { src: heroImage, alt: "محیط باغ‌مانند کافه" },
    { src: foodSpread, alt: "منوی متنوع رستوران" },
    { src: interiorImage, alt: "فضای دنج و آرام" },
    { src: heroImage, alt: "نمای کلی کافه رستوران" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-warm py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 rtl fade-in">
              گالری تصاویر
            </h2>
            <p className="text-lg text-muted-foreground rtl fade-in-delayed">
              نگاهی به فضای دلنشین و غذاهای خوشمزه ما
            </p>
          </div>

          {/* Gallery Container */}
          <div className="relative fade-in-delayed">
            {/* Navigation Buttons */}
            <Button
              onClick={() => scroll('left')}
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={() => scroll('right')}
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Scrollable Gallery */}
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Scroll Hint */}
            <p className="text-center text-sm text-muted-foreground mt-4 rtl">
              برای دیدن تصاویر بیشتر به چپ یا راست بکشید
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;