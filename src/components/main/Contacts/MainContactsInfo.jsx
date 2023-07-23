
import PropTypes from 'prop-types';
import { Grid, Paper, Typography } from '@mui/material';
import MainContactsIcon from './MainContactsIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';

const paperVariants = {
  initial: { backgroundColor: '#FFF', scale: 1, y: 150 },
  whileHover: { backgroundColor: '#FF9327', scale: 1.1 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

export default function MainContactsInfo({ data }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <Grid container justifyContent="center">
        {/* Перший стовпець: Компанія та Адреса */}
        <Grid item xs={12} md={6} sx={{ mx: '5%' }}>
          <Grid container spacing={2} direction="row" justifyContent="center">
            {data.slice(0, 2).map((item) => (
              <Grid item key={item.title} xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    width: '100%', borderRadius: '15px',
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
          </Grid>
        </Grid>

        {/* Другий стовпець: Телефон та Пошта */}
        <Grid item xs={12} md={6} sx={{ mx: '5%' }}>
          <Grid container spacing={2} direction="row" justifyContent="center">
            {data.slice(2).map((item) => (
              <Grid item key={item.title} xs={12} md={6}>
                <Paper
                  elevation={0}
                  sx={{
                    width: '100%', borderRadius: '15px',
                    backgroundColor: hoveredItem === item.title ? '#FF9327' : '#FFF',
                    color: hoveredItem === item.title ? '#FFF' : 'black',
                    '&:hover .child': { color: '#FFF' },
                  }}
                  variants={paperVariants} whileHover="whileHover"
                  whileTap="whileHover" initial="initial"
                  component={motion.div} whileInView="animate"
                  viewport={{ once: true }}
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

MainContactsInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
