import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import styles from '../../styles/member.module.scss';

const SidebarMenu = () => {
  const [openStudio, setOpenStudio] = useState(false);

  const handleStudioClick = () => {
    setOpenStudio(!openStudio);
  };

  return (
    <div className={styles.sidebar}>
      <List>
        <ListItemButton component={NavLink} to="/home" activeclassname="activeLink">
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton onClick={handleStudioClick}>
          <ListItemText primary="Studio" />
          {openStudio ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openStudio} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={NavLink} to="/studio/dashboards" activeclassname="activeLink">
              <ListItemText primary="Dashboards" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/studio/rankings" activeclassname="activeLink">
              <ListItemText primary="Rankings" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/studio/heatmap" activeclassname="activeLink">
              <ListItemText primary="Heat Map" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton component={NavLink} to="/portfolio" activeclassname="activeLink">
          <ListItemText primary="Portfolio" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/news" activeclassname="activeLink">
          <ListItemText primary="News" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/calendar" activeclassname="activeLink">
          <ListItemText primary="Calendar" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/settings" activeclassname="activeLink">
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default SidebarMenu;
