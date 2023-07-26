// components/navigation/NavButtons.jsx
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import NavSplit from './NavSplit';
import { buttons } from '../common/CommoData';

export default function NavButtons() {
  const ctx = useContext(BreakpointsContext);

  return (
    <>
      {ctx.isLarge &&
        buttons.map( (button) => {
          return (
            <Grid item key={button.title}>
              <Button
                component={Link} to={button.href}
                variant="contained" color={button.color}
                key={button.title}
              >
                {button.title}
              </Button>
            </Grid>
          );
        } )}
      {ctx.isMedium && <NavSplit />}
    </>
  );
}