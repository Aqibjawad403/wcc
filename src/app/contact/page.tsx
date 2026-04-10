import PageBanner from "@/components/PageBanner";
import FindUsNow from "@/components/FindUsNow";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Contact Us | World Citizen Consultants",
  description: "Get in touch with World Citizen Consultants for global education opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact Us" />
      <FindUsNow />
      <ContactForm />
      <CTASection />
    </main>
  );
}
