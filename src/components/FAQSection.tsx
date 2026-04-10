"use client";

import { Box, Container, Typography, Grid, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const faqData = [
  {
    question: "Do I need an English test for every country?",
    answer: "Most English-speaking countries require it, but requirements vary by university and program."
  },
  {
    question: "Can I skip the English test?",
    answer: "In some cases, yes—if you have completed your previous education in English or meet specific university waivers."
  },
  {
    question: "Can I apply with Duolingo instead of IELTS?",
    answer: "Yes, many universities in the USA, UK, and Canada now accept the Duolingo English Test (DET) as an alternative to IELTS."
  },
  {
    question: "Can I get admission without a language test?",
    answer: "Some universities offer conditional admission or internal English tests, while others may waive the requirement based on your MOI (Medium of Instruction) certificate."
  },
  {
    question: "What is the minimum IELTS score needed for UK or Canada?",
    answer: "Generally, a minimum of 6.0 or 6.5 (with no band less than 5.5 or 6.0) is required for most undergraduate and postgraduate programs."
  }
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const greenColor = '#06C106';
  const deepBlue = '#000080';

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: 12, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Left Side: Heading and Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h2" sx={{
                fontWeight: 800,
                fontSize: { xs: '36px', md: '52px' },
                fontFamily: 'var(--font-heading)',
                color: '#1a1a1a',
                display: 'inline-block',
                position: 'relative',
                mb: 2
              }}>
                Frequently Asked <br />
                <span style={{ position: 'relative' }}>
                  Questions (FAQ's)
                  <Box component="span" sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    bgcolor: greenColor,
                    borderRadius: '10px'
                  }} />
                </span>
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', fontSize: '16px', lineHeight: 1.6, maxWidth: '450px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum.
              </Typography>
            </Box>

            <Box sx={{ 
              p: 4, 
              bgcolor: '#f8f9fa', 
              borderRadius: '20px', 
              border: '1px solid #eee',
              maxWidth: '400px'
            }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: '#1a1a1a', fontFamily: 'var(--font-heading)' }}>
                Still Have Questions?
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 4, fontSize: '14px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit.
              </Typography>
              <Button variant="contained" sx={{
                bgcolor: greenColor,
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': { bgcolor: '#05a805' }
              }}>
                Send Email
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Accordion */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  elevation={0}
                  sx={{
                    mb: 2,
                    border: expanded === `panel${index}` ? `1px solid ${deepBlue}` : '1px solid #eee',
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box sx={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        bgcolor: expanded === `panel${index}` ? deepBlue : '#f1f1f1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: expanded === `panel${index}` ? '#fff' : '#1a1a1a',
                        fontSize: '12px',
                        transition: 'all 0.3s ease'
                      }}>
                        {expanded === `panel${index}` ? <FaMinus /> : <FaPlus />}
                      </Box>
                    }
                    sx={{
                      px: 3,
                      py: 1,
                      '&.Mui-expanded': { minHeight: 'unset' },
                      '& .MuiAccordionSummary-content': { margin: '12px 0' }
                    }}
                  >
                    <Typography sx={{ 
                      fontWeight: 700, 
                      fontSize: '18px', 
                      color: expanded === `panel${index}` ? deepBlue : '#1a1a1a',
                      fontFamily: 'var(--font-sans)'
                    }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                    <Typography sx={{ color: '#666', fontSize: '15px', lineHeight: 1.6 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
