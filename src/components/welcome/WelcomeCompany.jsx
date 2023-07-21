import Typography from '@mui/material/Typography';
import { motion, useCycle } from 'framer-motion';
import { Grid } from '@mui/material';
import { useEffect } from 'react';

const companyVariants = {
  initial: { rotateY: 180, scale: 1 },
  animationOne: {
    rotateY: 0,
    transition: { type: 'spring', bounce: 0.5, duration: 6 },
  },
  animationTwo: {
    rotateY: 0,
    scale: 1.3,
    transition: { duration: 1.5 },
  },
};

export default function () {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');

  useEffect(() => {
    setTimeout(() => cycleAnimation(), 2500);
  }, []);

  return (
    <Grid item container xs={1} alignItems="center" justifyContent="center">
      <Typography
        align="center"
        variant="h1" color="white"
        fontSize={{ xs: '1.7rem', sm: '3rem' }}
        sx={{ zIndex: 'modal', fontWeight: 900 }}
        variants={companyVariants} animate={animation}
        component={motion.p} initial="initial"
      >
        Тех-Рішення
      </Typography>
    </Grid>
  );
}
