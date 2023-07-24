
import { motion, useCycle } from 'framer-motion';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import { Grid } from '@mui/material';
import { useEffect } from 'react';

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

export default function WelcomeButton () {
  const [animation, cycleAnimation] = useCycle(
    'animationInitial', 'animationConstant'
  );

  useEffect(() => {
    setTimeout(() => cycleAnimation(), 3000);
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleButtonClick = () => {
    scrollToElement('company');
  };

  return (
    <Grid item xs={1} onClick={handleButtonClick}
      component={motion.div} variants={arrowVariants}
      initial={{ y: '100vh' }} animate={animation}
      whileHover={{ scale: 1.4, y: 0, cursor: 'pointer' }}
      fontSize="60px" mt={{ xs: 25, sm: 25, md: 0 }}
      sx={{ width: 'fit-content', margin: 'auto' }}
    >
        <ArrowCircleDownSharpIcon sx={{ color: 'white' }} fontSize="inherit" />
    </Grid>
  );
}
