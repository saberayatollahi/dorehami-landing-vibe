import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dorehami-exterior.png";
const Hero = () => {
  const handleOrderClick = () => {
    window.open('https://meno.lamiaco.ir/', '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto bg-transparent">
          {/* Logo/Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 rtl fade-in text-shadow">
            کافه رستوران دورهمی
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 rtl fade-in-delayed leading-relaxed">
            جایی برای لذت بردن از طعم‌ها و لحظه‌های ناب
          </p>
          
          {/* CTA Button */}
          <Button onClick={handleOrderClick} size="lg" className="btn-cta text-lg px-10 py-6 rtl fade-in-delayed group">
            مشاهده منو / سفارش آنلاین
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;