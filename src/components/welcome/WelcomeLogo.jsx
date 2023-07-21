import { motion } from 'framer-motion';
import { Grid } from '@mui/material';
import WelcomeLogoImage from './WelcomeLogo/WelcomeLogoImage';

const logoVariants = {
  initial: {
    y: '-100vh',
  },
  animate: {
    y: 0,
    transition: { duration: 3, delay: 1, type: 'spring', bounce: 0.3 },
  },
};

export default function () {
  return (
    <Grid
      item
      container
      justifyContent="center"
      variants={logoVariants}
      component={motion.div}
      xs={2}
      mt={{ xs: 3 }}
      mb={{ xs: 15, sm: 9, md: 2 }}
    >
      <WelcomeLogoImage component="img" src="/images/rva.png" alt="RVA expert logo" />
    </Grid>
  );
}
