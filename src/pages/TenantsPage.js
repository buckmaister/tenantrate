// pages/TenantsPage.js
import React from 'react';
import { Typography, Box, Grid, Avatar } from '@mui/material';
import styled from '@emotion/styled';

const RenterCard = styled(Box)`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const AvatarContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

const AvatarStyled = styled(Avatar)`
  width: 80px;
  height: 80px;
`;

const StarIcon = styled.span`
  color: gold;
  margin-right: 4px;
`;

const Title = styled(Typography)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: #d32f2f; // Colore rosso scuro per il titolo
  margin-bottom: 20px;
  text-align: center;
`;

const TenantsPage = () => {
  return (
    <Box padding={3}>
      <Title variant="h5" gutterBottom>
        Nearby Renties
      </Title>
      <Grid container spacing={3}>
        {[
          { name: 'Anna Bianchi', location: 'San Giovanni, Roma', description: 'Tranquilla, responsabile, educata' },
          { name: 'Mario Rossi', location: 'Navigli, Milano', description: 'Cordiale, ordinato, rispettoso' },
          { name: 'Sara Neri', location: 'Taranto', description: 'Puntuale, elegante, pulito' },
          { name: 'Luca Verdi', location: 'Napoletano', description: 'Onesto, LGBTQ+ friendly, pet friendly' },
        ].map((renter, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <RenterCard>
              <AvatarContainer>
                <AvatarStyled
                  alt={renter.name}
                  src={`https://randomuser.me/api/portraits/lego/${index + 1}.jpg`}
                />
              </AvatarContainer>
              <Typography variant="subtitle1">{renter.name}</Typography>
              <Box>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i}>★</StarIcon>
                ))}
              </Box>
              <Typography variant="body2">{renter.location}</Typography>
              <Typography variant="body2">{renter.description}</Typography>
            </RenterCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TenantsPage;
