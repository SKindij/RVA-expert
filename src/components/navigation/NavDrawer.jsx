import * as React from 'react';
import {
  Grid, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Drawer,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalculateIcon from '@mui/icons-material/Calculate';
import BuildIcon from '@mui/icons-material/Build';
import MailIcon from '@mui/icons-material/Mail';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { buttons } from './NavButtons';
import { links } from './NavLinks';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex', alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function NavDrawer() {
  let drawerWidth;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    drawerWidth = 240;
    setOpen(true);
  };
  const handleDrawerClose = () => {
    drawerWidth = 0;
    setOpen(false);
  };

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth, flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
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
            <ListItem
              button
              key={link.text}
              href={link.href} onClick={handleDrawerClose}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <InfoIcon />
                ) : index === 1 ? (
                  <PrecisionManufacturingIcon />
                ) : index === 2 ? (
                  <MailIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ) )}
        </List>
        <Divider />
        <List>
          {buttons.map( (button, index) => (
            <ListItem
              button
              key={button.title}
              href={button.href} onClick={handleDrawerClose}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <BuildIcon />
                ) : index === 1 ? (
                  <CalculateIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={button.title} />
            </ListItem>
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
