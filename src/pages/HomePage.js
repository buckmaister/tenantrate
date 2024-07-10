// pages/HomePage.js
import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  padding: 40px;
  margin-top: 20px;
  background: linear-gradient(145deg, rgba(255, 235, 59, 0.8), rgba(255, 193, 7, 0.8)); // Gradiente dal giallo chiaro al giallo più scuro
  color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: left; // Modifica per allineare il testo a sinistra
`;

const WelcomeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const Bold = styled(Typography)`
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <WelcomeBox>
      <StyledPaper elevation={6}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Tenantrate
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '20px' }}>
          Tenantrate is an innovative platform designed to revolutionize the rental market. Using Solana blockchain technology, we provide a secure and transparent tool to evaluate and choose the ideal tenants.
        </Typography>
        <Bold variant="h6">For Property Owners:</Bold>
        <ul>
          <li><Bold>Verified Reviews:</Bold> Read reviews and ratings of potential tenants based on real experiences.</li>
          <li><Bold>Informed Choices:</Bold> Use verified data to make informed decisions and reduce the risk of legal disputes.</li>
        </ul>
        <Bold variant="h6">For Tenants:</Bold>
        <ul>
          <li><Bold>Complete Transparency:</Bold> View reviews and ratings of other tenants to find the best rental opportunities.</li>
          <li><Bold>Trust and Security:</Bold> Rely on a decentralized system that ensures the integrity and security of information.</li>
        </ul>
        <Typography variant="subtitle1">
          Discover how Tenantrate can simplify the rental process, improve transparency, and create trustworthy relationships. Choose with confidence, choose Tenantrate.
        </Typography>
      </StyledPaper>
    </WelcomeBox>
  );
};

export default HomePage;
