import PropTypes from 'prop-types';
import { Grid, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import MainContactsIcon from './MainContactsIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';

const paperVariants = {
  initial: { backgroundColor: '#FFF', scale: 1, y: 150 },
  whileHover: { backgroundColor: '#FF9327', scale: 1.1 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

export default function MainContactsInfo(props) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {props.data.map((item) => (
        <Grid
          key={item.title}
          container mb={4}
          direction="column" alignItems="center"
          sx={{ width: '100%' }}
        >
          <Paper
            elevation={0}
            sx={{
              width: '80%', borderRadius: '15px',
              backgroundColor: hoveredItem === item.title ? '#FF9327' : '#FFF',
              color: hoveredItem === item.title ? '#FFF' : 'black',
              '&:hover .child': { color: '#FFF' },
            }}
            variants={paperVariants}
            whileHover="whileHover" whileTap="whileHover"
            initial="initial" component={motion.div}
            whileInView="animate" viewport={{ once: true }}
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => handleMouseEnter(item.title)}
            onTouchEnd={handleMouseLeave}
            onTouchMove={handleMouseLeave}
            onTouchCancel={handleMouseLeave}
          >
            <Grid align="center" mt={2}>
              <MainContactsIcon color={hoveredItem === item.title ? '#FFF' : '#FF9327'} id={item.title} />
            </Grid>

            <Typography variant="h6" fontWeight="700" align="center">
              {item.title}
            </Typography>

            <Typography variant="body1" align="center" my={3} mx={2}>
              {item.text}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </>
  );
}

MainContactsInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      // Add other required or optional props as needed
    })
  ).isRequired,
};