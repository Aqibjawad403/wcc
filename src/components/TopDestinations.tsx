"use client";

import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";

const destinations = [
  { name: "United Kingdom (UK)", flag: "https://flagcdn.com/w80/gb.png", image: "/images/service1.jpg" },
  { name: "United State of America (USA)", flag: "https://flagcdn.com/w80/us.png", image: "/images/service2.jpg" },
  { name: "Canada (CA)", flag: "https://flagcdn.com/w80/ca.png", image: "/images/service3.jpg" },
  { name: "Australia", flag: "https://flagcdn.com/w80/au.png", image: "/images/uk-banner.jpg" },
  { name: "Cyprus", flag: "https://flagcdn.com/w80/cy.png", image: "/images/service1.jpg" },
  { name: "North Cyprus", flag: "https://flagcdn.com/w80/cy.png", image: "/images/service2.jpg" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png", image: "/images/service3.jpg" },
  { name: "Malta", flag: "https://flagcdn.com/w80/mt.png", image: "/images/uk-banner.jpg" },
];

export default function TopDestinations() {
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F5F7FF' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '32px', md: '48px' },
            fontFamily: 'var(--font-heading)',
            color: '#1a1a1a',
            mb: 3,
            lineHeight: 1.2
          }}>
            Top universities to study abroad for <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Pakistani students worldwide
              <Box component="span" sx={{
                position: 'absolute',
                bottom: 4,
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
            fontSize: '16px',
            lineHeight: 1.6,
            maxWidth: '850px',
            mx: 'auto',
            fontFamily: 'var(--font-sans)',
            mb: 6
          }}>
            Explore top universities to study abroad for Pakistani students across leading countries, offering quality education, affordable options, visa guidance, scholarships, career pathways, and trusted counseling that helps students choose the right destination for long term academic and professional growth.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {destinations.map((city, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover .destination-overlay': { bgcolor: 'rgba(0,0,0,0.3)' },
                '&:hover .destination-img': { transform: 'scale(1.1)' }
              }}>
                {/* Background Image */}
                <Box
                  className="destination-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.5s ease',
                    backgroundImage: `url(${city.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay */}
                <Box 
                  className="destination-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.15)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 2.5,
                    transition: 'background-color 0.3s'
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    width: '100%' 
                  }}>
                    <Typography sx={{ 
                      color: '#fff', 
                      fontWeight: 700, 
                      fontSize: '16px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {city.name}
                    </Typography>
                    <Box sx={{ 
                      width: '32px', 
                      height: '20px', 
                      borderRadius: '4px', 
                      overflow: 'hidden',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      <img 
                        src={city.flag} 
                        alt={`${city.name} flag`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            color: '#fff',
            px: 6,
            py: 1.5,
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '16px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#05a805' }
          }}>
            View More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
