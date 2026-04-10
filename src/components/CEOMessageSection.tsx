"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function CEOMessageSection() {
  const headerGreen = '#06C106';
  const headerBlue = '#03038C';

  return (
    <Box sx={{ py: 12, position: 'relative', overflow: 'hidden', bgcolor: '#fff' }}>
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          border: '1px solid #eee',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          bgcolor: '#e8f9e8',
          borderRadius: '50%',
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Typography
                variant="h2"
                sx={{
                  color: '#1a1a1a',
                  fontWeight: 800,
                  fontSize: { xs: '32px', md: '48px' },
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  letterSpacing: '-0.02em'
                }}
              >
                CEO&apos;s <span style={{ position: 'relative', display: 'inline-block' }}>
                  Message
                  <svg
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      width: '100%',
                      height: '15px'
                    }}
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 20 100 10"
                      stroke={headerGreen}
                      strokeWidth="4"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Typography>

              {/* Quotation Marks Background */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-40px',
                  left: '-40px',
                  width: '120px',
                  height: '100px',
                  opacity: 0.1,
                  zIndex: -1,
                }}
              >
                <svg viewBox="0 0 24 24" fill="#000">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H2.017V21H5.017Z" />
                </svg>
              </Box>

              <Typography
                sx={{
                  color: '#444',
                  fontSize: '17px',
                  lineHeight: 1.7,
                  mb: 5,
                  textAlign: 'justify',
                  maxWidth: '90%',
                  fontWeight: 400
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget,, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget,, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla.
              </Typography>

              <Box sx={{ position: 'relative' }}>
                <Typography
                  sx={{
                    color: headerGreen,
                    fontWeight: 700,
                    fontSize: '22px',
                    mb: 0.5,
                    textTransform: 'uppercase'
                  }}
                >
                  ABID WAKEEL
                </Typography>
                <Typography
                  sx={{
                    color: '#555',
                    fontSize: '15px',
                    mb: 0.8,
                    fontWeight: 500
                  }}
                >
                  Chief Executive Officer (CEO)
                </Typography>
                <Typography
                  sx={{
                    color: '#1a1a1a',
                    fontWeight: 800,
                    fontSize: '16px'
                  }}
                >
                  M. Phil In English Literature
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: '14px'
                  }}
                >
                  Riphah International University, Islamabad.
                </Typography>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-40px',
                    right: '10%',
                    width: '120px',
                    height: '100px',
                    opacity: 0.1,
                    zIndex: -1,
                    transform: 'rotate(180deg)',
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="#000">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H2.017V21H5.017Z" />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Image Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '-30px',
                  width: '200px',
                  height: '200px',
                  bgcolor: '#e8f9e8',
                  borderRadius: '50%',
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(3, 3, 140, 0.15)',
                  width: '100%',
                  maxWidth: '550px'
                }}
              >
                <Image
                  src="/ceo-photo.jpg"
                  alt="Abid Wakeel CEO"
                  width={600}
                  height={450}
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
