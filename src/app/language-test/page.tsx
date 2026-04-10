import PageBanner from "@/components/PageBanner";
import LanguageInfoSection from "@/components/LanguageInfoSection";
import LanguageTabsSection from "@/components/LanguageTabsSection";
import TestComparisonTable from "@/components/TestComparisonTable";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";


export default function LanguageTestPage() {
  return (
    <main>
      <PageBanner title="Language Test" />
      
      {/* Section 1: Choose the Perfect Test */}
      <LanguageInfoSection 
        title="Choose the Perfect Test for"
        highlightText="Studying Abroad"
        description1="Your English proficiency is the first step toward achieving your dream of studying abroad. Whether it's IELTS, PTE, TOEFL, or Duolingo, understanding the right test for your destination country can make all the difference in your admission success."
        description2="At World Citizen Consultants, we help students understand test requirements, compare options, and prepare strategically ensuring you meet your university's language criteria with confidence."
        image="/images/service1.jpg"
      />

      {/* Section 2: Why Language Tests Are Important */}
      <LanguageInfoSection 
        title="Why Language Tests Are"
        highlightText="Important"
        description1="Achieving a high score in language proficiency tests is crucial for securing admission to top international universities. It not only fulfills the primary requirement for a student visa but also ensures you are well-prepared for the academic challenges of studying in an English-speaking environment."
        description2="Almost every international university requires proof of English proficiency. These tests assess your reading, writing, listening, and speaking skills, ensuring that you can confidently study, communicate, and live abroad."
        image="/images/testimonial2.jpg"
        reverse={true}
        bgColor="#f8faff"
      />

      {/* Section 3: Types of Language Tests Tabs */}
      <LanguageTabsSection />

      {/* Section 4: How to Choose the Right Test Table */}
      <TestComparisonTable />

      {/* Section 5: Frequently Asked Questions */}
      <FAQSection />

      {/* Section 6: Admission CTA Banner */}
      <CTASection />


    </main>
  );
}
