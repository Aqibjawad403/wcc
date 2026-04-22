"use client";

import Link from "next/link";
import { Container } from "@mui/material";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const socialLinks = [
  { name: "Pinterest", icon: "/social icons/pinterest.svg", url: "#" },
  { name: "TikTok", icon: "/social icons/tiktok.svg", url: "#" },
  { name: "Facebook", icon: "/social icons/fb.svg", url: "#" },
  { name: "Twitter", icon: "/social icons/twitter.svg", url: "#" },
  { name: "Instagram", icon: "/social icons/insta.svg", url: "#" },
  { name: "YouTube", icon: "/social icons/youtube.svg", url: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "nav-link active" : "nav-link";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header style={{ height: "140px", position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Top Bar */}
      <div className="top-bar">
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          {/* Social Icons - Left Side */}
          <div className="social-icons">
            {socialLinks.map((social) => (
              <SocialIcon key={social.name} src={social.icon} alt={social.name} url={social.url} />
            ))}
          </div>

          {/* Info - Right Side */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="info-item">
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url("/social icons/schedule.svg")',
                  maskImage: 'url("/social icons/schedule.svg")',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center'
                }}
              />
              Mon-Sat: 10am - 7pm, Pakistan
            </div>
            <div style={{ width: '1px', height: '14px', background: '#ccc' }}></div>
            <div className="info-item">
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url("/social icons/distance.svg")',
                  maskImage: 'url("/social icons/distance.svg")',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center'
                }}
              />
              1st Floor, 57 Quaid Block near Imtiaz Mega Mall Bahria Town, Lahore.
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            {/* Logo */}
            <Link href="/" className="logo-container">
              <Image
                src="/logos/logo1.svg"
                alt="World Citizen Logo"
                width={293}
                height={60}
                priority
                className="navbar-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link href="/" className={isActive("/")}>Home</Link>
              <Link href="/top-countries" className={isActive("/top-countries")}>Study Destinations</Link>
              <Link href="/universities" className={isActive("/universities")}>Partner Universities</Link>
              <Link href="/services" className={isActive("/services")}>Services</Link>
              <Link href="/language-test" className={isActive("/language-test")}>Language Test</Link>
              <Link href="/about" className={isActive("/about")}>About Us</Link>
              <Link href="/blogs" className={isActive("/blogs")}>Blogs</Link>
              <Link href="/contact" className={isActive("/contact")}>Contact Us</Link>
            </nav>

            {/* Desktop Button */}
            <div className="desktop-btn">
              <Link href="#" className="btn-appointment">
                Book an Appointment
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="mobile-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </Container>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <nav>
            <Link href="/" className={isActive("/")} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/top-countries" className={isActive("/top-countries")} onClick={() => setIsMobileMenuOpen(false)}>Study Destinations</Link>
            <Link href="/universities" className={isActive("/universities")} onClick={() => setIsMobileMenuOpen(false)}>Partner Universities</Link>
            <Link href="/services" className={isActive("/services")} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/language-test" className={isActive("/language-test")} onClick={() => setIsMobileMenuOpen(false)}>Language Test</Link>
            <Link href="/about" className={isActive("/about")} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/blogs" className={isActive("/blogs")} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
            <Link href="/contact" className={isActive("/contact")} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="#" className="btn-appointment mobile-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Book an Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <Link href={url} target="_blank" className="social-icon">
      <div
        className="icon-mask"
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'currentColor',
          WebkitMaskImage: `url("${src}")`,
          maskImage: `url("${src}")`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center'
        }}
      />
    </Link>
  );
}




