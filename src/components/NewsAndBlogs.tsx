"use client";

import { Box, Container, Typography, Grid, Button, Chip, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "All", "Study Abroad Guides", "Education Consultants", "Scholarship", 
  "Study in Australia", "Student Life Abroad", "Career & Opportunities", 
  "Study in USA", "Study in UK", "Study in Turkey"
];

const blogs = [
  {
    title: "Top 5 Countries for International Students in 2025",
    date: "June 15, 2025",
    image: "/images/service1.jpg",
    category: "Study Abroad Guides"
  },
  {
    title: "How to Choose the Right University Abroad",
    date: "June 15, 2025",
    image: "/images/service2.jpg",
    category: "Education Consultants"
  },
  {
    title: "The Step-by-Step Guide to Studying Abroad",
    date: "June 15, 2025",
    image: "/images/service3.jpg",
    category: "Scholarship"
  }
];

export default function NewsAndBlogs() {
  const [activeTab, setActiveTab] = useState("All");
  const greenColor = '#06C106';

  return (
    <Box sx={{ py: 10, bgcolor: '#F8F9FF' }} className="animate-fade-in">
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 6 }}>
          <Box>
            <Typography variant="h2" sx={{
              fontWeight: 800,
              fontSize: { xs: '32px', md: '48px' },
              fontFamily: 'var(--font-heading)',
              mb: 1
            }}>
              Our News & <span style={{ position: 'relative' }}>
                Blogs
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
            <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', fontSize: '14px' }}>
              Our news and blog provide Trusted update for international Student Visa helping Pakistani students stay informed confident and prepared.
            </Typography>
          </Box>
          <Button variant="contained" sx={{
            bgcolor: greenColor,
            borderRadius: '6px',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px',
            px: 4,
            py: 1.5,
            '&:hover': { bgcolor: '#05a805' }
          }}>
            View More
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 6, alignItems: 'center' }}>
          {categories.map((cat) => (
            <Box key={cat} sx={{ display: 'flex', alignItems: 'center' }}>
              <Chip
                label={cat}
                onClick={() => setActiveTab(cat)}
                sx={{
                  bgcolor: activeTab === cat ? greenColor : '#fff',
                  color: activeTab === cat ? '#fff' : '#666',
                  border: activeTab === cat ? 'none' : '1px solid #eee',
                  fontWeight: 600,
                  fontSize: '14px',
                  height: '40px',
                  px: 1,
                  '&:hover': {
                    bgcolor: activeTab === cat ? '#05a805' : '#f0f0f0',
                  }
                }}
              />
              {cat === "All" && (
                <Box sx={{ width: '1.5px', height: '30px', bgcolor: '#ccc', ml: 2, mr: 1 }} />
              )}
            </Box>
          ))}
        </Box>

        <Grid container spacing={4}>
          {blogs.map((blog, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper elevation={0} sx={{ 
                bgcolor: 'transparent',
                '&:hover .blog-image': { transform: 'scale(1.05)' }
              }}>
                <Box sx={{ 
                  position: 'relative', 
                  height: '240px', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  mb: 2
                 }}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="blog-image"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                </Box>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  fontSize: '22px', 
                  mb: 1, 
                  cursor: 'pointer',
                  '&:hover': { color: greenColor }
                }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#999', fontSize: '14px' }}>
                  {blog.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
