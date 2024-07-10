// pages/ComingSoonPage.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import styled from '@emotion/styled';

const CenteredBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Imposta l'altezza al 100% del viewport
  text-align: center;
  background-color: #f7f7f7; // Sfondo leggero per contrasto
  padding: 20px;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: #d32f2f; // Colore rosso scuro per il titolo
  margin-bottom: 20px;
`;

const ComingSoonPage = () => {
  return (
    <CenteredBox>
      <StyledTypography variant="h4">
        Coming Soon
      </StyledTypography>
      <Typography paragraph>
        This page is under construction. Please check back later.
      </Typography>
    </CenteredBox>
  );
};

export default ComingSoonPage;
