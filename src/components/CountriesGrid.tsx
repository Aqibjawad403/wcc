"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

const countries = [
  { name: "United Kingdom (UK)", flag: "https://flagcdn.com/w80/gb.png", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800" },
  { name: "United State of America (USA)", flag: "https://flagcdn.com/w80/us.png", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800" },
  { name: "Canada (CA)", flag: "https://flagcdn.com/w80/ca.png", image: "https://images.unsplash.com/photo-1517935703635-2717355c21e1?q=80&w=800" },
  { name: "Australia", flag: "https://flagcdn.com/w80/au.png", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800" },
  { name: "Cyprus", flag: "https://flagcdn.com/w80/cy.png", image: "https://images.unsplash.com/photo-1563297122-f0da9976451e?q=80&w=800" },
  { name: "North Cyprus", flag: "https://flagcdn.com/w80/cy.png", image: "https://images.unsplash.com/photo-1620072049180-2a32197607a9?q=80&w=800" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800" },
  { name: "Malta", flag: "https://flagcdn.com/w80/mt.png", image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800" },
  { name: "France", flag: "https://flagcdn.com/w80/fr.png", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800" },
  { name: "Ireland", flag: "https://flagcdn.com/w80/ie.png", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800" },
  { name: "Sweden", flag: "https://flagcdn.com/w80/se.png", image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=800" },
  { name: "Finland", flag: "https://flagcdn.com/w80/fi.png", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800" },
  { name: "Hungary", flag: "https://flagcdn.com/w80/hu.png", image: "https://images.unsplash.com/photo-1516245556508-7d9ec6a4eb8a?q=80&w=800" },
  { name: "Spain", flag: "https://flagcdn.com/w80/es.png", image: "https://images.unsplash.com/photo-1543783232-4747447fe7d5?q=80&w=800" },
  { name: "Denmark", flag: "https://flagcdn.com/w80/dk.png", image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=800" },
  { name: "Lithuania", flag: "https://flagcdn.com/w80/lt.png", image: "https://images.unsplash.com/photo-1552554623-1d8975a5e3df?q=80&w=800" },
  { name: "Latvia", flag: "https://flagcdn.com/w80/lv.png", image: "https://images.unsplash.com/photo-1596724806080-6060c5ea9331?q=80&w=800" },
  { name: "China", flag: "https://flagcdn.com/w80/cn.png", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800" },
  { name: "Georgia", flag: "https://flagcdn.com/w80/ge.png", image: "https://images.unsplash.com/photo-1518005020251-5fb28d2207de?q=80&w=800" },
  { name: "Russia", flag: "https://flagcdn.com/w80/ru.png", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800" },
  { name: "Austria", flag: "https://flagcdn.com/w80/at.png", image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=800" },
  { name: "Belgium", flag: "https://flagcdn.com/w80/be.png", image: "https://images.unsplash.com/photo-1513581166391-8b7a96d750b2?q=80&w=800" },
  { name: "Dubai (UAE)", flag: "https://flagcdn.com/w80/ae.png", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800" },
  { name: "Malaysia", flag: "https://flagcdn.com/w80/my.png", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?q=80&w=800" },
  { name: "Turkey", flag: "https://flagcdn.com/w80/tr.png", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800" },
];

export default function CountriesGrid() {
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '32px', md: '48px' },
            fontFamily: 'var(--font-heading)',
            color: '#1a1a1a',
            mb: 2,
            lineHeight: 1.2
          }}>
            Top Countries to <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Study Abroad
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna 
            dui, pellentesque eget leo eu, convallis vulputate odio.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {countries.map((country, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{
                position: 'relative',
                height: '220px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                },
                '&:hover .overlay': { bgcolor: 'rgba(0,0,0,0.4)' },
                '&:hover .bg-img': { transform: 'scale(1.1)' }
              }}>
                {/* Background Image */}
                <Box
                  className="bg-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.5s ease',
                    backgroundImage: `url(${country.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay */}
                <Box 
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.25)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 2,
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
                      fontSize: '15px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                      fontFamily: 'var(--font-sans)'
                    }}>
                      {country.name}
                    </Typography>
                    <Box sx={{ 
                      width: '28px', 
                      height: '18px', 
                      borderRadius: '2px', 
                      overflow: 'hidden',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      flexShrink: 0,
                      ml: 1
                    }}>
                      <img 
                        src={country.flag} 
                        alt={`${country.name} flag`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
