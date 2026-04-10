"use client";

import { Box, Container, Typography, Grid, Button, Paper, Stack } from "@mui/material";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaUniversity,
  FaHandshake
} from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    title: "High Visa Success Rate",
    description: "Best Student Visa Consultant delivering high approval rates through experience, accurate case assessment.",
    icon: <FaCheckCircle size={28} />
  },
  {
    title: "Personalized Guidance",
    description: "Best Student Visa Consultant offering personalized guidance tailored to Pakistani students academic background.",
    icon: <FaUserGraduate size={28} />
  },
  {
    title: "Recognized University Partners",
    description: "Best Student Visa Consultant connected with recognized universities, ensuring admissions and trusted offers.",
    icon: <FaUniversity size={28} />
  },
  {
    title: "Honest, Transparent Guidance",
    description: "Best Student Visa Consultant known for honest, transparent guidance and long-term student success.",
    icon: <FaHandshake size={28} />
  }
];

const statsData = [
  { value: 40, suffix: "+", label: "Summer School Programs" },
  { value: 4, suffix: "k+", label: "Total Admissions" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Student Satisfaction" }
];

function StatCounter({ value, suffix, label, hasBorder }: { value: number, suffix: string, label: string, hasBorder?: boolean }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const greenColor = '#06C106';

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const fps = 60;
    const increment = end / (duration / (1000 / fps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <Box ref={domRef} sx={{
      textAlign: 'center',
      flex: '1 1 200px',
      position: 'relative',
      '&::after': hasBorder ? {
        content: '""',
        position: 'absolute',
        right: 0,
        top: '10%',
        height: '80%',
        width: '1px',
        background: 'linear-gradient(180deg, rgba(6, 193, 6, 0) 0%, #06C106 50%, rgba(6, 193, 6, 0) 100%)',
      } : {}
    }}>
      <Typography variant="h2" sx={{
        color: greenColor,
        fontWeight: 900,
        fontSize: '56px',
        fontFamily: 'var(--font-heading)',
        mb: 1
      }}>
        {count}{suffix}
      </Typography>
      <Typography variant="body1" sx={{
        opacity: 0.9,
        fontWeight: 600,
        fontSize: '16px',
        fontFamily: 'var(--font-sans)',
        color: '#fff'
      }}>
        {label}
      </Typography>
    </Box>
  );
}

function FeatureIcon({ icon }: { icon: React.ReactNode }) {
  const deepBlue = '#00008b';
  const greenColor = '#06C106';

  return (
    <Box sx={{
      position: 'relative',
      width: '80px',
      height: '80px',
      minWidth: '80px',
      minHeight: '80px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: `3px solid ${greenColor}`,
      p: '4px'
    }}>
      <Box sx={{
        position: 'absolute',
        top: '-7px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '14px',
        height: '14px',
        bgcolor: deepBlue,
        borderRadius: '50%',
        border: '3px solid white',
        zIndex: 2
      }} />

      <Box sx={{
        width: '100%',
        height: '100%',
        bgcolor: deepBlue,
        color: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </Box>
    </Box>
  );
}

export default function WhyChooseUs() {
  const deepBlue = '#00008b';
  const greenColor = '#06C106';

  return (
    <Box sx={{
      bgcolor: deepBlue,
      color: '#fff',
      py: '120px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(6, 193, 6, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(6, 193, 6, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 8, flexWrap: 'wrap', gap: 4 }}>
          <Box>
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: '48px',
              fontFamily: 'var(--font-heading)',
              mb: 2
            }}>
              Why Choose Us
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: '500px', fontSize: '16px', fontFamily: 'var(--font-sans)' }}>
              We are the Best Student Visa Consultant delivering trust, transparency, strong results and student-focused guidance.
            </Typography>
          </Box>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            '&:hover': { bgcolor: '#05a805' },
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px'
          }}>
            Schedule Appointment
          </Button>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              {features.map((feature, i) => (
                <Paper key={i} elevation={0} sx={{
                  p: 3,
                  borderRadius: '16px',
                  display: 'flex',
                  gap: 3,
                  alignItems: 'center',
                  background: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateX(10px)' }
                }}>
                  <FeatureIcon icon={feature.icon} />
                  <Box>
                    <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 800, mb: 0.5, fontSize: '18px', fontFamily: 'var(--font-heading)' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontSize: '14px', lineHeight: 1.5, fontFamily: 'var(--font-sans)' }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              lineHeight: 0
            }}>
              <Image
                src="/choose us.svg"
                alt="Education"
                width={600}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{
          mt: 12,
          pt: 8,
          borderTop: '2px solid',
          borderImageSource: 'linear-gradient(90deg, rgba(3, 3, 140, 0) 0%, #06C106 53.37%, rgba(3, 3, 140, 0) 99.99%)',
          borderImageSlice: 1,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4
        }}>
          {statsData.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              hasBorder={i !== statsData.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
