"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";

export default function ApplyBanner() {
  const deepBlue = '#00008b';

  return (
    <Box sx={{ py: { xs: 8, md: 15 }, bgcolor: '#fff', position: 'relative', overflow: 'hidden', minHeight: '700px' }}>
      {/* Blue Background Plate - Fixed dimensions as per user request */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        width: { xs: '100%', md: '850px' },
        height: { xs: 'auto', md: '560px' },
        bgcolor: deepBlue,
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        zIndex: 0,
        backgroundImage: `url("/bgImage.svg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, minHeight: '560px', display: 'flex', alignItems: 'center' }}>
        {/* Absolute Image - Specific positioning as per user request */}
        <Box sx={{
          position: 'absolute',
          left: { md: '800px' },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: '100%', md: '700px' },
          height: { xs: '350px', md: '400px' },
          borderRadius: '15px',
          overflow: 'hidden',
          backgroundColor: '#fff',
          display: { xs: 'none', md: 'block' },
          zIndex: 2
        }}>
          <img
            src="/uk degree.svg"
            alt="UK London Skyline"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Grid container alignItems="center">
          {/* Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{
              color: '#fff',
              maxWidth: '850px',
              pl: { md: 8 }, // Added left padding for better spacing
              py: { xs: 4, md: 8 }, // Added vertical padding
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              <Typography variant="h2" sx={{
                fontWeight: 600,
                fontSize: { xs: '32px', md: '48px' }, // Slightly adjusted for better fit
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.1,
                color: '#fff'
              }}>
                A UK degree that opens global doors.
              </Typography>
              <Typography variant="body1" sx={{
                color: 'rgba(255, 255, 255, 0.95)', // Increased visibility
                fontSize: '16px',
                lineHeight: 1.8,
                fontFamily: 'var(--font-sans)',
                maxWidth: '750px'
              }}>
                We guide Pakistani students to cheap universities in uk for international students,
                offering affordable tuition, recognised degrees, visa support, scholarships,
                career outcomes, and a UK education that builds confidence, credibility,
                and global opportunities for worldwide success.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" sx={{
                  bgcolor: '#fff',
                  color: deepBlue,
                  px: 5,
                  py: 1.8,
                  borderRadius: '12px',
                  fontWeight: 400,
                  textTransform: 'none',
                  fontSize: '16px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  '&:hover': { bgcolor: '#f5f5f5', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s'
                }}>
                  Talk with our experts
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
