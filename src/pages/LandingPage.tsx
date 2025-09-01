import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;