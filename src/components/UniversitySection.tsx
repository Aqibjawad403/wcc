"use client";

import { Container, Typography, Box, Grid, Button } from "@mui/material";
import Image from "next/image";

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: '120px' }}>
          <Box>
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: '42px',
              fontFamily: 'var(--font-heading)',
              color: '#1a1a1a',
              mb: 2
            }}>
              <span style={{ textDecoration: 'underline', textDecorationColor: '#06C106', textDecorationThickness: '4px' }}>Trusted Partnership</span> with Universities
            </Typography>
            <Typography variant="body1" sx={{
              color: '#666',
              maxWidth: '800px',
              fontFamily: 'var(--font-sans)'
            }}>
              Our trusted partnership connects Pakistani students with top universities worldwide,
              ensuring credibility, transparent admissions support, and strong academic pathways for future success.
            </Typography>
          </Box>
          <Button variant="contained" sx={{
            bgcolor: '#06C106',
            '&:hover': { bgcolor: '#05a805' },
            borderRadius: '8px',
            textTransform: 'none',
            px: 4,
            py: 1,
            fontWeight: 700
          }}>
            View More
          </Button>
        </Box>

        <Grid container spacing={3}>
          {universities.map((uni, idx) => (
            <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={idx}>
              <Box sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '120px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-5px)', borderColor: '#06C106' }
              }}>
                <Image
                  src={uni.logo}
                  alt={uni.name}
                  width={150}
                  height={80}
                  style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
