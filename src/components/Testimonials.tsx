"use client";

import { Box, Container, Typography, Grid, Paper, Avatar, Stack, IconButton, Divider } from "@mui/material";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Fatima Amir",
    role: "Student",
    image: "/images/testimonial1.jpg", // Placeholder paths
    source: "Google",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget, malesuada est. Sed hendrerit, libero a lacinia placerat.",
    rating: 5,
    highlight: false
  },
  {
    name: "Sarah Khan",
    role: "Canada, CA",
    image: "/images/testimonial2.jpg",
    source: "Google",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget, malesuada est. Sed hendrerit, libero a lacinia placerat, velit dui vulputate elit, a tincidunt odio dolor eget metus. Phasellus eleifend.",
    rating: 5,
    highlight: false
  },
  {
    name: "Ahmed Malik",
    role: "Student",
    image: "/images/testimonial3.jpg",
    source: "Google",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin nibh id, varius scelerisque nulla. Quisque malesuada arcu semper, ornare massa eget, malesuada est. Sed hendrerit, libero a lacinia placerat, velit dui vulputate elit, a tincidunt odio dolor eget metus. Phasellus eleifend, lacinia pla...",
    rating: 5,
    highlight: true // The third one in image has a blue border
  }
];

export default function Testimonials() {
  const greenColor = '#06C106';

  return (
    <Box sx={{ bgcolor: '#f8f9ff', py: 12 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 6 }}>
          <Box sx={{ maxWidth: '650px' }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              fontSize: '48px', 
              fontFamily: 'var(--font-heading)',
              mb: 2,
              color: '#1a1a1a'
            }}>
              Our Success <span style={{ position: 'relative' }}>
                Stories
                <Box component="span" sx={{
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  bgcolor: greenColor,
                  borderRadius: '10px'
                }} />
              </span>
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666', 
              lineHeight: 1.6,
              fontFamily: 'var(--font-sans)',
              opacity: 0.8
            }}>
              Our success stories reflect results achieved by the Best Student Visa Consultant in Bahria Town Lahore, 
              helping Pakistani students secure visas, admissions, and global education opportunities with confidence.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <IconButton sx={{ 
              bgcolor: '#ccc', 
              color: '#fff', 
              '&:hover': { bgcolor: '#bbb' } 
            }}>
              <FaArrowLeft size={16} />
            </IconButton>
            <IconButton sx={{ 
              bgcolor: greenColor, 
              color: '#fff', 
              '&:hover': { bgcolor: '#05a805' } 
            }}>
              <FaArrowRight size={16} />
            </IconButton>
          </Stack>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper elevation={0} sx={{
                p: 4,
                borderRadius: '20px',
                bgcolor: '#fff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: t.highlight ? '2px solid #2e3192' : '1px solid #eee',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <Stack direction="row" spacing={0.5} sx={{ color: '#ffc107', mb: 3 }}>
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={16} />)}
                </Stack>

                <Typography variant="body2" sx={{ 
                  color: '#555', 
                  fontSize: '15px', 
                  lineHeight: 1.7, 
                  fontFamily: 'var(--font-sans)',
                  mb: 4,
                  flexGrow: 1
                }}>
                  {t.text}
                </Typography>

                <Divider sx={{ mb: 3, opacity: 0.6 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar 
                      src={t.image} 
                      alt={t.name}
                      sx={{ width: 44, height: 44, border: '2px solid #eee' }}
                    />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1a1a1a', fontSize: '15px' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666', fontSize: '12px' }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ position: 'relative', width: 70, height: 25 }}>
                   <Image 
                    src="/images/google-logo.png" 
                    alt="Google" 
                    fill 
                    style={{ objectFit: 'contain' }}
                   />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Dots */}
        <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 6 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#2e3192' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eee' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eee' }} />
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eee' }} />
        </Stack>
      </Container>
    </Box>
  );
}
