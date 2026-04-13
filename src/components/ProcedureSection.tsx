"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { FaHeadset, FaUniversity, FaFileAlt, FaPlaneDeparture } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "Get the Best Study Abroad Free Consultation for Pakistani students with expert advice on course selection, visa clarity and personalised guidance for confident decisions.",
    icon: FaHeadset,
    color: "#06C106",
    side: "left"
  },
  {
    number: "02",
    title: "University & Course",
    desc: "Explore Top Universities for Pakistani Students with course options, admission guidance, eligibility clarity and trusted support for successful study abroad planning.",
    icon: FaUniversity,
    color: "#03038C",
    side: "right"
  },
  {
    number: "03",
    title: "Visa & Documentation",
    desc: "As a Trusted Student Visa Consultant in Bahria Town Lahore, we manage visa documentation accurately, ensuring compliance, clarity and higher approval confidence.",
    icon: FaFileAlt,
    color: "#06C106",
    side: "left"
  },
  {
    number: "04",
    title: "Prepare & Depart",
    desc: "With the Best Trusted Student Visa Consultant in Lahore, we prepare students for departure through guidance, planning checklists and confidence.",
    icon: FaPlaneDeparture,
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
            width: '2px',
            bgcolor: deepBlue,
            display: { xs: 'none', md: 'block' },
            transform: 'translateX(-50%)'
          }} />

          {/* Steps */}
          <Box sx={{ position: 'relative' }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Box key={index} sx={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  mb: 4,
                  position: 'relative'
                }}>
                  {/* Card */}
                  <Box sx={{
                    width: { xs: '100%', md: 'calc(50% - 20px)' },
                    bgcolor: step.color,
                    borderRadius: '24px',
                    p: 4,
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}>
                    {/* Background Number */}
                    <Typography sx={{
                      position: 'absolute',
                      top: -10,
                      [isLeft ? 'left' : 'right']: 10,
                      fontSize: '120px',
                      fontWeight: 900,
                      color: 'rgba(0,0,0,0.1)',
                      lineHeight: 1,
                      zIndex: 0,
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {step.number}
                    </Typography>

                    {/* Icon Box */}
                    <Box sx={{
                      position: 'absolute',
                      top: 40,
                      [isLeft ? 'right' : 'left']: 40,
                      width: '60px',
                      height: '60px',
                      bgcolor: 'rgba(255,255,255,0.15)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                      backdropFilter: 'blur(4px)'
                    }}>
                      <step.icon size={28} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ position: 'relative', zIndex: 1, mt: 8 }}>
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

                  {/* Dashed Connector Line */}
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: isLeft ? 'calc(50% - 20px)' : '50%',
                    width: '20px',
                    height: '0px',
                    borderBottom: '3px dashed ' + deepBlue,
                    display: { xs: 'none', md: 'block' },
                    transform: 'translateY(-50%)',
                    zIndex: 1
                  }} />

                  {/* Dot on main line */}
                  <Box sx={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '12px',
                    height: '12px',
                    bgcolor: '#fff',
                    border: '3px solid ' + deepBlue,
                    borderRadius: '50%',
                    display: { xs: 'none', md: 'block' },
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2
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
