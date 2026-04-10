import PageBanner from "@/components/PageBanner";
import ServicesSection from "@/components/ServicesSection";
import ProcedureSection from "@/components/ProcedureSection";
import CTASection from "@/components/CTASection";

export default function Services() {
  return (
    <main>
      <PageBanner title="Our Services" />
      
      <div id="services">
        <ServicesSection />
      </div>

      <ProcedureSection />

      <CTASection />
    </main>
  );
}
