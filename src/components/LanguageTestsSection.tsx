"use client";

import { Box, Container, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import { FaGraduationCap, FaGlobeAmericas, FaBook, FaHeadphones, FaMicrophone, FaPen } from "react-icons/fa";

const languageTests = [
  {
    title: "IELTS",
    fullName: "International English Language Testing System",
    description: "The world's most popular English language proficiency test for higher education and global migration.",
    features: ["Academic & General", "Reading, Writing, Listening, Speaking", "Accepted by 11,000+ organizations"],
    color: "#e31837" // IELTS Red
  },
  {
    title: "PTE Academic",
    fullName: "Pearson Test of English",
    description: "A computer-based English language test for international students and visa applicants.",
    features: ["Fast results (typically within 48 hours)", "AI-based scoring", "Accepted by UK, Australia, and New Zealand"],
    color: "#f58220" // PTE Orange
  },
  {
    title: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    description: "The premier English-language test for university study, work, and immigration.",
    features: ["100% Academic English", "Preferred by 9/10 US universities", "Convenient testing centers"],
    color: "#006db0" // TOEFL Blue
  },
  {
    title: "Duolingo English Test",
    fullName: "DET",
    description: "A modern English proficiency assessment for today's international students and institutions.",
    features: ["Online, on-demand", "Results in 2 days", "Accepted by 4,000+ programs"],
    color: "#58cc02" // Duolingo Green
  }
];

export default function LanguageTestsSection() {
  const deepBlue = '#00008b';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 12, bgcolor: '#fbfcfe' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '36px', md: '52px' },
            fontFamily: 'var(--font-heading)',
            color: deepBlue,
            mb: 2
          }}>
            Excel in Your <span style={{ color: greenColor }}>Language Proficiency</span> Tests
          </Typography>
          <Typography variant="body1" sx={{
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '18px',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)'
          }}>
            Whether you're aiming for undergraduate or postgraduate studies, we provide the expert coaching and resources you need to achieve your target scores in standardized English tests.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {languageTests.map((test, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #eef2f6',
                background: '#fff',
                transition: 'all 0.4s ease-in-out',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,139,0.08)',
                  borderColor: greenColor,
                }
              }}>
                {/* Decorative Background Icon */}
                <Box sx={{
                  position: 'absolute',
                  right: -20,
                  top: -20,
                  opacity: 0.03,
                  transform: 'rotate(-15deg)',
                  fontSize: '180px',
                  color: deepBlue,
                  pointerEvents: 'none'
                }}>
                  <FaGraduationCap />
                </Box>

                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    bgcolor: test.color + '15',
                    color: test.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px'
                  }}>
                    {test.title === 'IELTS' ? <Box sx={{ fontWeight: 900 }}>IE</Box> : 
                     test.title === 'TOEFL iBT' ? <Box sx={{ fontWeight: 900 }}>TO</Box> :
                     test.title === 'PTE Academic' ? <Box sx={{ fontWeight: 900 }}>PT</Box> :
                     <Box sx={{ fontWeight: 900 }}>DU</Box>}
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 800, 
                      fontSize: '32px', 
                      fontFamily: 'var(--font-heading)',
                      color: deepBlue
                    }}>
                      {test.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: test.color, fontWeight: 600, fontSize: '14px' }}>
                      {test.fullName}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ 
                  color: '#555', 
                  mb: 4, 
                  fontSize: '16px', 
                  lineHeight: 1.7, 
                  flexGrow: 1,
                  fontFamily: 'var(--font-sans)'
                }}>
                  {test.description}
                </Typography>

                <Stack spacing={2} sx={{ mb: 4 }}>
                  {test.features.map((feature, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{ color: greenColor, display: 'flex' }}>
                        <FaBook size={16} />
                      </Box>
                      <Typography variant="body2" sx={{ color: '#444', fontWeight: 500, fontFamily: 'var(--font-sans)' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button variant="contained" sx={{
                  bgcolor: deepBlue,
                  color: '#fff',
                  textTransform: 'none',
                  py: 1.5,
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '16px',
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: greenColor,
                    boxShadow: '0 10px 20px rgba(6, 193, 6, 0.2)'
                  }
                }}>
                  View Preparation Details
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Coaching Features */}
        <Box sx={{ mt: 15 }}>
          <Grid container spacing={4} justifyContent="center">
            {[
              { icon: <FaHeadphones />, title: "Listening Mastery", desc: "Expert tips for all audio sections." },
              { icon: <FaMicrophone />, title: "Speaking Confidence", desc: "One-on-one mock interview sessions." },
              { icon: <FaBook />, title: "Reading Techniques", desc: "Learn to scan and find answers fast." },
              { icon: <FaPen />, title: "Writing Excellence", desc: "Master essay structures and vocabulary." }
            ].map((feature, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{
                    width: '80px',
                    height: '80px',
                    mx: 'auto',
                    mb: 3,
                    bgcolor: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    color: greenColor,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid #f0f4f8'
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontFamily: 'var(--font-heading)', color: deepBlue }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontFamily: 'var(--font-sans)' }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{
          mt: 15,
          p: { xs: 6, md: 10 },
          borderRadius: '40px',
          bgcolor: deepBlue,
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 10% 20%, #06C106 0%, transparent 40%), radial-gradient(circle at 90% 80%, #06C106 0%, transparent 40%)',
            pointerEvents: 'none'
          }} />
          
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            mb: 3, 
            fontFamily: 'var(--font-heading)',
            fontSize: { xs: '28px', md: '42px' }
          }}>
            Ready to Ace Your Test?
          </Typography>
          <Typography variant="body1" sx={{ 
            mb: 5, 
            opacity: 0.9, 
            maxWidth: '700px', 
            mx: 'auto',
            fontSize: '18px',
            fontFamily: 'var(--font-sans)'
          }}>
            Join World Citizen Consulting today and get the guidance you need from certified professionals. Our students consistently score 7.5+ in IELTS!
          </Typography>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            px: 6,
            py: 2,
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 800,
            fontSize: '18px',
            '&:hover': { bgcolor: '#05a805' }
          }}>
            Enroll for Free Demo Class
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
