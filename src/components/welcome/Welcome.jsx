import WelcomeParticles from './Welcome/WelcomeParticles';
import WelcomeLogo from './Welcome/WelcomeLogo';
import WelcomeBackground from './Welcome/WelcomeBackground';
import WelcomeCompany from './Welcome/WelcomeCompany';
import WelcomeButton from './Welcome/WelcomeButton';
import WelcomeLine from './Welcome/WelcomeLine';
import WelcomeLinks from './Welcome/WelcomeLinks';

import { useContext } from 'react';
import { BreakpointsContext } from '../../../context/breakpoints-context';
import { motion } from 'framer-motion';
import { Grid, Box } from '@mui/material';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
};

export default function () {
  const ctx = useContext(BreakpointsContext);

  return (
    <>
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="initial" animate="animate"
      >
        <WelcomeBackground>
          <WelcomeParticles />
          <Grid
            container direction="column"
            sx={{ width: '100%', height: '100%' }}
          >
            <WelcomeLogo />
            <WelcomeLine />
            <WelcomeCompany />
            <WelcomeLine />
            {(ctx.isMedium || ctx.isLarge) && <WelcomeLinks />}
            <WelcomeButton />
          </Grid>
        </WelcomeBackground>
      </Box>
    </>
  );
}
