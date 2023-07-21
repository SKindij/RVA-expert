import { Grid } from '@mui/material';
import { TypographyHeader, TypographyParagraph } from '../../common/TypographyVariants';
import MainContactsInfo from './Contacts/MainContactsInfo';
import MainContactsArray from './Contacts/MainContactsArray';
import { motion } from 'framer-motion';

const ParagraphVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ParagraphVariants,
};

export default function MainContacts() {
  return (
    <Grid container id="contacts" className="titlefix">
      <Grid item container direction="column" xs={12} alignItems="center">
        <TypographyHeader {...MotionProps} component={motion.p}>
          Контакти
        </TypographyHeader>

        <TypographyParagraph my={5} {...MotionProps} component={motion.p}>
          Ви можете зв'язатися з нами способами, наведеними нижче. 
		  Ми завжди на зв'язку!
        </TypographyParagraph>
      </Grid>

      <Grid item xs={12} md={3}>
        <MainContactsInfo data={MainContactsArray} />
      </Grid>

      <Grid item container justifyContent="center" my={5}>
        <TypographyHeader sx={{ mx: 2 }} {...MotionProps} component={motion.p}>
          Ви також можете знайти нас на карті
        </TypographyHeader>
      </Grid>
      <Grid item {...MotionProps} component={motion.div} xs={12}>
        <section id="map__section">
          <iframe
            src="https://www.google.com/maps/place/%D0%9F%D0%B0%D1%80%D0%BA+%D1%96%D0%BC%D0%B5%D0%BD%D1%96+%D0%A2.+%D0%93.+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0/@50.499291,30.7858353,15z/data=!4m6!3m5!1s0x40d4dbd0c15dd021:0x389b3cb34c503f15!8m2!3d50.4995289!4d30.7727497!16s%2Fg%2F1yg58gf4z?authuser=0&entry=ttu"
            width="100%"
            height="450"
            frameBorder="0"
          ></iframe>
        </section>
      </Grid>
    </Grid>
  );
}
