"use client";

import { Container, Grid, Typography, Button, TextField, Box } from "@mui/material";
import BlobButton from "./BlobButton";

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
              fontSize: { xs: '38px', md: '58px' },
              lineHeight: 1.2,
              fontFamily: 'var(--font-heading)',
              maxWidth: '800px'
            }}>
              Best Study Abroad<br />
              Consultant in Lahore for<br />
              <Box component="span" sx={{
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '5px',
                  width: '100%',
                  height: '6px',
                  bgcolor: '#06C106',
                  borderRadius: '10px'
                }
              }}>
                Pakistani Students Trusted
              </Box>
            </Typography>
            <Typography variant="body1" sx={{
              mb: 4,
              fontSize: '18px',
              maxWidth: '800px',
              color: 'white',
              fontFamily: 'var(--font-sans)'
            }}>
              Choose the best study abroad consultant in Lahore, guiding Pakistani students
              with transparent advice on admissions, visas, scholarships, and career-focused planning.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <BlobButton color="#06C106">
                Talk With Our Experts
              </BlobButton>
              <BlobButton color="#03038C">
                Explore Services <img src="/arrow.svg" alt="arrow" />
              </BlobButton>
            </Box>
          </Grid>

          {/* Right Side: Form */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: { md: 'flex-end' } }}>
            <Box sx={{
              width: { xs: '100%', md: '500px' },
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(30px)',
              p: 4,
              borderRadius: '16px',
              border: '1px solid white',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'

            }}>
              <Typography variant="h5" sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: "34px",
                textAlign: 'left',
                color: '#06C106',
                fontFamily: 'var(--font-heading)'
              }}>
                Apply Online For Free!
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    placeholder="Your Name"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: '6px',
                      '& .MuiInputBase-input': { fontFamily: 'var(--font-sans)', fontSize: '16px' },
                      '& .MuiInputBase-input::placeholder': { fontFamily: 'var(--font-sans)', fontSize: '16px', opacity: 0.5 }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    placeholder="Mobile Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: '6px',
                      '& .MuiInputBase-input': { fontFamily: 'var(--font-sans)', fontSize: '16px' },
                      '& .MuiInputBase-input::placeholder': { fontFamily: 'var(--font-sans)', fontSize: '16px', opacity: 0.5 }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    placeholder="Your E-mail"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: '6px',
                      '& .MuiInputBase-input': { fontFamily: 'var(--font-sans)', fontSize: '16px' },
                      '& .MuiInputBase-input::placeholder': { fontFamily: 'var(--font-sans)', fontSize: '16px', opacity: 0.5 }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    placeholder="Field of Interest"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: '6px',
                      '& .MuiInputBase-input': { fontFamily: 'var(--font-sans)', fontSize: '16px' },
                      '& .MuiInputBase-input::placeholder': { fontFamily: 'var(--font-sans)', fontSize: '16px', opacity: 0.5 }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    placeholder="Where you want to Go!"
                    variant="outlined"
                    size="small"
                    sx={{
                      bgcolor: '#fff',
                      borderRadius: '6px',
                      '& .MuiInputBase-input': { fontFamily: 'var(--font-sans)', fontSize: '16px' },
                      '& .MuiInputBase-input::placeholder': { fontFamily: 'var(--font-sans)', fontSize: '16px', opacity: 0.5 }
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <BlobButton color="#06C106" fullWidth variant="solid">
                    Submit
                  </BlobButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
