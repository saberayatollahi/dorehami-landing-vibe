import interiorImage from "@/assets/interior-garden.jpg";
const About = () => {
  return <section className="section-warm py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="rtl order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 fade-in">
                درباره ما
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground fade-in-delayed">
                <p>در دل طبیعت بکر ده بالا، جایی میان آرامش کوه و هوای دلنشین با فضایی گرم و صمیمی میزبان لحظه‌های خوش شماست. ما ترکیبی از طعم‌های اصیل، دکور دل‌نشین  را گرد هم آورده‌ایم تا هر حضور شما، تجربه‌ای خوش و ماندگار باشد.</p>
                <p>اینجا فقط یه کافه رستوران نیست، یه پاتوق صمیمیه برای دورهمی‌های دوستانه و صمیمی، یا حتی یه عصر خلوت با یه فنجون قهوه‌ی خوش‌عطر.


              </p>
                
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2 fade-in-delayed">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={interiorImage} alt="فضای داخلی و باغ کافه دورهمی" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;