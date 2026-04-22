"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import BlobButton from "./BlobButton";

export default function ApplyBanner() {
  const deepBlue = '#00008b';

  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: '#fff', position: 'relative', overflow: 'hidden', minHeight: '700px' }}>
      {/* Blue Background Plate - Dynamic width for high resolutions */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: { xs: '100%', md: 'calc(50vw + 200px)' },
        height: { xs: '100%', md: '560px' },
        bgcolor: deepBlue,
        borderTopRightRadius: { xs: 0, md: '15px' },
        borderBottomRightRadius: { xs: 0, md: '15px' },
        zIndex: 0,
        backgroundImage: `url("/bgImage.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, minHeight: '560px', display: 'flex', alignItems: 'center' }}>
        <Grid container alignItems="center" spacing={4} sx={{ width: '100%', m: 0 }}>
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{
              color: '#fff',
              maxWidth: '850px',
              pl: { md: 4, lg: 8 },
              pr: { md: 2, lg: 4 },
              py: { xs: 6, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              <Typography variant="h2" sx={{
                fontWeight: 600,
                fontSize: { xs: '32px', md: '48px' },
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.1,
                color: '#fff'
              }}>
                A UK degree that opens global doors.
              </Typography>
              <Typography variant="body1" sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: { xs: '14px', sm: '16px', lg: '18px', xl: '18px' },
                lineHeight: 1.8,
                fontFamily: 'var(--font-sans)',
                maxWidth: '750px',
                transition: 'color 0.3s ease',
                "&:hover": {
                  color: "#06C106",
                },
              }}>
                We guide Pakistani students to cheap universities in uk for international students,
                offering affordable tuition, recognised degrees, visa support, scholarships,
                career outcomes, and a UK education that builds confidence, credibility,
                and global opportunities for worldwide success.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <BlobButton color="#06C106" variant="solid">
                  Talk With Our Experts
                </BlobButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{
              width: '100%',
              height: { xs: '350px', md: '400px' },
              borderTopRightRadius: '15px',
              borderBottomRightRadius: '15px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              zIndex: 2,
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <img
                src="/uk degree.svg"
                alt="UK London Skyline"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
