"use client";

import { Box, Container, Typography, Button } from "@mui/material";

export default function CTASection() {
  const greenColor = '#06C106';

  return (
    <Box sx={{ 
      position: 'relative', 
      zIndex: 10,
      mt: 10,
      mb: -8, // Controls the overlap with footer
    }}>
      <Container maxWidth="xl">
        <Box sx={{
          bgcolor: greenColor,
          borderRadius: '32px',
          p: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          gap: 4
        }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h3" sx={{ 
              color: '#fff', 
              fontWeight: 800, 
              mb: 2,
              fontSize: { xs: '32px', md: '44px' },
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.2
            }}>
              Admission is open for the next year batch
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#fff', 
              opacity: 0.95, 
              maxWidth: '800px',
              fontSize: { xs: '15px', md: '17px' },
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.6
            }}>
              World Citizen Consultants Bahria Town Lahore, guides students through destination selection, 
              university choice, visa documentation, and cultural adaptation, ensuring informed decisions.
            </Typography>
          </Box>

          <Button variant="contained" sx={{
            bgcolor: '#fff',
            color: greenColor,
            px: 6,
            py: 2,
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: '18px',
            textTransform: 'none',
            whiteSpace: 'nowrap',
            '&:hover': {
              bgcolor: '#f8f8f8',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            Get Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
