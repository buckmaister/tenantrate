// pages/AddReviewPage.js
import React, { useState } from 'react';
import { Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, Dialog, DialogActions, DialogTitle, Rating, Paper } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto;
  max-width: 500px;
  align-items: center;
  gap: 20px;
  background: linear-gradient(145deg, rgba(255, 235, 59, 0.1), rgba(255, 193, 7, 0.1)); // Gradiente dal giallo chiaro al giallo più scuro
  color: black; // Cambia il colore del testo a seconda della leggibilità
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px; // Aggiunge un bordo arrotondato
  text-align: center;
`;

const StyledRating = styled(Rating)`
  margin-top: 10px;
  .MuiRating-iconFilled {
    color: yellow; // Stelline colorate di bianco
  }
  .MuiRating-iconEmpty {
    color: grey; // Colore per stelline vuote
  }
  .MuiRating-icon {
    stroke: black; // Bordi delle stelline
    stroke-width: 1px; // Spessore del bordo
  }
`;

const AddReviewPage = () => {
  const navigate = useNavigate(); // Inizializza useNavigate
  const [tenant, setTenant] = useState('');
  const [ratings, setRatings] = useState({
    cordiality: 0,
    responseTime: 0,
    price: 0
  });
  const [open, setOpen] = useState(false);

  const isRatingsComplete = ratings.cordiality > 0 && ratings.responseTime > 0 && ratings.price > 0;
  const isFormValid = tenant && isRatingsComplete;

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackToHome = () => {
    setOpen(false); // Chiude il dialogo
    navigate('/'); // Naviga verso la homepage
  };

  return (
    <FormContainer elevation={3}>
      <FormControl fullWidth>
        <InputLabel id="tenant-select-label">Tenant</InputLabel>
        <Select
          labelId="tenant-select-label"
          id="tenant-select"
          value={tenant}
          label="Tenant"
          onChange={(e) => setTenant(e.target.value)}
        >
          <MenuItem value={1}>John Smith</MenuItem>
          <MenuItem value={2}>Emily Johnson</MenuItem>
          <MenuItem value={3}>Michael Brown</MenuItem>
          <MenuItem value={3}>Jessica Davis</MenuItem>
        </Select>
      </FormControl>
      {['cordiality', 'responseTime', 'price'].map((field) => (
        <Box key={field}>
          <Typography component="legend">{field}</Typography>
          <StyledRating
            name={field}
            value={ratings[field]}
            onChange={(event, newValue) => setRatings(prev => ({ ...prev, [field]: newValue }))}
            disabled={!tenant}
          />
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)} disabled={!isFormValid}>
        Submit Review
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="success-dialog-title"
      >
        <DialogTitle id="success-dialog-title">Review Submitted Successfully</DialogTitle>
        <DialogActions>
          <Button onClick={handleBackToHome}>Back to Homepage</Button>
        </DialogActions>
      </Dialog>
    </FormContainer>
  );
};

export default AddReviewPage;