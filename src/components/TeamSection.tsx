"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const teamMembers = [
  {
    name: "Samar Abbas",
    role: "Student Counsellor",
    image: "/images/testimonial1.jpg", 
    isSilhouette: false,
    buttonType: 'white'
  },
  {
    name: "Hamid Ali",
    role: "Admission Manager & Counsellor",
    image: "/images/testimonial2.jpg",
    isSilhouette: false,
    buttonType: 'white'
  },
  {
    name: "Shaqeeb Aziz",
    role: "Counsellor & Recruitment Officer",
    image: "/images/testimonial3.jpg",
    isSilhouette: false,
    buttonType: 'blue'
  },
  {
    name: "Miss Fatima",
    role: "Professional Visa Consultant",
    image: "/images/service1.jpg", 
    isSilhouette: true,
    buttonType: 'white'
  },
];

export default function TeamSection() {
  const headerBlue = '#03038C';
  const sectionBg = '#F8F9FE';
  const iconGreen = '#06C106';

  return (
    <Box sx={{ py: 12, bgcolor: sectionBg }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 800,
            color: '#1a1a1a',
            fontSize: { xs: '32px', md: '48px' },
            mb: 8,
            fontFamily: 'var(--font-heading)'
          }}
        >
          See Us in <span style={{ position: 'relative' }}>
            Action
            <Box component="span" sx={{
              position: 'absolute',
              bottom: 2,
              left: 0,
              width: '100%',
              height: '5px',
              bgcolor: iconGreen,
              borderRadius: '10px'
            }} />
          </span>
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '420px',
                  width: '100%',
                  cursor: 'pointer',
                  '&:hover .member-img': { transform: 'scale(1.05)' }
                }}
              >
                {/* Main Card Wrapper with Cutout */}
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    bgcolor: member.isSilhouette ? '#00AEEF' : '#eee',
                    background: member.isSilhouette ? 'linear-gradient(135deg, #00AEEF 10%, #03038C 90%)' : 'none',
                    // This creates the top-right concave cutout
                    maskImage: 'radial-gradient(circle at 100% 0, transparent 45px, black 46px)',
                    WebkitMaskImage: 'radial-gradient(circle at 100% 0, transparent 45px, black 46px)',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="member-img"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                      opacity: member.isSilhouette ? 0.3 : 1
                    }}
                  />
                  {/* Silhouette Content IF needed */}
                  {member.isSilhouette && (
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      height: '80%', 
                      display: 'flex', 
                      alignItems: 'flex-end', 
                      justifyContent: 'center',
                      opacity: 0.8
                    }}>
                      {/* Using a person silhouette placeholder logic */}
                    </Box>
                  )}

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, #03038C 0%, rgba(3, 3, 140, 0.4) 30%, rgba(3, 3, 140, 0) 100%)',
                      zIndex: 1
                    }}
                  />

                  {/* Text and Icons Layer */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '25px',
                      left: '25px',
                      right: '25px',
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '24px',
                        fontFamily: 'var(--font-heading)',
                        mb: 0.5
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.86)',
                        fontSize: '14px',
                        fontWeight: 500,
                        mb: 2.5
                      }}
                    >
                      {member.role}
                    </Typography>

                    {/* Social Icons (Always Visible in this design) */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <SocialIcon Icon={FaPhoneAlt} bg={iconGreen} />
                      <SocialIcon Icon={FaEnvelope} bg={iconGreen} />
                      <SocialIcon Icon={FaInstagram} bg={iconGreen} />
                      <SocialIcon Icon={FaFacebookF} bg={iconGreen} />
                    </Box>
                  </Box>
                </Box>

                {/* Top-Right Button (Outside the cutout container for cleaner look) */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    bgcolor: member.buttonType === 'blue' ? headerBlue : '#fff',
                    color: member.buttonType === 'blue' ? '#fff' : headerBlue,
                    border: member.buttonType === 'blue' ? 'none' : '1.5px solid #eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.1) rotate(10deg)' }
                  }}
                >
                  <GoArrowUpRight size={26} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function SocialIcon({ Icon, bg }: { Icon: any, bg: string }) {
  return (
    <Box
      sx={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        bgcolor: bg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        transition: 'all 0.2s ease',
        '&:hover': { 
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)' 
        }
      }}
    >
      <Icon />
    </Box>
  );
}
