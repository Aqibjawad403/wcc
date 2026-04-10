"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

export default function MissionVisionSection() {
  const deepBlue = '#03038C';

  return (
    <Box sx={{ py: 12, bgcolor: '#F3F3FF' }}>
      <Container maxWidth="xl">
        {/* Our Mission Row */}
        <Box sx={{ position: 'relative', mb: { xs: 10, md: 15 } }}>
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '300px', md: '450px' },
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/service1.jpg" // Using an available image with a light/ideation theme
                  alt="Our Mission"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{
              position: { md: 'absolute' },
              right: 0,
              zIndex: 2,
              mt: { xs: -5, md: 0 }
            }}>
              <Box sx={{
                bgcolor: deepBlue,
                color: '#fff',
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
              }}>
                <Typography variant="h3" sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  fontSize: '16px',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'justify',
                  color: "white"

                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna dui,
                  pellentesque eget leo eu, convallis vulputate odio. Donec aliquam ornare felis
                  nec aliquam. Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam magna dui, pellentesque
                  eget leo eu, convallis vulputate odio. Donec aliquam ornare felis nec aliquam.
                  Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Our Vision Row */}
        <Box sx={{ position: 'relative', mb: { xs: 10, md: 15 } }}>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid size={{ xs: 12, md: 6 }} sx={{
              position: { md: 'absolute' },
              left: 0,
              zIndex: 2,
              mb: { xs: -5, md: 0 }
            }}>
              <Box sx={{
                bgcolor: deepBlue,
                color: '#fff',
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
              }}>
                <Typography variant="h3" sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  fontSize: '16px',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'justify',
                  color: "white"

                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna dui,
                  pellentesque eget leo eu, convallis vulputate odio. Donec aliquam ornare felis
                  nec aliquam. Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam magna dui, pellentesque
                  eget leo eu, convallis vulputate odio. Donec aliquam ornare felis nec aliquam.
                  Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '300px', md: '450px' },
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/uk-banner.jpg" // Using an available banner
                  alt="Our Vision"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Our Value Row */}
        <Box sx={{ position: 'relative', mb: { xs: 10, md: 15 } }}>
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: { xs: '300px', md: '450px' },
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <img
                  src="/images/service1.jpg" // Using an available image with a light/ideation theme
                  alt="Our Mission"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{
              position: { md: 'absolute' },
              right: 0,
              zIndex: 2,
              mt: { xs: -5, md: 0 }
            }}>
              <Box sx={{
                bgcolor: deepBlue,
                color: '#fff',
                p: { xs: 4, md: 6 },
                borderRadius: '24px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
              }}>
                <Typography variant="h3" sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontFamily: 'var(--font-heading)'
                }}>
                  Our Value
                </Typography>
                <Typography variant="body1" sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  fontSize: '16px',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'justify',
                  color: "white"
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna dui,
                  pellentesque eget leo eu, convallis vulputate odio. Donec aliquam ornare felis
                  nec aliquam. Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nullam magna dui, pellentesque
                  eget leo eu, convallis vulputate odio. Donec aliquam ornare felis nec aliquam.
                  Quisque viverra sit amet ipsum vitae pellentesque. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
