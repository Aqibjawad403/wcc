"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  {
    title: "Contact Numbers",
    value: "+92 333 0630064 | +92 334 1881851 | +92 330 6660635",
    icon: <FaPhoneAlt style={{ color: '#06C106', fontSize: '24px' }} />,
  },
  {
    title: "E-mail",
    value: "info@worldcitizenconsultants.com",
    icon: <FaEnvelope style={{ color: '#555', fontSize: '24px' }} />,
  },
  {
    title: "Location",
    value: "1st Floor, 57 Quaid Block near Imtiaz Mega Mall Bharia Town, Lahore.",
    icon: <FaMapMarkerAlt style={{ color: '#555', fontSize: '24px' }} />,
  },
];

export default function FindUsNow() {
  const deepBlue = '#03038C';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 12, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{
          fontWeight: 800,
          textAlign: 'center',
          fontSize: { xs: '32px', md: '48px' },
          fontFamily: 'var(--font-heading)',
          color: '#1a1a1a',
          mb: 8
        }}>
          Find Us Now
        </Typography>

        <Grid container spacing={5} alignItems="center">
          {/* Left Side: Info Cards */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    bgcolor: '#F8F9FA',
                    borderRadius: '12px',
                    p: 4,
                    pt: 5,
                    border: '1px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: greenColor,
                      bgcolor: '#fff',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    },
                    '&:hover .icon-container': {
                      borderColor: greenColor,
                    }
                  }}
                >
                  {/* Overlapping Icon Circle */}
                  <Box 
                    className="icon-container"
                    sx={{
                      position: 'absolute',
                      top: '-30px',
                      right: '20px',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      bgcolor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                      border: '1px solid #eee',
                      transition: 'border-color 0.3s ease',
                      zIndex: 2
                    }}
                  >
                    {info.icon}
                  </Box>

                  <Typography sx={{ 
                    fontWeight: 700, 
                    fontSize: '20px', 
                    color: '#1a1a1a',
                    mb: 1,
                    fontFamily: 'var(--font-sans)'
                  }}>
                    {info.title}
                  </Typography>
                  <Typography sx={{ 
                    fontSize: '16px', 
                    color: '#666', 
                    lineHeight: 1.6,
                    fontFamily: 'var(--font-sans)',
                    whiteSpace: 'pre-line' 
                  }}>
                    {info.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Side: Map */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '550px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '1px solid #eee'
            }}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.37446555135!2d74.18524431521798!3d31.391262981414436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff011036349d%3A0xe5a1400e93d9a9f!2sBahria%20Town%20Main%20Blvd%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1654321234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
