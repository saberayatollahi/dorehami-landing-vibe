import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "م. رضایی",
      text: "فضای فوق‌العاده دلنشین و غذاهای بی‌نظیر! هر بار که می‌آیم احساس آرامش می‌کنم. کیفیت غذا و سرویس عالی است.",
      rating: 5
    },
    {
      name: "ف. احمدی",
      text: "بهترین کافه منطقه! محیط باغ‌مانند و قهوه‌های تخصصی‌شان واقعاً فوق‌العاده است. برای قرار دوستانه عالی است.",
      rating: 5
    },
    {
      name: "ع. حسینی",
      text: "از کباب‌های سنتی تا دسرهای خانگی، همه چیز بی‌نظیر است. پرسنل محترم و فضای گرم. حتماً دوباره می‌آیم.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-accent fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 rtl fade-in">
              نظرات مشتریان
            </h2>
            <p className="text-lg text-muted-foreground rtl fade-in-delayed">
              تجربه‌های خوشایند مهمانان عزیز ما
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-warm fade-in-delayed relative">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="text-accent mb-4">
                    <Quote className="h-8 w-8" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 rtl leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Customer Name */}
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground rtl">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground rtl">
                      مشتری وفادار
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 fade-in-delayed">
            <p className="text-muted-foreground rtl mb-4">
              تجربه خود را با ما به اشتراک بگذارید
            </p>
            <a
              href="https://instagram.com/dorehami_bagheshah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-cta px-6 py-3 rtl"
            >
              ما را در اینستاگرام دنبال کنید
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;