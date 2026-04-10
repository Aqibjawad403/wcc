"use client";

import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  backgroundImage?: string;
}

export default function PageBanner({ title, backgroundImage }: PageBannerProps) {
  const bg = backgroundImage || "/home/homeBanner.svg";

  return (
    <Box sx={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${bg}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      pt: { xs: 20, md: 25 },
      pb: { xs: 10, md: 12 },
      color: '#fff',
      textAlign: 'left' // Align left as per screenshot
    }}>
      <Container maxWidth="xl">
        {/* Main Title */}
        <Typography variant="h1" sx={{
          fontWeight: 700,
          fontSize: { xs: '42px', md: '58px' }, // Exact size
          fontFamily: 'var(--font-gabarito)', // Exact font
          lineHeight: '100%', // Exact 
          letterSpacing: '0%',
          mb: 1
        }}>
          {title}
        </Typography>

        {/* Breadcrumb */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, opacity: 0.9 }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px', fontFamily: 'var(--font-dm-sans)' }}>
            Home
          </Link>
          <Typography sx={{ fontSize: '16px', color: '#fff', opacity: 0.8 }}>
            &gt;
          </Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#fff', fontFamily: 'var(--font-dm-sans)' }}>
            {title}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
