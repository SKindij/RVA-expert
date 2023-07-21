import { motion, useCycle } from 'framer-motion';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import Link from '../../../../Link';

const arrowVariants = {
  animationInitial: {
    y: 0,
    transition: { delay: 1, duration: 2 },
  },
  animationConstant: {
    y: [0, 10, -10],
    transition: {
      y: { yoyo: Infinity },
    },
  },
};

export default function () {
  const [animation, cycleAnimation] = useCycle(
    'animationInitial', 'animationConstant'
  );

  useEffect(() => {
    setTimeout(() => cycleAnimation(), 3000);
  }, []);

  return (
    <Grid
      item xs={1}
      component={motion.div} variants={arrowVariants}
      initial={{ y: '100vh' }} animate={animation}
      whileHover={{ scale: 1.4, y: 0, cursor: 'pointer' }}
      fontSize="60px"
      mt={{ xs: 25, sm: 25, md: 0 }}
      sx={{ width: 'fit-content', margin: 'auto' }}
    >
      <Link href="/#company">
        <ArrowCircleDownSharpIcon sx={{ color: 'white' }} fontSize="inherit" />
      </Link>
    </Grid>
  );
}
