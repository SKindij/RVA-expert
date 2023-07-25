import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import NavSplit from './NavSplit';

export const buttons = [
  {
    href: '/products',
    title: 'Продукція',
    color: 'primary',
  },
  {
    href: '/calculator',
    title: 'Розрахунок цін',
    color: 'secondary',
  },
];

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
