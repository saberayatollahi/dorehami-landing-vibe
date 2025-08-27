import interiorImage from "@/assets/interior-garden.jpg";

const About = () => {
  return (
    <section className="section-warm py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="rtl order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 fade-in">
                درباره ما
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground fade-in-delayed">
                <p>
                  کافه رستوران دورهمی مکانی است که در آن طبیعت و گرمای خانه در هم آمیخته‌اند. 
                  فضایی باغ‌مانند با درختان سبز و گل‌های رنگارنگ، جایی ایده‌آل برای 
                  دورهمی‌های دوستانه و لحظه‌های آرام.
                </p>
                <p>
                  ما با ارائه غذاهای تازه و نوشیدنی‌های خوش‌طعم، تلاش می‌کنیم تا 
                  بهترین تجربه را برای مهمانان عزیزمان فراهم کنیم. از صبحانه‌های 
                  سنتی گرفته تا شام‌های خاص، همه چیز با عشق و دقت تهیه می‌شود.
                </p>
                <p className="font-medium text-primary">
                  "جایی که طعم‌ها با خاطرات شیرین پیوند می‌خورند"
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2 fade-in-delayed">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={interiorImage} 
                  alt="فضای داخلی و باغ کافه دورهمی"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;