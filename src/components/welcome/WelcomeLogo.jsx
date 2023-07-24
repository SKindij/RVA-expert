import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const logoVariants = {
  initial: {
    y: '-100vh',
  },
  animate: {
    y: 0,
    transition: { duration: 3, delay: 1, type: 'spring', bounce: 0.3 },
  },
};

const StyledLogoImage = styled('img')(({ theme }) => ({
  boxSizing: 'border-box', borderRadius: '15px',
  [theme.breakpoints.up('md')]: {
    height: '250px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    height: '200px',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    height: '160px',
  },
}));

export default function WelcomeLogo() {
  return (
    <Grid
      item container justifyContent="center"
      variants={logoVariants} component={motion.div}
      xs={2}
      mt={{ xs: 3 }}
      mb={{ xs: 15, sm: 9, md: 2 }}
    >
      <StyledLogoImage src="/images/rva.jpg" alt="RVA expert logo" />
    </Grid>
  );
}
