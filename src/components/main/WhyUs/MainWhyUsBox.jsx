import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { TypographyParagraphNoMargin } from '../../common/TypographyVariants';
import MainWhyUsBoxSVG from './MainWhyUsBoxSVG';

const paperVariants = {
  initial: { backgroundColor: '#FFF', scale: 1, y: '20vh' },
  whileHover: { backgroundColor: '#FF9327', scale: 1.1 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
};

export default function MainWhyUs(props) {
  const { componentId, header, text } = props;
  const [colorIcon, setColorIcon] = useState('#FF9327');
  const [colorText, setColorText] = useState('black');

  const handleColorChange = (ev, iconColor, textColor) => {
    setColorIcon(iconColor);
    setColorText(textColor);
    ev.preventDefault();
  };

  return (
    <Grid item xs={12} lg={2.3}>
      <Paper
        onMouseEnter={(ev) => handleColorChange(ev, '#FFF', '#FFF')}
        onMouseLeave={(ev) => handleColorChange(ev, '#FF9327', 'black')}
        onTouchStart={(ev) => handleColorChange(ev, '#FFF', '#FFF')}
        onTouchEnd={(ev) => handleColorChange(ev, '#FF9327', 'black')}
        onTouchMove={(ev) => handleColorChange(ev, '#FF9327', 'black')}
        onTouchCancel={(ev) => handleColorChange(ev, '#FF9327', 'black')}
        elevation={6}
        variants={paperVariants}
        whileInView="animate"
        whileHover="whileHover"
        whileTap="whileHover"
        initial="initial"
        align="center"
        viewport={{ once: true }}
        sx={{
          height: { lg: '35rem', xl: '30rem' },
          marginY: '1rem',
          marginX: { xs: '2.5rem', sm: '4rem', md: '6rem', lg: '0.99rem' },
          fontSize: '3rem',
          borderRadius: '1.5rem',
          backgroundColor: colorIcon, 
        }}
        component={motion.div}
      >
        <Grid
          sx={{ height: '100%' }}
          justifyContent="center"
          alignItems="center"
        >
          <MainWhyUsBoxSVG color={colorIcon} componentId={componentId} />

          <TypographyParagraphNoMargin
            sx={{
              color: colorText,
              textAlign: 'center',
              marginTop: '1rem',
              fontWeight: '700',
            }}
          >
            {header}
          </TypographyParagraphNoMargin>
          <TypographyParagraphNoMargin
            sx={{ color: colorText, margin: '1rem', pb: 2, pt: { lg: 5 } }}
          >
            {text}
          </TypographyParagraphNoMargin>
        </Grid>
      </Paper>
    </Grid>
  );
}

// Валідація пропсів
MainWhyUs.propTypes = {
  componentId: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};