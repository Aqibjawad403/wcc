"use client";

import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";

interface LanguageInfoSectionProps {
  title: string;
  highlightText: string;
  description1: string;
  description2: string;
  image: string;
  reverse?: boolean;
  bgColor?: string;
}

export default function LanguageInfoSection({
  title,
  highlightText,
  description1,
  description2,
  image,
  reverse = false,
  bgColor = "#fff"
}: LanguageInfoSectionProps) {
  const deepBlue = '#03038C';
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: bgColor }}>
      <Container maxWidth="xl">
        <Grid 
          container 
          spacing={{ xs: 6, md: 10 }} 
          alignItems="center" 
          direction={reverse ? { xs: 'column-reverse', md: 'row-reverse' } : 'row'}
        >
          {/* Content Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: '600px', mx: reverse ? {md: 'auto', xs: 0} : 0 }}>
              <Typography variant="h2" sx={{
                fontWeight: 800,
                fontSize: { xs: '32px', md: '52px' },
                fontFamily: 'var(--font-heading)',
                color: '#1a1a1a',
                lineHeight: 1.1,
                mb: 3
              }}>
                {title}{" "}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  {highlightText}
                  <Box component="span" sx={{
                    position: 'absolute',
                    bottom: 8,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    bgcolor: greenColor,
                    borderRadius: '10px'
                  }} />
                </span>
              </Typography>

              <Typography variant="body1" sx={{ 
                color: '#555', 
                fontSize: '16px', 
                lineHeight: 1.6, 
                mb: 3,
                fontFamily: 'var(--font-sans)',
              }}>
                {description1}
              </Typography>

              <Typography variant="body1" sx={{ 
                color: '#555', 
                fontSize: '16px', 
                lineHeight: 1.6, 
                mb: 4,
                fontFamily: 'var(--font-sans)',
              }}>
                {description2}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button variant="contained" sx={{
                  bgcolor: greenColor,
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#05a805' }
                }}>
                  Talk to a Study Advisor
                </Button>
                <Button variant="contained" sx={{
                  bgcolor: '#000080', // Dark Blue
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#000066' }
                }}>
                  Call Now
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image Side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              position: 'relative', 
              height: { xs: '350px', md: '500px' },
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <Image 
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
