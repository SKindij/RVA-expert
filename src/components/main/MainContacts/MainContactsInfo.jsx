import { Grid, Paper } from '@mui/material';
import { TypographyParagraphNoMargin } from '../../../common/TypographyVariants';
import MainContactsIcon from './MainContactsIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';

const paperVariants = {
  initial: { backgroundColor: '#FFF', scale: 1, y: 150 },
  whileHover: { backgroundColor: '#FF9327', scale: 1.1 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

export default function MainContactsInfo(props) {
  return props.data.map((item) => {
    const [colorIcon, setColorIcon] = useState('#FF9327');
    const [colorText, setColorText] = useState('black');
    return (
      <Grid
        key={item.title}
        container
        mb={4}
        direction="column"
        alignItems="center"
        sx={{ width: '100%' }}
      >
        <Paper
          elevation={0}
          sx={{
            width: '80%',
            borderRadius: '15px',
            '&:hover .child': { color: '#FFF' },
          }}
          variants={paperVariants}
          whileHover="whileHover"
          whileTap="whileHover"
          initial="initial"
          component={motion.div}
          whileInView="animate"
          viewport={{ once: true }}
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
        >
          <Grid align="center" mt={2}>
            <MainContactsIcon color={colorIcon} id={item.title} />
          </Grid>

          <TypographyParagraphNoMargin color={colorText} fontWeight="700">
            {item.title}
          </TypographyParagraphNoMargin>

          <TypographyParagraphNoMargin color={colorText} my={3} mx={2}>
            {item.text}
          </TypographyParagraphNoMargin>
        </Paper>
      </Grid>
    );
  });
}
