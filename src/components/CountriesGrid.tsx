"use client";

import { Box, Container, Typography, Grid } from "@mui/material";

const countries = [
  { name: "UK", flag: "https://flagcdn.com/w80/gb.png", image: "/top destinations/img 1.svg" },
  { name: "USA", flag: "https://flagcdn.com/w80/us.png", image: "/top destinations/img 2.svg" },
  { name: "Canada", flag: "https://flagcdn.com/w80/ca.png", image: "/top destinations/img 3.svg" },
  { name: "Australia", flag: "https://flagcdn.com/w80/au.png", image: "/top destinations/img 4.svg" },
  { name: "Ireland", flag: "https://flagcdn.com/w80/ie.png", image: "/top destinations/img 5.svg" },
  { name: "New Zealand", flag: "https://flagcdn.com/w80/nz.png", image: "/top destinations/img 6.svg" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png", image: "/top destinations/img 7.svg" },
  { name: "Italy", flag: "https://flagcdn.com/w80/it.png", image: "/top destinations/img 8.svg" },
  { name: "France", flag: "https://flagcdn.com/w80/fr.png", image: "/top destinations/img 9.svg" },
  { name: "Spain", flag: "https://flagcdn.com/w80/es.png", image: "/top destinations/img 10.svg" },
  { name: "Sweden", flag: "https://flagcdn.com/w80/se.png", image: "/top destinations/img 11.svg" },
  { name: "Finland", flag: "https://flagcdn.com/w80/fi.png", image: "/top destinations/img 12.svg" },
  { name: "Denmark", flag: "https://flagcdn.com/w80/dk.png", image: "/top destinations/img 13.svg" },
  { name: "Hungry", flag: "https://flagcdn.com/w80/hu.png", image: "/top destinations/img 14.svg" },
  { name: "Malta", flag: "https://flagcdn.com/w80/mt.png", image: "/top destinations/img 15.svg" },
  { name: "Lithaunia", flag: "https://flagcdn.com/w80/lt.png", image: "/top destinations/img 16.svg" },
  { name: "Latvia", flag: "https://flagcdn.com/w80/lv.png", image: "/top destinations/img 17.svg" },
  { name: "Cyprus", flag: "https://flagcdn.com/w80/cy.png", image: "/top destinations/img 18.svg" },
  { name: "Austria", flag: "https://flagcdn.com/w80/at.png", image: "/top destinations/img 19.svg" },
  { name: "Belgium", flag: "https://flagcdn.com/w80/be.png", image: "/top destinations/img 20.svg" },
  { name: "Romania", flag: "https://flagcdn.com/w80/ro.png", image: "/top destinations/img 21.svg" },
  { name: "China", flag: "https://flagcdn.com/w80/cn.png", image: "/top destinations/img 22.svg" },
  { name: "Russia", flag: "https://flagcdn.com/w80/ru.png", image: "/top destinations/img 23.svg" },
  { name: "Japan", flag: "https://flagcdn.com/w80/jp.png", image: "/top destinations/img 24.svg" },
  { name: "South Korea", flag: "https://flagcdn.com/w80/kr.png", image: "/top destinations/img 25.svg" },
  { name: "Georgia", flag: "https://flagcdn.com/w80/ge.png", image: "/top destinations/img 26.svg" },
  { name: "Dubai", flag: "https://flagcdn.com/w80/ae.png", image: "/top destinations/img 27.svg" },
  { name: "Saudia Arabia", flag: "https://flagcdn.com/w80/sa.png", image: "/top destinations/img 28.svg" },
  { name: "Malaysia", flag: "https://flagcdn.com/w80/my.png", image: "/top destinations/img 29.svg" },
  { name: "Turkey", flag: "https://flagcdn.com/w80/tr.png", image: "/top destinations/img 30.svg" },
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
                '&:hover .overlay': { bgcolor: '#03038C66' },
                '&:hover .bg-img': { transform: 'scale(1.1)' }
              }}>
                {/* Background Image */}
                <Box
                  className="bg-img"
                  sx={{
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.5s ease',
                    backgroundImage: `url('${country.image}')`,
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
                    bgcolor: '#03038C4D',
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
