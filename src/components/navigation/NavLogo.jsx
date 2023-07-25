import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavLogo() {
  return (
    <Grid
      container item
      md={4} justifyContent="center"
      alignItems="center" height="100%"
    >
      <Link to="/">
        <img src={'/images/rva.png'} height="80px" alt="RVA logo" />
      </Link>
    </Grid>
  );
}
