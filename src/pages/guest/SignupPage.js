import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useAuthStore } from '../../stores/auth-store';
import Header from '../../components/guest/Header';
import Footer from '../../components/guest/Footer';
import Auth from '../../components/SignUp';
import styles from '../../styles/guest.module.scss';

const SignupPage = () => {

  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  // Redirect to app home if already logged in...
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.guest}>
      <Header />

      <Box sx={{ textAlign: 'center', p: 4 }}>
        <Auth />
      </Box>

      <Footer />
    </div>
  );
}

export default SignupPage;
