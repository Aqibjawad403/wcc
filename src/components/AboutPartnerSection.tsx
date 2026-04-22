"use client";

import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import BlobButton from "./BlobButton";

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
              fontSize: '18px',
              mb: 2,
              fontFamily: 'var(--font-sans)',
            }}>
              World Citizen Consultants proudly stands as your partner in global education,
              supporting Pakistani students at every stage of their study abroad journey.
              As an International Student Visa Consultant in Bahria Town Lahore, we focus on
              informed counseling, realistic options, and long-term academic value.
            </Typography>

            <Typography variant="body1" sx={{
              color: '#555',
              fontSize: '18px',
              mb: 4,
              fontFamily: 'var(--font-sans)',
            }}>
              From selecting reputable universities to preparing strong visa files,
              our approach is structured and student-centric. Families trust us for
              clarity, ethical guidance, and consistent follow-up. Choosing an
              experienced International Student Visa Consultant in Bahria Town
              Lahore means gaining access to global opportunities with confidence.
              At World Citizen Consultants bahria Town Lahore, an International
              Student Visa Consultant in Bahria Town Lahore becomes a reliable guide,
              not just a service provider.
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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 2 }}>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <BlobButton variant="solid" color={greenColor} style={{ width: '180px' }}>
                  View More
                </BlobButton>
              </Link>
              <BlobButton variant="solid" color={deepBlue} style={{ width: '180px' }}>
                Call Now
              </BlobButton>
            </Box>
          </Grid>

          {/* Right Side: Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', height: { xs: '450px', md: '650px' } }}>
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
                  src="/partnership/img 1.svg" // Using available images
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
              }}>
                <img
                  src="/partnership/img 2.svg" // Using available banner
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
