import { React } from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useAuthStore } from '../../stores/auth-store';
import styles from '../../styles/guest.module.scss';

const Header = () => {

  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return (
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <NavLink to="/">
            <img
              src="/img/kaizu-logo-full.png"
              alt="KAIZU Logo"
            />
          </NavLink>
          <Box sx={{ flexGrow: 1 }} /> {/* This will take up the remaining space and push the buttons to the right */}
          <Button color="inherit" component={NavLink} className={styles.headerButton} to="/home">Enter App</Button>
          <Button color="inherit" component={NavLink} className={styles.headerButton} to="/about">About</Button>
          <Button color="inherit" component={NavLink} className={styles.headerButton} to="/terms">Terms</Button>
          <Button color="inherit" component={NavLink} className={styles.headerButton} to="/privacy">Privacy</Button>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <NavLink to="/">
          <img
            src="/img/kaizu-logo-full.png"
            alt="KAIZU Logo"
          />
        </NavLink>
        <Box sx={{ flexGrow: 1 }} /> {/* This will take up the remaining space and push the buttons to the right */}
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/">Home</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/about">About</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/log-in">Log In</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/sign-up">Sign Up</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/terms">Terms</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/privacy">Privacy</Button>
      </Toolbar>
    </AppBar>
  );
}
  
  export default Header;