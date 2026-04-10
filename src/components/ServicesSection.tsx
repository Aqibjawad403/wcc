"use client";

import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material";
import Image from "next/image";

const services = [
  {
    title: "University Admission",
    desc: "Get help choosing the right UK university. We guide you through the full application process.",
    image: "/images/service1.jpg"
  },
  {
    title: "Visa Application Support",
    desc: "We prepare and review all visa documents. Increase your chances of quick approval.",
    image: "/images/service2.jpg"
  },
  {
    title: "SOP & Documents",
    desc: "Craft strong Statements of Purpose (SOPs). We ensure all your paperwork is perfect.",
    image: "/images/service3.jpg"
  },
  {
    title: "Scholarship Guidance",
    desc: "Find and apply for scholarships with ease. We help reduce your study costs.",
    image: "/images/service4.jpg"
  },
  {
    title: "IELTS & Interview Prep",
    desc: "Boost your confidence with expert coaching. Prepare for language tests and visa interviews.",
    image: "/images/service5.jpg"
  },
  {
    title: "Pre-Departure Support",
    desc: "Get ready for life in the UK. We assist with travel, housing, and settling in.",
    image: "/images/service6.jpg"
  },
  {
    title: "Course & Career Advice",
    desc: "Choose the right program for your future. We align your course with long-term goals.",
    image: "/images/service7.jpg"
  },
  {
    title: "Document Checklist",
    desc: "Never miss an important paper again. We verify every document before submission.",
    image: "/images/service8.jpg"
  }
];

export default function ServicesSection() {
  const deepBlue = '#03038C';
  const hoverOverlay = '#03038C99';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 8, bgcolor: '#f8faff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: '48px',
            fontFamily: 'var(--font-heading)',
            display: 'inline-block',
            position: 'relative',
            mb: 2
          }}>
            Our <span style={{ position: 'relative' }}>
              Services
              <Box component="span" sx={{
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '100%',
                height: '4px',
                bgcolor: greenColor,
                borderRadius: '10px'
              }} />
            </span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', fontFamily: 'var(--font-sans)', opacity: 0.8 }}>
            Expert support for every step of your study abroad journey.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((s, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper elevation={0} sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  '& .image-overlay': { opacity: 1 }
                }
              }}>
                {/* Image Section with Hover Overlay */}
                <Box sx={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box className="image-overlay" sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: hoverOverlay,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} />
                </Box>

                {/* Content Section */}
                <Box sx={{
                  bgcolor: deepBlue,
                  color: '#fff',
                  p: 3,
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px', fontFamily: 'var(--font-heading)' }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', opacity: 0.8, fontSize: '14px', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }}>
                    {s.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            px: 6,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px',
            '&:hover': { bgcolor: '#05a805' }
          }}>
            Talk With Our Experts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
