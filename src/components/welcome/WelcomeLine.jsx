import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const lineVariants = {
  initial: { x: '-100vw' },
  animate: {
    x: 0,
    transition: { duration: 2 },
  },
};
export default function WelcomeLine() {
  return (
    <Box
      variants={lineVariants}
      align="center"
      sx={{
        height: '2.5px', width: { xs: '10rem', sm: '18rem' },
        backgroundColor: 'white', marginX: 'auto',
      }}
      component={motion.div}
    ></Box>
  );
}
