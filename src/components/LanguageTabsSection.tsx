"use client";

import { Box, Container, Typography, Grid, Button, Paper, Stack } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const testsData = [
  {
    id: "IELTS",
    title: "IELTS (International English Language Testing System)",
    desc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna id, volutpat hendrerit ipsum.",
    desc2: "The IELTS is one of the world's most trusted English language tests, accepted by over 11,000 organizations worldwide. It measures your ability to communicate effectively in English through Listening, Reading, Writing, and Speaking.",
    whyTake: [
      "Widely accepted for study in the UK, Canada, Australia & Sweden.",
      "Offers two test types Academic and General Training.",
      "Available as both computer-based and paper-based tests."
    ],
    image: "/images/testimonial1.jpg"
  },
  {
    id: "PTE",
    title: "PTE Academic (Pearson Test of English)",
    desc1: "PTE Academic is a computer-based English language test for international students and visa applicants. It is fast, flexible, and provides fair results using AI-based scoring.",
    desc2: "The test is accepted by the UK, Australian, and New Zealand governments for all visa applications. It is also accepted by thousands of academic programs globally.",
    whyTake: [
      "Results typically available within 48 hours.",
      "Accepted for all UK, Australia, and NZ visa categories.",
      "AI-based scoring ensures objective and fast results."
    ],
    image: "/images/service2.jpg"
  },
  {
    id: "TOEFL",
    title: "TOEFL iBT (Test of English as a Foreign Language)",
    desc1: "The TOEFL iBT test measures your ability to use and understand English at the university level. It evaluates how well you combine your listening, reading, speaking, and writing skills.",
    desc2: "Preferred by 9 out of 10 universities in the United States and accepted by over 11,500 institutions in 160+ countries.",
    whyTake: [
      "100% Academic English focused.",
      "Prefered choice for US and Canadian universities.",
      "Convenient home edition and testing center options."
    ],
    image: "/images/service3.jpg"
  },
  {
    id: "LANGUAGECERT",
    title: "LanguageCert International ESOL",
    desc1: "LanguageCert International ESOL is a suite of English language qualifications mapped to the CEFR. It is designed for students who need to prove their proficiency for work or study.",
    desc2: "The exams are regulated by Ofqual and recognized globally by governments, universities, and employers.",
    whyTake: [
      "Flexible exam formats (Online with live proctoring or Paper-based).",
      "Fast results and e-certificates (within 3 business days).",
      "Lifetime validity of certificates."
    ],
    image: "/images/service4.jpg"
  },
  {
    id: "OXFORD ELLT",
    title: "Oxford ELLT (English Language Level Test)",
    desc1: "The Oxford International English Language Level Test (ELLT) is a fully online English language test designed to determine your language level for university admission.",
    desc2: "It is a four-step process—Reading, Listening, Writing, and Speaking—that can be taken from the comfort of your home.",
    whyTake: [
      "Fast-track your university application.",
      "Cost-effective alternative to other standardized tests.",
      "Recognized by a growing number of UK universities."
    ],
    image: "/images/service5.jpg"
  },
  {
    id: "DUOLINGO",
    title: "Duolingo English Test (DET)",
    desc1: "The Duolingo English Test is a modern language proficiency assessment for today's international students and institutions.",
    desc2: "Available online, on-demand, at any time. No traveling to a test center or making an appointment is needed.",
    whyTake: [
      "Takes only 1 hour and costs significantly less than other tests.",
      "Accepted by over 4,000 universities worldwide.",
      "Send results to as many schools as you want for free."
    ],
    image: "/images/service6.jpg"
  },
  {
    id: "OET",
    title: "OET (Occupational English Test)",
    desc1: "OET is the English language test for healthcare professionals. It assesses the language communication skills of healthcare professionals who wish to register and practice in an English-speaking environment.",
    desc2: "Available for 12 healthcare professions including Nursing, Medicine, Dentistry, and Pharmacy.",
    whyTake: [
      "Test tasks use real healthcare scenarios.",
      "Recognized by regulatory healthcare boards and councils globally.",
      "Helps you feel confident and prepared for the workplace."
    ],
    image: "/images/service7.jpg"
  }
];

