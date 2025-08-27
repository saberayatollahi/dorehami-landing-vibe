import { Instagram, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-right rtl">
              <h3 className="text-2xl font-bold mb-4">
                کافه رستوران دورهمی
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                جایی برای لذت بردن از طعم‌ها و لحظه‌های ناب در فضایی گرم و دوستانه
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center rtl">
              <h4 className="text-lg font-semibold mb-4">دسترسی سریع</h4>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rtl w-full"
                  onClick={() => window.open('https://meno.lamiaco.ir/', '_blank')}
                >
                  منوی آنلاین
                </Button>
                <Button
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rtl w-full"
                  onClick={() => window.open('https://instagram.com/dorehami_bagheshah', '_blank')}
                >
                  اینستاگرام
                </Button>
                <Button
                  variant="ghost"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rtl w-full"
                  onClick={() => window.open('https://wa.me/989123456789', '_blank')}
                >
                  واتساپ
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-4 rtl">ما را دنبال کنید</h4>
              <div className="flex justify-center md:justify-start space-x-4 space-x-reverse mb-4">
                <a
                  href="https://instagram.com/dorehami_bagheshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/989123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="tel:+982112345678"
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
              
              {/* Final CTA */}
              <Button
                onClick={() => window.open('https://meno.lamiaco.ir/', '_blank')}
                variant="secondary"
                className="rtl w-full md:w-auto"
              >
                سفارش آنلاین
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm rtl mb-4 md:mb-0">
              © ۱۴۰۳ کافه رستوران دورهمی. تمامی حقوق محفوظ است.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              طراحی با ❤️ برای دورهمی‌های شیرین
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-6 right-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg z-50"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
};

export default Footer;