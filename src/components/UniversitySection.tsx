"use client";

import { Container, Typography, Box } from "@mui/material";
import Image from "next/image";
import BlobButton from "./BlobButton";

const universities = [
  { name: "Ulster University", logo: "/home/trusted partner 1.svg" },
  { name: "University of Sunderland", logo: "/home/trusted partner 2.svg" },
  { name: "University of Hertfordshire", logo: "/home/trusted partner 3.svg" },
  { name: "University of East London", logo: "/home/trusted partner 4.svg" },
  { name: "Bangor University", logo: "/home/trusted partner 5.svg" }
];

export default function UniversitySection() {
  return (
    <Box sx={{ py: '80px', bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: "32px" }}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: '42px',
              fontFamily: 'var(--font-heading)',
              color: '#1a1a1a',
            }}>
              <span style={{
                textDecoration: 'underline',
                textDecorationColor: '#06C106',
                textDecorationThickness: '4px'
              }}>
                Trusted Partnership
              </span>{' '}with Universities
            </Typography>

            <BlobButton color="#06C106">
              View More
            </BlobButton>
          </Box>

          <Typography variant="body1" sx={{
            color: '#666',
            maxWidth: '800px',
            fontFamily: 'var(--font-sans)'
          }}>
            Our trusted partnership connects Pakistani students with top universities worldwide,
            ensuring credibility, transparent admissions support, and strong academic pathways for future success.
          </Typography>

        </Box>

        <Box sx={{ 
          overflow: 'hidden', 
          position: 'relative',
          width: '100%',
          mt: 6,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            width: '150px',
            height: '100%',
            zIndex: 2,
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(to right, #fff, transparent)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, #fff, transparent)',
          }
        }}>
          <Box sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 40s linear infinite',
            '@keyframes marquee': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            },
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}>
            {[...universities, ...universities].map((uni, idx) => (
              <Box key={idx} sx={{
                width: '280px',
                mx: 1.5,
                flexShrink: 0,
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '140px',
                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  border: '1px solid #03038C',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }
              }}>
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    fill
                    style={{ objectFit: 'contain', padding: '15px' }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}