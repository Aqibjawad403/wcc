"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "Get the Best Study Abroad Free Consultation for Pakistani students with expert advice on course selection, visa clarity and personalised guidance for confident decisions.",
    image: "/procedure/img 1.svg",
    color: "#06C106",
    side: "left"
  },
  {
    number: "02",
    title: "University & Course",
    desc: "Explore Top Universities for Pakistani Students with course options, admission guidance, eligibility clarity and trusted support for successful study abroad planning.",
    image: "/procedure/img 2.svg",
    color: "#03038C",
    side: "right"
  },
  {
    number: "03",
    title: "Visa & Documentation",
    desc: "As a Trusted Student Visa Consultant in Bahria Town Lahore, we manage visa documentation accurately, ensuring compliance, clarity and higher approval confidence.",
    image: "/procedure/img 3.svg",
    color: "#06C106",
    side: "left"
  },
  {
    number: "04",
    title: "Prepare & Depart",
    desc: "With the Best Trusted Student Visa Consultant in Lahore, we prepare students for departure through guidance, planning checklists and confidence.",
    image: "/procedure/img 4.svg",
    color: "#03038C",
    side: "right"
  }
];

export default function ProcedureSection() {
  const greenColor = '#06C106';
  const deepBlue = '#03038C';

  return (
    <Box sx={{ py: 12, bgcolor: '#fff', position: 'relative' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '36px', md: '48px' },
            fontFamily: 'var(--font-heading)',
            display: 'inline-block',
            position: 'relative',
            mb: 2
          }}>
            Our <span style={{ position: 'relative' }}>
              Procedure
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
          <Typography variant="body1" sx={{ color: '#666', fontFamily: 'var(--font-sans)', maxWidth: '700px', mx: 'auto', opacity: 0.8 }}>
            Our procedure as the Best student visa consultant in Bahria Town Lahore ensures clear steps,
            honest guidance, smooth documentation and successful student visa outcomes.
          </Typography>
        </Box>

        {/* Timeline Container */}
        <Box sx={{ position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
          {/* Central Line */}
          <Box sx={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            bgcolor: deepBlue,
            display: { xs: 'none', md: 'block' },
            transform: 'translateX(-50%)'
          }}>
            {/* Top Dot */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '24px',
              height: '24px',
              bgcolor: deepBlue,
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(3, 3, 140, 0.4)'
            }} />
            {/* Bottom Dot */}
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%, 50%)',
              width: '24px',
              height: '24px',
              bgcolor: deepBlue,
              borderRadius: '50%',
              boxShadow: '0 0 15px rgba(3, 3, 140, 0.4)'
            }} />
          </Box>

          {/* Steps */}
          <Box sx={{ position: 'relative' }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Box key={index} sx={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  mb: 8,
                  position: 'relative'
                }}>
                  {/* Card */}
                  <Box sx={{
                    width: { xs: '100%', md: 'calc(50% - 100px)' },
                    bgcolor: step.color,
                    borderRadius: '24px',
                    p: 4,
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    minHeight: '240px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 25px 50px rgba(0,0,0,0.2)`
                    }
                  }}>
                    {/* Background Number */}
                    <Typography sx={{
                      position: 'absolute',
                      top: -10,
                      [isLeft ? 'left' : 'right']: 10,
                      fontSize: '120px',
                      fontWeight: 900,
                      color: 'rgba(0,0,0,0.15)',
                      lineHeight: 1,
                      zIndex: 0,
                      fontStyle: 'italic',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {step.number}
                    </Typography>

                    {/* Image Box */}
                    <Box sx={{
                      position: 'absolute',
                      top: 30,
                      [isLeft ? 'right' : 'left']: 30,
                      width: '70px',
                      height: '70px',
                      bgcolor: '#FFFFFF',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      p: 1
                    }}>
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={50}
                        height={50}
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>

                    {/* Content */}
                    <Box sx={{ position: 'relative', zIndex: 1, mt: '119px' }}>
                      <Typography variant="h5" sx={{
                        fontWeight: 800,
                        mb: 2,
                        fontFamily: 'var(--font-heading)',
                        textAlign: isLeft ? 'right' : 'left',
                        pr: isLeft ? 1 : 0,
                        pl: isLeft ? 0 : 1
                      }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{
                        opacity: 0.9,
                        lineHeight: 1.6,
                        fontSize: '14px',
                        fontFamily: 'var(--font-sans)',
                        textAlign: isLeft ? 'right' : 'left',
                        color: "white"
                      }}>
                        {step.desc}
                      </Typography>
                    </Box>

                  </Box>

                  <Box sx={{
                    position: 'absolute',
                    top: '70px',
                    left: isLeft ? 'calc(50% - 100px)' : '50%',
                    width: '100px',
                    height: '0px',
                    borderBottom: '2px dashed ' + '#03038C',
                    display: { xs: 'none', md: 'block' },
                    zIndex: 1
                  }} />


                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
