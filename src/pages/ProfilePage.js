// pages/ProfilePage.js
import React from 'react';
import { Typography, Box, Avatar, Paper } from '@mui/material';
import styled from '@emotion/styled';

const ProfileContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin-top: 20px;
  border: 3px solid #3f51b5;
`;

const StyledTypography = styled(Typography)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: bold;
  color: #3f51b5;
`;

const ProfileText = styled(Typography)`
  margin-top: 10px;
`;

const BoldText = styled(Typography)`
  font-weight: bold;
  margin-top: 10px;
`;

const ProfilePage = () => {
  return (
    <ProfileContainer elevation={3}>
      <StyledAvatar src="https://i.pravatar.cc/300" alt="Profile Avatar" />
      <StyledTypography variant="h5">
        John Doe
      </StyledTypography>
      <ProfileText variant="subtitle1">
        Location: New York, USA
      </ProfileText>
      <ProfileText variant="subtitle1">
        Email: johndoe@example.com
      </ProfileText>
      <ProfileText variant="subtitle1">
        Phone: +1234567890
      </ProfileText>
      <BoldText variant="subtitle1">
        Crypto Wallet: 0x1234...AbCd
      </BoldText>
      <ProfileText variant="body1" color="textSecondary">
        Manage your profile information and settings here.
      </ProfileText>
    </ProfileContainer>
  );
};

export default ProfilePage;
