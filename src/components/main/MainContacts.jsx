import { Grid } from '@mui/material';
import { TypographyHeader, TypographyParagraph } from '../common/TypographyVariants';
import MainContactsInfo from './Contacts/MainContactsInfo';
import MainContactsArray from './Contacts/MainContactsArray';
import { motion } from 'framer-motion';

const ParagraphVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial', whileInView: 'animate',
  viewport: { once: true },
  variants: ParagraphVariants,
};

export default function MainContacts() {
  return (
    <Grid container id="contacts" className="titlefix">
      <Grid item container direction="column" xs={12} alignItems="center">
        <TypographyHeader {...MotionProps} component={motion.p}>
          Наші контакти
        </TypographyHeader>
        <TypographyParagraph my={5} {...MotionProps} component={motion.p}>
           Ви можете зв&apos;язатися з нами способами, наведеними нижче.
           <br />
           Ми завжди на зв&apos;язку!
        </TypographyParagraph>
      </Grid>

        <MainContactsInfo data={MainContactsArray} />

      <Grid item container justifyContent="center" my={5}>
        <TypographyHeader sx={{ mx: 2 }} {...MotionProps} component={motion.p}>
          Ви також можете знайти нас на карті
        </TypographyHeader>
      </Grid>
      <Grid item {...MotionProps} component={motion.div} xs={12}>
      <section
          id="map__section"
          style={{
            width: '100%',
            height: 450,
          }}
        >
          <img
            src="/images/map_image.jpg" alt="Google Map"
            width="100%" height="450"
          />
        </section>
      </Grid>
    </Grid>
  );
}
