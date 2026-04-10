import PageBanner from "@/components/PageBanner";
import AboutPartnerSection from "@/components/AboutPartnerSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import CEOMessageSection from "@/components/CEOMessageSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";

export default function About() {
  return (
    <main>
      <PageBanner title="About Us" />

      <AboutPartnerSection />

      <MissionVisionSection />

      <CEOMessageSection />

      <WhyChooseUs />

      <Testimonials />

      <TeamSection />

    </main>
  );
}
