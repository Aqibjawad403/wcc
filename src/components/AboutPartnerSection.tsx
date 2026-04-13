"use client";

import { Box, Container, Typography, Grid, Button, Link } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function AboutPartnerSection({ reverse = false }: { reverse?: boolean }) {
  const deepBlue = '#03038C';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center" direction={reverse ? { xs: 'column-reverse', md: 'row-reverse' } : 'row'}>
          {/* Left Side: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: { xs: '32px', md: '54px' },
              fontFamily: 'var(--font-heading)',
              color: '#1a1a1a',
              lineHeight: 1.1,
              mb: 3
            }}>
              Your Partner in Global <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Education
                <Box component="span" sx={{
                  position: 'absolute',
                  bottom: 8,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  bgcolor: greenColor,
                  borderRadius: '0px'
                }} />
              </span>
            </Typography>

            <Typography variant="body1" sx={{
              color: '#555',
              fontSize: '16px',
              mb: 4,
              fontFamily: 'var(--font-sans)',
            }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi
              efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id,
              volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius
              scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget, malesuada
              est. Sed hendrerit, libero a lacinia placerat, velit dui vulputate elit, a tincidunt odio
              dolor eget metus.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '91px', mb: 5 }}>
              {[
                { label: "Professional Team" },
                { label: "24/7 Customer Support" }
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <FaCheckCircle style={{ color: deepBlue, fontSize: '20px' }} />
                  <Typography sx={{
                    fontWeight: 600,
                    color: '#333',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '16px'
                  }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component={Link}
                href="/about"
                variant="contained" sx={{
                  bgcolor: greenColor,
                  color: '#fff',
                  px: 5,
                  py: 1.8,
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '16px',
                  textTransform: 'none',
                  textDecoration: 'none',
                  '&:hover': { bgcolor: '#05a805' }
                }}>
                View More
              </Button>
              <Button variant="contained" sx={{
                bgcolor: deepBlue,
                color: '#fff',
                px: 5,
                py: 1.8,
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'none',
                '&:hover': { bgcolor: '#02026b' }
              }}>
                Call Now
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', height: { xs: '400px', md: '550px' } }}>
              {/* Green Box Outline in Background */}
              <Box sx={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                border: `2px solid ${greenColor}`,
                zIndex: 0,
                borderRadius: '0px'
              }} />

              {/* Top Left Image */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '65%',
                height: '65%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                zIndex: 2
              }}>
                <img
                  src="/images/service1.jpg" // Using available images
                  alt="Student Consultant"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Bottom Right Image */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '65%',
                height: '65%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                zIndex: 1,
                border: '8px solid #fff'
              }}>
                <img
                  src="/images/uk-banner.jpg" // Using available banner
                  alt="Global Education"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
