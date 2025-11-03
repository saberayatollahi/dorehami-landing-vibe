import { Coffee, UtensilsCrossed, Cookie, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const MenuPreview = () => {
  const categories = [{
    title: "نوشیدنی‌ها",
    icon: Coffee,
    description: "قهوه‌های تخصصی، چای‌های معطر، نوشیدنی‌های سرد",
    color: "text-primary"
  }, {
    title: "پیش‌غذا",
    icon: Leaf,
    description: "سالادهای تازه، کشک بادمجان، میرزا قاسمی",
    color: "text-secondary"
  }, {
    title: "غذای اصلی",
    icon: UtensilsCrossed,
    description: "کباب‌های سنتی، خورش‌های خانگی، برنج‌های معطر",
    color: "text-accent-foreground"
  }, {
    title: "دسر",
    icon: Cookie,
    description: "شیرینی‌های سنتی، بستنی، کیک‌های خانگی",
    color: "text-primary"
  }];
  const handleMenuClick = () => {
    window.open('https://meno.lamiaco.ir/', '_blank');
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 rtl fade-in">
            منوی ما
          </h2>
          <p className="text-lg text-muted-foreground mb-12 rtl fade-in-delayed">
            طعم‌های متنوع و خوشمزه در انتظار شماست
          </p>
          
          {/* Menu Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => {
            const IconComponent = category.icon;
            return <Card key={category.title} className="card-warm fade-in group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`${category.color} mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-foreground mb-2 rtl text-xl font-bold">
                      {category.title}
                    </h3>
                    <p className="text-sm rtl leading-relaxed text-neutral-500">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          {/* CTA to Full Menu */}
          <Button onClick={handleMenuClick} size="lg" className="btn-cta text-lg px-8 py-4 rtl fade-in-delayed">
            مشاهده منوی کامل
          </Button>
        </div>
      </div>
    </section>;
};
export default MenuPreview;