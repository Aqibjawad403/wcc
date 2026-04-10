"use client";

import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const tableData = [
  { no: "01.", country: "United Kingdom (UK)", tests: "IELTS, PTE, Duolingo, LanguageCert, Cambridge" },
  { no: "02.", country: "United States of America", tests: "TOEFL, IELTS, Duolingo, PTE" },
  { no: "03.", country: "Canada", tests: "IELTS, PTE, TOEFL" },
  { no: "04.", country: "Australia", tests: "IELTS, PTE, OET" },
  { no: "05.", country: "Cyprus / North Cyprus", tests: "IELTS, PTE, TOEFL" },
  { no: "06.", country: "Germany", tests: "IELTS, TOEFL, PTE" },
  { no: "07.", country: "Malta", tests: "IELTS, PTE, TOEFL" },
  { no: "08.", country: "France", tests: "IELTS, TOEFL" },
  { no: "09.", country: "Ireland", tests: "IELTS, PTE" },
  { no: "10.", country: "Sweden", tests: "IELTS, TOEFL, PTE" },
  { no: "11.", country: "Finland", tests: "IELTS, TOEFL, PTE" },
  { no: "12.", country: "Hungary", tests: "IELTS, TOEFL" },
  { no: "13.", country: "Spain", tests: "IELTS, TOEFL, PTE" },
  { no: "14.", country: "Denmark", tests: "IELTS, TOEFL" },
  { no: "15.", country: "Lithuania", tests: "IELTS, TOEFL" },
  { no: "16.", country: "Latvia", tests: "IELTS, TOEFL" },
  { no: "17.", country: "China", tests: "IELTS, TOEFL" },
  { no: "18.", country: "Georgia", tests: "IELTS, TOEFL" },
  { no: "19.", country: "Russia", tests: "IELTS, TOEFL" },
  { no: "20.", country: "Austria", tests: "IELTS, TOEFL" },
  { no: "21.", country: "Belgium", tests: "IELTS, TOEFL" },
  { no: "22.", country: "United Arab Emirate UAE (Dubai)", tests: "IELTS, PTE, TOEFL, ELLT" },
  { no: "23.", country: "Malaysia", tests: "IELTS, PTE, TOEFL" },
  { no: "24.", country: "Turkey", tests: "IELTS, PTE, TOEFL" }
];

export default function TestComparisonTable() {
  const greenColor = '#06C106';
  const tableHeaderColor = '#000080'; // Dark Blue

  return (
    <Box sx={{ py: 12, bgcolor: '#fbfcfe' }}>
      <Container maxWidth="xl">
        {/* Heading Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{
            fontWeight: 800,
            fontSize: { xs: '36px', md: '52px' },
            fontFamily: 'var(--font-heading)',
            color: '#1a1a1a',
            display: 'inline-block',
            position: 'relative',
            mb: 2
          }}>
            How to Choose the <span style={{ position: 'relative' }}>
              Right Test
              <Box component="span" sx={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                width: '100%',
                height: '4px',
                bgcolor: greenColor,
                borderRadius: '10px'
              }} />
            </span>
          </Typography>
          <Typography variant="body1" sx={{
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '14px',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)',
            opacity: 0.8
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis nulla eu nisi efficitur, dictum consectetur elit vehicula. Aenean urna turpis, rutrum sed eros id, volutpat hendrerit ipsum. Duis est urna, efficitur sollicitudin.
          </Typography>
        </Box>

        {/* Table Section */}
        <TableContainer component={Paper} elevation={0} sx={{
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
          overflow: 'hidden',
          mx: 'auto'
        }}>
          <Box sx={{ p: 2, bgcolor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#333' }}>
              Recommended English Tests by Country
            </Typography>
          </Box>
          <Table sx={{ minWidth: 650 }} aria-label="recommendation table">
            <TableHead>
              <TableRow sx={{ bgcolor: tableHeaderColor }}>
                <TableCell sx={{ color: '#fff', fontWeight: 700, borderBottom: 'none', width: '80px' }}>S. No</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700, borderBottom: 'none' }}>Country</TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 700, borderBottom: 'none' }}>Recommended Tests</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    bgcolor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                    '&:hover': { bgcolor: '#f0f4ff' }
                  }}
                >
                  <TableCell sx={{ color: '#444', fontSize: '14px', borderBottom: '1px solid #eee' }}>{row.no}</TableCell>
                  <TableCell sx={{ color: '#444', fontSize: '14px', borderBottom: '1px solid #eee' }}>{row.country}</TableCell>
                  <TableCell sx={{ color: '#444', fontSize: '14px', borderBottom: '1px solid #eee' }}>{row.tests}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
