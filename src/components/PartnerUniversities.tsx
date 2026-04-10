"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface University {
  name: string;
  logo: string;
}

interface CountryPartner {
  country: string;
  universities: University[];
}

const partners: CountryPartner[] = [
  {
    country: "United Kingdom (UK)",
    universities: [
      { name: "Ulster University", logo: "https://logo.clearbit.com/ulster.ac.uk" },
      { name: "University of Sunderland", logo: "https://logo.clearbit.com/sunderland.ac.uk" },
      { name: "University of Hertfordshire", logo: "https://logo.clearbit.com/herts.ac.uk" },
      { name: "University of East London", logo: "https://logo.clearbit.com/uel.ac.uk" },
      { name: "Bangor University", logo: "https://logo.clearbit.com/bangor.ac.uk" },
      { name: "University of Hull", logo: "https://logo.clearbit.com/hull.ac.uk" },
      { name: "Glasgow Caledonian University", logo: "https://logo.clearbit.com/gcu.ac.uk" },
      { name: "BPP University", logo: "https://logo.clearbit.com/bpp.com" },
      { name: "Birmingham City University", logo: "https://logo.clearbit.com/bcu.ac.uk" },
      { name: "The University of Law", logo: "https://logo.clearbit.com/law.ac.uk" },
      { name: "University of Gloucestershire", logo: "https://logo.clearbit.com/glos.ac.uk" },
      { name: "University of Wolverhampton", logo: "https://logo.clearbit.com/wlv.ac.uk" },
      { name: "University of Lancashire", logo: "https://logo.clearbit.com/uclan.ac.uk" },
      { name: "Edinburgh Napier University", logo: "https://logo.clearbit.com/napier.ac.uk" },
      { name: "University of Derby", logo: "https://logo.clearbit.com/derby.ac.uk" },
      { name: "UWE Bristol", logo: "https://logo.clearbit.com/uwe.ac.uk" },
      { name: "University of Chester", logo: "https://logo.clearbit.com/chester.ac.uk" },
      { name: "Manchester Metropolitan University", logo: "https://logo.clearbit.com/mmu.ac.uk" },
      { name: "Nottingham Trent University", logo: "https://logo.clearbit.com/ntu.ac.uk" },
      { name: "London Metropolitan University", logo: "https://logo.clearbit.com/londonmet.ac.uk" },
      { name: "University of Huddersfield", logo: "https://logo.clearbit.com/hud.ac.uk" },
      { name: "Coventry University", logo: "https://logo.clearbit.com/coventry.ac.uk" },
    ]
  },
  {
    country: "United States of America (USA)",
    universities: [
      { name: "Northeastern University", logo: "https://logo.clearbit.com/northeastern.edu" },
      { name: "Arizona State University", logo: "https://logo.clearbit.com/asu.edu" },
      { name: "University of South Florida", logo: "https://logo.clearbit.com/usf.edu" },
      { name: "Oregon State University", logo: "https://logo.clearbit.com/oregonstate.edu" },
      { name: "George Mason University", logo: "https://logo.clearbit.com/gmu.edu" },
    ]
  },
  {
    country: "Canada (CA)",
    universities: [
      { name: "University of Toronto", logo: "https://logo.clearbit.com/utoronto.ca" },
      { name: "McGill University", logo: "https://logo.clearbit.com/mcgill.ca" },
      { name: "University of British Columbia", logo: "https://logo.clearbit.com/ubc.ca" },
      { name: "York University", logo: "https://logo.clearbit.com/yorku.ca" },
    ]
  },
  {
    country: "Australia (AU)",
    universities: [
      { name: "University of Melbourne", logo: "https://logo.clearbit.com/unimelb.edu.au" },
      { name: "University of Sydney", logo: "https://logo.clearbit.com/sydney.edu.au" },
      { name: "Monash University", logo: "https://logo.clearbit.com/monash.edu" },
      { name: "University of Queensland", logo: "https://logo.clearbit.com/uq.edu.au" },
    ]
  }
];

export default function PartnerUniversities() {
  return (
    <Box sx={{ bgcolor: '#fff', pb: 10 }}>
      {/* Banner Section matching the requested design */}
      <Box sx={{ 
        bgcolor: '#f2f2f2', 
        height: { xs: 'auto', md: '360px' }, 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        mb: 8,
        py: { xs: 6, md: 0 }
      }}>
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ maxWidth: '650px', zIndex: 1, textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '32px', sm: '42px', md: '52px' }, 
              fontWeight: 800, 
              color: '#1a1a1a',
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)'
            }}>
              Our Partner Global <br />
              Universities/Colleges
            </Typography>
          </Box>
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            height: { xs: '250px', md: '360px' },
            position: 'relative'
          }}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                clipPath: { md: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }
              }}
              alt="Partner Universities Banner"
            />
          </Box>
        </Container>
      </Box>

      {/* Grid Section */}
      <Container maxWidth="xl">
        {partners.map((group, idx) => (
          <Box key={idx} sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ 
              mb: 5, 
              fontWeight: 700, 
              color: '#1a1a1a',
              fontSize: { xs: '24px', md: '32px' },
              fontFamily: 'var(--font-heading)',
              borderBottom: '2px solid #06C106',
              display: 'inline-block',
              pb: 1
            }}>
              {group.country}
            </Typography>

            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '24px',
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {group.universities.map((uni, uniIdx) => (
                <Box key={uniIdx} sx={{
                  width: '271px',
                  height: '136px',
                  bgcolor: '#fff',
                  border: '0.6px solid #E0E0E0',
                  boxShadow: '0px 0px 10px 0px #00000014',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  '&:hover': {
                    border: '0.5px solid #03038C',
                    boxShadow: '0px 0px 10px 0px #00000040',
                    transform: 'translateY(-6px)'
                  }
                }}>
                  <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={200}
                      height={80}
                      style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
                      unoptimized
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
