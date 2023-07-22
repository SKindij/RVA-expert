import { Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { TypographyParagraphNoMargin } from '../../common/TypographyVariants';
import MainWhyUsBoxSVG from './MainWhyUsBoxSVG';
import { useState } from 'react';

const paperVariants = {
  initial: { backgroundColor: '#FFF', scale: 1, y: '20vh' },
  whileHover: { backgroundColor: '#FF9327', scale: 1.1 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
};

export default function MainWhyUs(props) {
  const [colorIcon, setColorIcon] = useState('#FF9327');
  const [colorText, setColorText] = useState('black');

  return (
    <Grid item xs={12} lg={2.3}>
      <Paper
        onMouseEnter={(ev) => {
          setColorIcon('#FFF');
          setColorText('#FFF');
        }}
        onMouseLeave={(ev) => {
          setColorIcon('#FF9327');
          setColorText('black');
        }}
        onTouchStart={(ev) => {
          setColorIcon('#FFF');
          setColorText('#FFF');
          ev.preventDefault();
        }}
        onTouchEnd={(ev) => {
          setColorIcon('#FF9327');
          setColorText('black');
          ev.preventDefault();
        }}
        onTouchMove={(ev) => {
          setColorIcon('#FF9327');
          setColorText('black');
          ev.preventDefault();
        }}
        onTouchCancel={(ev) => {
          setColorIcon('#FF9327');
          setColorText('black');
          ev.preventDefault();
        }}
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
        }}
        component={motion.div}
      >
        <Grid
          sx={{ height: '100%' }}
          justifyContent="center"
          alignItems="center"
        >
          <MainWhyUsBoxSVG color={colorIcon} componentId={props.componentId} />

          <TypographyParagraphNoMargin
            sx={{
              color: colorText,
              textAlign: 'center',
              marginTop: '1rem',
              fontWeight: '700',
            }}
          >
            {props.header}
          </TypographyParagraphNoMargin>
          <TypographyParagraphNoMargin
            sx={{ color: colorText, margin: '1rem', pb: 2, pt: { lg: 5 } }}
          >
            {props.text}
          </TypographyParagraphNoMargin>
        </Grid>
      </Paper>
    </Grid>
  );
}
