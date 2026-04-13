"use client";

import { Box, Container, Typography, Grid, TextField, Button, Stack } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactSection() {
  const deepBlue = '#00008b';
  const greenColor = '#06C106';
  const lightBg = '#F3F5FF';

  const infoItems = [
    {
      title: "Contact",
      value: "+92 333 0630064 | +92 334 1881851",
      icon: <FaPhoneAlt />,
      color: lightBg,
      textColor: '#333',
      iconBg: deepBlue,
      iconColor: '#fff'
    },
    {
      title: "E-mail",
      value: "info@worldcitizenconsultants.com",
      icon: <FaEnvelope />,
      color: lightBg,
      textColor: '#333',
      iconBg: deepBlue,
      iconColor: '#fff'
    },
    {
      title: "Location",
      value: "1st Floor, 57 Quaid Block near Imtiaz Mega Mall Bahria Town, Lahore.",
      icon: <FaMapMarkerAlt />,
      color: lightBg,
      textColor: '#333',
      iconBg: deepBlue,
      iconColor: '#fff'
    },
    {
      title: "Office Timings",
      value: "Mon - Sat: 10:00 am to 07:00 pm",
      icon: <FaClock />,
      color: lightBg,
      textColor: '#333',
      iconBg: deepBlue,
      iconColor: '#fff'
    }
  ];

  return (
    <Box sx={{ py: 10, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          border: '1px solid #eee'
        }}>
          {/* Left Side: Form */}
          <Box sx={{ 
            flex: { md: 1.5 }, 
            bgcolor: deepBlue, 
            p: { xs: 4, md: 6 },
            color: '#fff'
          }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              mb: 5, 
              fontFamily: 'var(--font-heading)',
              position: 'relative',
              display: 'inline-block'
            }}>
              Send Us a <Box component="span" sx={{ position: 'relative', zIndex: 1 }}>
                Message
                <Box component="svg" viewBox="0 0 200 20" sx={{ 
                  position: 'absolute', 
                  bottom: -15, 
                  left: 0, 
                  width: '100%', 
                  zIndex: -1 
                }}>
                  <path d="M0,10 C50,0 150,20 200,10" fill="none" stroke={greenColor} strokeWidth="4" />
                </Box>
              </Box>
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>First Name</Typography>
                <TextField 
                  fullWidth 
                  placeholder="First Name" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Second Name</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Second Name" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Your E-mail</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Your E-mail" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Phone Number</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Phone number" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Field of Interest</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Write a Field" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Where you want to Go!</Typography>
                <TextField 
                  fullWidth 
                  placeholder="Add Country" 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px',
                    '& .MuiOutlinedInput-root': { height: '50px' }
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ mb: 1, fontWeight: 500, opacity: 0.9 }}>Message</Typography>
                <TextField 
                  fullWidth 
                  multiline 
                  rows={4} 
                  placeholder="Write your message..." 
                  variant="outlined" 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: '8px'
                  }} 
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Button variant="contained" sx={{ 
                  bgcolor: greenColor, 
                  color: '#fff', 
                  px: 5, 
                  py: 1.5, 
                  borderRadius: '8px',
                  fontWeight: 800,
                  textTransform: 'none',
                  fontSize: '16px',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#05a805' }
                }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Right Side: Contact Info */}
          <Box sx={{ 
            flex: 1, 
            bgcolor: '#fff', 
            p: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              mb: 1, 
              color: '#1a1a1a', 
              fontFamily: 'var(--font-heading)',
              position: 'relative',
              display: 'inline-block'
            }}>
              Contact <Box component="span" sx={{ position: 'relative', zIndex: 1 }}>
                Information
                <Box component="svg" viewBox="0 0 200 20" sx={{ 
                  position: 'absolute', 
                  bottom: -15, 
                  left: 0, 
                  width: '100%', 
                  zIndex: -1 
                }}>
                  <path d="M0,10 C50,20 150,0 200,10" fill="none" stroke={greenColor} strokeWidth="4" />
                </Box>
              </Box>
            </Typography>
            <Typography sx={{ color: '#666', mb: 5, fontFamily: 'var(--font-sans)' }}>
              Say something to start a live chat!
            </Typography>

            <Stack spacing={2.5}>
              {infoItems.map((item, index) => (
                <Box key={index} sx={{ 
                  bgcolor: item.color, 
                  p: 2.5, 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.5,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: deepBlue,
                    transform: 'translateX(10px)',
                    '& .info-title, & .info-value': { color: '#fff' },
                    '& .icon-circle': { bgcolor: '#fff', color: deepBlue }
                  }
                }}>
                  <Box className="icon-circle" sx={{ 
                    bgcolor: item.iconBg, 
                    color: item.iconColor,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography className="info-title" variant="h6" sx={{ 
                      fontWeight: 700, 
                      color: item.textColor, 
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      lineHeight: 1.2,
                      transition: 'all 0.3s ease'
                    }}>
                      {item.title}
                    </Typography>
                    <Typography className="info-value" variant="body2" sx={{ 
                      color: item.textColor, 
                      opacity: 0.9,
                      fontFamily: 'var(--font-sans)',
                      mt: 0.5,
                      lineHeight: 1.4,
                      transition: 'all 0.3s ease'
                    }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
