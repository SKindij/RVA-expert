import WelcomeParticles from './WelcomeParticles';
import WelcomeLogo from './WelcomeLogo';
import WelcomeCompany from './WelcomeCompany';
//import WelcomeButton from './WelcomeButton';
import WelcomeLine from './WelcomeLine';
//import WelcomeLinks from './WelcomeLinks';

import { useContext } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import { motion } from 'framer-motion';
import { Grid, Box } from '@mui/material';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
};

export default function Welcome () {
  const ctx = useContext(BreakpointsContext);

  return (
    <>
      <Box
        component={motion.div} variants={containerVariants}
        initial="initial" animate="animate"
      >
        <div className="welcome-background">

    
          <WelcomeParticles />
    
          <Grid
            container direction="column"
            sx={{ width: '100%', height: '100%' }}
          >

            <WelcomeLogo />
    
            <WelcomeLine />
              <WelcomeCompany />
            <WelcomeLine />
    {/*
            {(ctx.isMedium || ctx.isLarge) && <WelcomeLinks />}
    
            <WelcomeButton />
    */}
          </Grid>
    
        </div>
      </Box>
    </>
  );
}
