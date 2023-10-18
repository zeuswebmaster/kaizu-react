import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../../components/guest/Header';
import Footer from '../../components/guest/Footer';
import styles from '../../styles/guest.module.scss';

const TermsPage = () => {
  return (
    <div className={styles.guest}>
      <Header />

      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Typography variant="h2">Terms and Conditions</Typography>
        <Typography variant="body1">Boilerplate content goes here.</Typography>
      </Box>

      <Footer />
    </div>
  );
}

export default TermsPage;