export default function LanguageTabsSection() {
  const [activeTab, setActiveTab] = useState(testsData[0]);
  const deepBlue = '#03038C';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 12, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '36px', md: '52px' },
            fontFamily: 'var(--font-heading)',
            color: '#1a1a1a',
            display: 'inline-block',
            position: 'relative'
          }}>
            Types of <span style={{ position: 'relative' }}>
              Language Tests
              <Box component="span" sx={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '100%',
                height: '4px',
                bgcolor: greenColor,
                borderRadius: '10px'
              }} />
            </span>
          </Typography>
        </Box>

        {/* Custom Tabs Navigation */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 0, 
          bgcolor: '#f1f1f1', 
          borderRadius: '8px',
          overflow: 'hidden',
          mb: 8,
          border: '1px solid #e0e0e0'
        }}>
          {testsData.map((test) => (
            <Box
              key={test.id}
              onClick={() => setActiveTab(test)}
              sx={{
                flex: { xs: '1 1 50%', sm: '1 1 auto' },
                textAlign: 'center',
                py: 2,
                px: { xs: 2, md: 4 },
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                bgcolor: activeTab.id === test.id ? '#000080' : 'transparent',
                color: activeTab.id === test.id ? '#fff' : '#444',
                borderRight: '1px solid #e0e0e0',
                '&:last-child': { borderRight: 'none' },
                '&:hover': {
                  bgcolor: activeTab.id === test.id ? '#000080' : '#e8e8e8'
                }
              }}
            >
              {test.id}
            </Box>
          ))}
        </Box>

        {/* Tab Content */}
        <Grid container spacing={8} alignItems="center">
          {/* Content Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 800, 
                fontSize: { xs: '28px', md: '36px' }, 
                mb: 3,
                fontFamily: 'var(--font-heading)',
                color: '#1a1a1a'
              }}>
                {activeTab.title}
              </Typography>

              <Typography variant="body1" sx={{ color: '#555', mb: 2, lineHeight: 1.6, fontSize: '16px' }}>
                {activeTab.desc1}
              </Typography>

              <Typography variant="body1" sx={{ color: '#555', mb: 4, lineHeight: 1.6, fontSize: '16px' }}>
                {activeTab.desc2}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#1a1a1a', fontSize: '18px' }}>
                Why Take {activeTab.id === 'IELTS' ? 'IELTS' : 
                          activeTab.id === 'PTE' ? 'PTE' : 
                          activeTab.id === 'TOEFL' ? 'TOEFL' : 
                          activeTab.id}:
              </Typography>

              <Stack spacing={1.5} sx={{ mb: 5 }}>
                {activeTab.whyTake.map((point, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Box sx={{ 
                      width: '20px', 
                      height: '20px', 
                      bgcolor: '#e6ffeb', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mt: 0.3,
                      flexShrink: 0
                    }}>
                      <FaChevronRight style={{ color: greenColor, fontSize: '10px' }} />
                    </Box>
                    <Typography sx={{ color: '#555', fontSize: '15px' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Button variant="contained" sx={{
                bgcolor: greenColor,
                color: '#fff',
                px: 5,
                py: 1.8,
                borderRadius: '6px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': { bgcolor: '#05a805' }
              }}>
                Ask About This Test
              </Button>
            </Box>
          </Grid>

          {/* Image Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              position: 'relative', 
              padding: '10px',
              border: '2px solid #00a0ff',
              borderRadius: '24px',
              height: { xs: '350px', md: '500px' }
            }}>
              <Box sx={{ 
                position: 'relative', 
                height: '100%', 
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <Image 
                  src={activeTab.image}
                  alt={activeTab.id}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
