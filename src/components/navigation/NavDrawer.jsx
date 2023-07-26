// components/navigation/NavDrawer.jsx
import * as React from 'react';
import { Grid, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { links, buttons } from '../common/CommoData';
import InfoIcon from '@mui/icons-material/Info';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MailIcon from '@mui/icons-material/Mail';
import RollerShadesIcon from '@mui/icons-material/RollerShades';
import BalconyIcon from '@mui/icons-material/Balcony';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex', alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
const linksIcons = [<InfoIcon />, <HomeWorkIcon />, <MailIcon />];
const buttonsIcons = [<RollerShadesIcon />, <BalconyIcon />, <MotionPhotosAutoIcon />];

const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onClickHandler = (event, id) => {
    event.preventDefault();
    if (id) {
      scrollToElement(id);
      handleDrawerClose();
    }
  };

  return (
    <>
      <Drawer
        sx={{
          width: 240, flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
        variant="persistent"
        anchor="right" open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map( (link, index) => (
            <ListItemButton
              key={link.id} onClick={(event) => onClickHandler(event, link.id)}
              component="a" href={link.href}             
            >
              <ListItemIcon>{linksIcons[index]}</ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          ) )}
        </List>
        <Divider />
        <List>
          {buttons.map( (button) => (
            <ListItemButton
              key={button.id} onClick={handleDrawerClose}
              component="a" href={button.href}
            >
              <ListItemIcon>{buttonsIcons[buttons.indexOf(button)]}</ListItemIcon>
              <ListItemText primary={button.title} />
            </ListItemButton>
          ) )}
        </List>
      </Drawer>
      <Grid item>
        <IconButton
          color="primary" edge="start"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
        >
          <MenuIcon sx={{ width: 50, height: 50 }} />
        </IconButton>
      </Grid>
    </>
  );
}
