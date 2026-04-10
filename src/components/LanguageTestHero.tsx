"use client";

import { Box, Container, Grid, Typography, Button, TextField, Paper } from "@mui/material";
import { FaGraduationCap, FaCheckCircle, FaStar } from "react-icons/fa";

export default function LanguageTestHero() {
  const deepBlue = '#00008b';
  const greenColor = '#06C106';

  return (
    <Box sx={{
      backgroundImage: 'linear-gradient(rgba(0,0,139,0.85), rgba(0,0,139,0.85)), url("/images/uk-banner.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: { xs: 'auto', md: '70vh' },
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      pt: { xs: 20, md: 25 },
      pb: { xs: 10, md: 15 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6, 193, 6, 0.1) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ display: 'flex', color: '#ffc107', fontSize: '14px' }}>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, opacity: 0.9 }}>
                Rated 4.9/5 by 2,000+ Students
              </Typography>
            </Box>

            <Typography variant="h1" sx={{
              fontWeight: 800,
              fontSize: { xs: '38px', md: '64px' },
              lineHeight: 1.1,
              mb: 3,
              fontFamily: 'var(--font-heading)'
            }}>
              Master Your <span style={{ color: greenColor }}>Language Skills</span> for Global Success
            </Typography>

            <Typography variant="body1" sx={{
              fontSize: '20px',
              opacity: 0.9,
              mb: 5,
              maxWidth: '600px',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.6
            }}>
              Achieve your target score in IELTS, PTE, or TOEFL with our certified trainers and proven study materials. Fast-track your study abroad journey today.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 5 }}>
              {[
                "Free Mock Tests",
                "Certified Trainers",
                "Small Batch Sizes",
                "Flexible Timings"
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <FaCheckCircle style={{ color: greenColor, fontSize: '20px' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '16px' }}>{item}</Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" sx={{
                bgcolor: greenColor,
                px: 5,
                py: 2,
                borderRadius: '10px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '18px',
                '&:hover': { bgcolor: '#05a805' }
              }}>
                View Courses
              </Button>
              <Button variant="outlined" sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 5,
                py: 2,
                borderRadius: '10px',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '18px',
                '&:hover': { borderColor: greenColor, color: greenColor, bgcolor: 'rgba(255,255,255,0.05)' }
              }}>
                Download Syllabus
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Form Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper elevation={0} sx={{
              p: 5,
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff'
            }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
                Book Free Demo
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, textAlign: 'center', opacity: 0.8 }}>
                Get a free consultation and evaluation today!
              </Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField 
                    fullWidth 
                    placeholder="Full Name" 
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        bgcolor: 'rgba(0,0,0,0.2)',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: greenColor },
                        '&.Mui-focused fieldset': { borderColor: greenColor },
                      }
                    }} 
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField 
                    fullWidth 
                    placeholder="Mobile Number" 
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        bgcolor: 'rgba(0,0,0,0.2)',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: greenColor },
                        '&.Mui-focused fieldset': { borderColor: greenColor },
                      }
                    }} 
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField 
                    select
                    fullWidth 
                    SelectProps={{ native: true }}
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        bgcolor: 'rgba(0,0,0,0.2)',
                        '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                        '&:hover fieldset': { borderColor: greenColor },
                        '&.Mui-focused fieldset': { borderColor: greenColor },
                      },
                      '& select': { color: '#fff' }
                    }}
                  >
                    <option value="" style={{ background: deepBlue }}>Select Test Type</option>
                    <option value="ielts" style={{ background: deepBlue }}>IELTS Academic</option>
                    <option value="pte" style={{ background: deepBlue }}>PTE Academic</option>
                    <option value="toefl" style={{ background: deepBlue }}>TOEFL iBT</option>
                  </TextField>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button fullWidth variant="contained" sx={{
                    bgcolor: greenColor,
                    py: 2,
                    mt: 2,
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '18px',
                    textTransform: 'none',
                    '&:hover': { bgcolor: '#05a805' }
                  }}>
                    Secure Your Spot
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
