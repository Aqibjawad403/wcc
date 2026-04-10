"use client";

import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const platforms = ["Instagram", "TikTok", "Youtube", "Facebook"];

const videos = [
  { image: "/images/service4.jpg" },
  { image: "/images/service5.jpg" },
  { image: "/images/service6.jpg" },
  { image: "/images/service7.jpg" },
];

export default function SocialAction() {
  const [activeTab, setActiveTab] = useState("Instagram");
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 10, bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '32px', md: '48px' },
            fontFamily: 'var(--font-heading)',
            display: 'inline-block',
            position: 'relative',
            mb: 4
          }}>
            See Us in <span style={{ position: 'relative' }}>
              Action
              <Box component="span" sx={{
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: '100%',
                height: '5px',
                bgcolor: greenColor,
                borderRadius: '10px'
              }} />
            </span>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 6 }}>
            {platforms.map((plat) => (
              <Chip
                key={plat}
                label={plat}
                onClick={() => setActiveTab(plat)}
                sx={{
                  bgcolor: activeTab === plat ? greenColor : '#f5f5f5',
                  color: activeTab === plat ? '#fff' : '#666',
                  fontWeight: 600,
                  fontSize: '12px',
                  height: '32px',
                  px: 1,
                  '&:hover': {
                    bgcolor: activeTab === plat ? '#05a805' : '#eee',
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={2}>
          {videos.map((vid, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{
                position: 'relative',
                height: '350px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover .play-btn': { transform: 'translate(-50%, -50%) scale(1.1)' },
                '&:hover img': { transform: 'scale(1.05)' }
              }}>
                <Image
                  src={vid.image}
                  alt="Social Action"
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                {/* Overlay for play button */}
                <Box
                  className="play-btn"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60px',
                    height: '60px',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    zIndex: 2
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="currentColor" />
                  </svg>
                </Box>
                {/* Bottom Gradient */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                  zIndex: 1
                }} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            px: 4,
            py: 1.2,
            borderRadius: '6px',
            textTransform: 'none',
            fontWeight: 700,
            '&:hover': { bgcolor: '#05a805' }
          }}>
            View on Instagram
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
