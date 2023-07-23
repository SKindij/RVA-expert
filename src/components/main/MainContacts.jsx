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

      {/* Новий контейнер з картинкою, розташований по центру */}
      <Grid item container justifyContent="center" my={5}>
        <Grid item xs={12} sm={10} md={8} {...MotionProps} component={motion.div}>
          <img
            src="/images/google-map.jpg" alt="Google Map"
            width="100%" style={{ display: 'block' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}