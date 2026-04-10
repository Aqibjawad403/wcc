import PageBanner from "@/components/PageBanner";
import CountriesGrid from "@/components/CountriesGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Top Countries to Study Abroad | World Citizen Consultants",
  description: "Explore the best countries for international education and find your perfect study destination with World Citizen Consultants.",
};

export default function TopCountriesPage() {
  return (
    <main>
      <PageBanner 
        title="Top Countries to Study Abroad" 
        backgroundImage="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600"
      />
      
      <CountriesGrid />

      <CTASection />
    </main>
  );
}
