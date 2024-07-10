import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Typography, Container, Box } from '@mui/material';
import { Home, Add, Message, Person, People } from '@mui/icons-material';
import HomePage from './pages/HomePage';
import ComingSoonPage from './pages/ComingSoonPage';
import ProfilePage from './pages/ProfilePage';
import AddReviewPage from './pages/AddReviewPage';
import TenantsPage from './pages/TenantsPage';
import styled from '@emotion/styled';

const Header = styled(Box)`
  background-color: #ff9800;
  padding: 16px;
  text-align: center;
`;

const BottomNav = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0; 
  box-shadow: 0 -1px 3px rgba(0,0,0,0.1); 
`;

const StyledTypography = styled(Typography)`
  color: white; 
  font-weight: bold; 
  font-size: 24px;
`;

function App() {
  return (
    <Router>
      <Box sx={{ pb: 7 }}>
        <Header>
          <StyledTypography variant="h6">Explore Renties ratings and reviews</StyledTypography>
        </Header>
        
        <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tenants" element={<TenantsPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-review" element={<AddReviewPage />} />
          </Routes>
        </Container>
      </Box>

      <BottomNav showLabels>
        <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
        <BottomNavigationAction label="Tenants" icon={<People />} component={Link} to="/tenants" />
        <BottomNavigationAction label="Add a Review" icon={<Add />} component={Link} to="/add-review" />
        <BottomNavigationAction label="DMs" icon={<Message />} component={Link} to="/coming-soon" />
        <BottomNavigationAction label="Profile" icon={<Person />} component={Link} to="/profile" />
      </BottomNav>
    </Router>
  );
}

export default App;
