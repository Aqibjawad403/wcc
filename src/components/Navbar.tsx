"use client";

import Link from "next/link";
import {
  FaPinterestP,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { MdOutlineWatchLater, MdLocationOn } from "react-icons/md";
import { Container } from "@mui/material";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Top Bar */}
      <div className="top-bar">
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Social Icons - Left Side */}
          <div className="social-icons">
            <SocialIcon Icon={FaPinterestP} />
            <SocialIcon Icon={FaTiktok} />
            <SocialIcon Icon={FaFacebookF} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaInstagram} />
            <SocialIcon Icon={FaYoutube} />
          </div>

          {/* Info - Right Side */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div className="info-item">
              <MdOutlineWatchLater style={{ fontSize: '16px' }} />
              Mon-Sat: 10am - 7pm, Pakistan
            </div>
            <div style={{ width: '1px', height: '14px', background: '#ccc' }}></div>
            <div className="info-item">
              <MdLocationOn style={{ fontSize: '16px' }} />
              1st Floor, 57 Quaid Block near Imtiaz Mega Mall Bahria Town, Lahore.
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Container maxWidth="xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Logo */}
            <Link href="/" className="logo-container">
              <Image
                src="/logos/logo1.svg"
                alt="World Citizen Logo"
                width={250}
                height={55}
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

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <div className="social-icon">
      <Icon />
    </div>
  );
}
