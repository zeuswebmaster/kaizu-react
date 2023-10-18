import { React } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../../stores/store';
import { useAuthStore } from '../../stores/auth-store';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import styles from '../../styles/member.module.scss';

const Header = () => {

  const navigate = useNavigate();
  const { setHelperText } = useStore();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      logout();
      setHelperText({ error: false, text: null });
      navigate('/');
    }
  };

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <NavLink to="/home">
          <img
            src="/img/kaizu-logo-full.png"
            alt="KAIZU Logo"
          />
        </NavLink>
        <Box sx={{ flexGrow: 1 }} /> {/* This will take up the remaining space and push the buttons to the right */}
        <Button color="inherit" className={styles.headerButton} onClick={handleLogout}>Log Out</Button>
        <Button color="inherit" component={NavLink} className={styles.headerButton} to="/">Exit</Button>
      </Toolbar>
    </AppBar>
  );

}
  
export default Header;