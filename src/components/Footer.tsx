"use client";

import { Box, Container, Typography, Grid, Link, Stack, IconButton, Zoom } from "@mui/material";
import { useState, useEffect } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
  FaArrowUp
} from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import NextLink from "next/link";

export default function Footer() {
  const footerBgColor = '#00008b'; // Deep Blue
  const greenColor = '#06C106'; // Specified Green

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      if (scrolled > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="footer" sx={{ bgcolor: footerBgColor, color: '#fff', pt: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Background World Map Overlay - Optional if image exists, otherwise pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("/logos/world-map.svg")', // Placeholder for world map overlay
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, mb: 6 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 6, md: 4 },
          alignItems: 'flex-start'
        }}>
          {/* Logo & Description */}
          <Box sx={{ width: { xs: '100%', md: '30%' }, maxWidth: { md: '350px' } }}>
            <Box mb={3}>
              <Image
                src="/logos/footer.svg"
                alt="World Citizen"
                width={341}
                height={70}
                style={{ objectFit: 'contain' }} // Makes logo white for visibility on blue
              />
            </Box>
            <Typography variant="body2" sx={{ textAlign: "justify", color: 'white', mb: 4, lineHeight: 1.8, fontFamily: 'var(--font-sans)' }}>
              World Citizen Consultants Bahria Town Lahore, guides students through destination selection, university choice, visa documentation, and cultural adaptation, offering personalized support that ensures informed decisions and a smooth, confident international education journey.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff' }}>
              Office Timings:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: '50%', p: '6px', display: 'flex', color: footerBgColor }}>
                <MdOutlineWatchLater size={20} />
              </Box>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
                Mon-Sat: 10am - 7pm (PKT)
              </Typography>
            </Box>
          </Box>

          {/* Top Countries */}
          <Box sx={{ width: { xs: '100%', sm: '45%', md: 'auto' } }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff' }}>
              Top Countries
            </Typography>
            <Stack spacing={1.5}>
              {['United Kingdom', 'Canada', 'Australia', 'Turkey', 'Denmark', 'Sweden', 'France'].map((item) => (
                <Link key={item} component={NextLink} href="/top-countries" underline="none" sx={{ color: '#fff', fontSize: '14px', '&:hover': { color: greenColor }, fontFamily: 'var(--font-sans)' }}>
                  {item}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Useful Links */}
          <Box sx={{ width: { xs: '100%', sm: '45%', md: 'auto' } }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff' }}>
              Useful Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Contact Us', link: '/contact' },
                { name: 'Blogs', link: '/blogs' },
                { name: 'Book an Appointment', link: '#' },
                { name: 'Top Countries', link: '/top-countries' }
              ].map((item) => (
                <Link key={item.name} component={NextLink} href={item.link} underline="none" sx={{ color: '#fff', fontSize: '14px', '&:hover': { color: greenColor }, fontFamily: 'var(--font-sans)' }}>
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Contact Us */}
          <Box sx={{ width: { xs: '100%', md: '30%' }, maxWidth: { md: '320px' } }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff' }}>
              Contact Us
            </Typography>
            <Stack spacing={2.5}>
              {/* Phone */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ bgcolor: '#fff', borderRadius: '50%', minWidth: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/footer/call.svg" alt="Phone" width={18} height={18} />
                </Box>
                <Typography variant="body2" sx={{ color: 'white', lineHeight: 1.4, fontFamily: 'var(--font-sans)' }}>
                  +92 333 0630064 | +92 334 1881851 <br />
                  +92 330 6660635
                </Typography>
              </Box>

              {/* Website */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ bgcolor: '#fff', borderRadius: '50%', minWidth: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/footer/website.svg" alt="Website" width={18} height={18} />
                </Box>
                <Link href="https://www.worldcitizenconsultants.com" underline="none" sx={{ color: '#fff', '&:hover': { color: greenColor }, fontFamily: 'var(--font-sans)' }}>
                  www.worldcitizenconsultants.com
                </Link>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ bgcolor: '#fff', borderRadius: '50%', minWidth: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/footer/mail.svg" alt="Email" width={18} height={18} />
                </Box>
                <Link href="mailto:info@worldcitizenconsultants.com" underline="none" sx={{ color: '#fff', '&:hover': { color: greenColor }, fontFamily: 'var(--font-sans)' }}>
                  info@worldcitizenconsultants.com
                </Link>
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ bgcolor: '#fff', borderRadius: '50%', minWidth: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src="/footer/location_on.svg" alt="Location" width={18} height={18} />
                </Box>
                <Typography variant="body2" sx={{ color: 'white', fontFamily: 'var(--font-sans)', maxWidth: '100%' }}>
                  1st Floor, 57 Quaid Block near Imtiaz Mega Mall Bahria Town, Lahore.
                </Typography>
              </Box>
            </Stack>

            <Typography variant="subtitle2" sx={{ mt: 4, mb: 1.5, fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#fff' }}>
              Follow us on:
            </Typography>
            <Stack direction="row" spacing={1}>
              {[
                { icon: FaTwitter, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaFacebookF, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaPinterestP, href: '#' },
                { icon: FaTiktok, href: '#' }
              ].map((social, i) => (
                <IconButton
                  key={i}
                  sx={{
                    bgcolor: '#fff',
                    color: footerBgColor,
                    width: '32px',
                    height: '32px',
                    '&:hover': { bgcolor: greenColor, color: '#fff' }
                  }}
                >
                  <social.icon size={16} />
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* Bottom Copyright Bar */}
      <Box sx={{ bgcolor: greenColor, py: 1.5, position: 'relative' }}>
        <Container maxWidth="xl">
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#fff', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
            © 2025 | World Citizen Consultants | All rights reserved.
          </Typography>
        </Container>
      </Box>
      {/* Scroll to Top Button - Simplified rendering to fix visibility issues */}
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            bgcolor: '#ffffff !important', // Force white background
            color: '#06C106 !important',   // Force green arrow color
            width: '60px',
            height: '60px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            zIndex: 99999,
            '&:hover': {
              transform: 'translateY(-5px) scale(1.05)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            },
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          <FaArrowUp size={26} />
        </IconButton>
      )}
    </Box>
  );
}
