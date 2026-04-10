"use client";

import { Container, Grid, Typography, Button, TextField, Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

export default function BannerHero() {
  return (
    <Box sx={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/home/homeBanner.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      py: 10
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side: Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h1" sx={{
              color: '#fff',
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '38px', md: '58px' }, // Responsive font size
              lineHeight: 1.2,
              fontFamily: 'var(--font-heading)'
            }}>
              Best Study Abroad Consultant in Lahore for <span style={{ textDecoration: 'underline', textDecorationColor: '#06C106', textDecorationThickness: '4px' }}>Pakistani Students Trusted</span>
            </Typography>
            <Typography variant="body1" sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: '18px',
              maxWidth: '600px',
              color: '#fff',
              fontFamily: 'var(--font-sans)'
            }}>
              Choose the best study abroad consultant in Lahore, guiding Pakistani students
              with transparent advice on admissions, visas, scholarships, and career-focused planning.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" sx={{
                bgcolor: '#06C106',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { bgcolor: '#05a805' }
              }}>
                Talk With Our Experts
              </Button>
              <Button variant="outlined" sx={{
                color: '#fff',
                borderColor: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                fontWeight: 700,
                textTransform: 'none',
                gap: 1,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#fff' }
              }}>
                Explore Services <FaArrowRight />
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Form */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              p: 4,
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
              <Typography variant="h5" sx={{
                mb: 3,
                fontWeight: 700,
                textAlign: 'center',
                color: '#06C106',
                fontFamily: 'var(--font-heading)'
              }}>
                Apply Online For Free!
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth placeholder="Your Name" variant="outlined" size="small" sx={{ bgcolor: '#fff', borderRadius: '4px' }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth placeholder="Your E-mail" variant="outlined" size="small" sx={{ bgcolor: '#fff', borderRadius: '4px' }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth placeholder="Field of Interest" variant="outlined" size="small" sx={{ bgcolor: '#fff', borderRadius: '4px' }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth placeholder="Where you want to Go!" variant="outlined" size="small" sx={{ bgcolor: '#fff', borderRadius: '4px' }} />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button fullWidth variant="contained" sx={{
                    bgcolor: '#06C106',
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#05a805' }
                  }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
