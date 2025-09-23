import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;