import { Grid } from '@mui/material';

export default function NavLogo() {
  return (
    <Grid
      container item
      md={4} justifyContent="center"
      alignItems="center" height="100%"
    >
      <Link href="/">
        <img src={'/images/rva.png'} height="80px" alt="RVA expert logo" />
      </Link>
    </Grid>
  );
}
