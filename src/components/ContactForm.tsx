"use client";

import { Box, Container, Typography, Grid, TextField, Button } from "@mui/material";

export default function ContactForm() {
  const deepBlue = '#03038C';

  return (
    <Box sx={{ bgcolor: '#F5F7FF', py: 12 }}>
      {/* Form Section */}
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '32px', md: '48px' },
            fontFamily: 'var(--font-heading)',
            color: '#1a1a1a',
            mb: 2
          }}>
            Let's Get in Touch
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '18px' }}>
            Do you have questions or want to more information?
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="First Name" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="Second Name" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="Phone Number" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="Your E-mail" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="Field of Interest" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField fullWidth placeholder="Add Country" variant="outlined" sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField fullWidth multiline rows={6} placeholder="Write your comment..." sx={{
              bgcolor: '#fff', borderRadius: '10px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
            }} />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button variant="contained" sx={{
              bgcolor: deepBlue,
              color: '#fff',
              px: 6,
              py: 2,
              borderRadius: '30px',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '16px',
              mt: 2,
              '&:hover': { bgcolor: '#02026b' }
            }}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
