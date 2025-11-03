import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "تماس با ما",
      content: "۰۹۱۰۹۱۰۸۸۷۸",
      action: "tel:+989109108878"
    },
    {
      icon: MessageCircle,
      title: "واتساپ",
      content: "پیام سریع در واتساپ",
      action: "https://wa.me/989109108878"
    },
    {
      icon: Instagram,
      title: "اینستاگرام",
      content: "@dorehami_bagheshah",
      action: "https://instagram.com/dorehami_bagheshah"
    },
    {
      icon: MapPin,
      title: "آدرس",
      content: "یزد، تفت، ده بالا، جاده کمربندی، کافه دورهمی",
      action: null
    }
  ];

  const workingHours = [
    { day: "هر روز", time: "۱۲:۰۰ - ۲۳:۰۰" }
  ];

  return (
    <section className="section-warm py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 rtl fade-in">
              تماس با ما
            </h2>
            <p className="text-lg text-muted-foreground rtl fade-in-delayed">
              ما همیشه در خدمت شما هستیم
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground rtl mb-6 fade-in">
                اطلاعات تماس
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="card-warm fade-in-delayed group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 space-x-reverse rtl">
                          <div className="text-primary transition-transform group-hover:scale-110">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-1">
                              {item.title}
                            </h4>
                            {item.action ? (
                              <a
                                href={item.action}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                {item.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Working Hours */}
              <Card className="card-warm fade-in-delayed">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4 rtl">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h4 className="font-medium text-foreground">
                      ساعات کاری
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between rtl">
                        <span className="text-muted-foreground">
                          {schedule.day}
                        </span>
                        <span className="font-medium text-foreground">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and CTA */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground rtl mb-6 fade-in">
                موقعیت مکانی
              </h3>
              
              {/* Map */}
              <Card className="card-warm fade-in-delayed">
                <CardContent className="p-6">
                  <div className="text-center rtl">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      مشاهده موقعیت در نقشه
                    </p>
                    <div className="space-y-3">
                      <Button
                        onClick={() => window.open('https://maps.app.goo.gl/Bn9NENniziqjXM4j7', '_blank')}
                        className="w-full"
                        variant="outline"
                      >
                        گوگل مپ
                      </Button>
                      <Button
                        onClick={() => window.open('https://nshn.ir/00_bXfQL_G2nrw', '_blank')}
                        className="w-full"
                        variant="outline"
                      >
                        نشان
                      </Button>
                      <Button
                        onClick={() => window.open('https://balad.ir/p/5HzTTsS6tDd6Q3', '_blank')}
                        className="w-full"
                        variant="outline"
                      >
                        بلد
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order CTA */}
              <Card className="card-warm fade-in-delayed bg-gradient-to-br from-accent/10 to-primary/10">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-foreground mb-3 rtl">
                    سفارش آنلاین
                  </h4>
                  <p className="text-muted-foreground mb-4 rtl">
                    غذای مورد علاقه‌تان را به راحتی سفارش دهید
                  </p>
                  <Button
                    onClick={() => window.open('https://meno.lamiaco.ir/', '_blank')}
                    className="btn-cta w-full rtl"
                  >
                    مشاهده منو و سفارش
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;