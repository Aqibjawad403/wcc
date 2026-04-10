import BannerHero from "@/components/BannerHero";
import ServicesSection from "@/components/ServicesSection";
import AboutPartnerSection from "@/components/AboutPartnerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ApplyBanner from "@/components/ApplyBanner";
import UniversitySection from "@/components/UniversitySection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ProcedureSection from "@/components/ProcedureSection";
import TopDestinations from "@/components/TopDestinations";
import NewsAndBlogs from "@/components/NewsAndBlogs";
import SocialAction from "@/components/SocialAction";

export default function Home() {
  return (
    <main>
      <BannerHero />
      <UniversitySection />
      <ServicesSection />
      <ApplyBanner />
      <TopDestinations />
      <ProcedureSection />
      <WhyChooseUs />
      <AboutPartnerSection reverse={true} />
      <Testimonials />
      <ContactForm />
      <NewsAndBlogs />
      <SocialAction />
    </main>
  );
}
