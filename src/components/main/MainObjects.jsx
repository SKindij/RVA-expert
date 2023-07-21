import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import {
  TypographyHeader,
  TypographyParagraph,
} from '../../common/TypographyVariants';
import MainProductionGallery from './MainProduction/MainProductionGallery';
import MainProductionArray from './Production/MainProductionArray';

const ProductionVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ProductionVariants,
};

export default function MainObjects() {
  return (
    <Grid
      sx={{ backgroundColor: '#F3F3F3' }}
      {...MotionProps}
      component={motion.div}
      id="production" className="titlefix"
    >
      <TypographyHeader sx={{ pt: 5 }} {...MotionProps} component={motion.p}>
        Наші об'єкти
      </TypographyHeader>
      <TypographyParagraph mt={5} {...MotionProps} component={motion.p}>
        Завод оснащений усім необхідним для сучасного виробництва обладнанням. 
		Складальний цех дозволяє здійснювати виробництво та контрольне складання систем будь-якої складності.
      </TypographyParagraph>
      <Grid container>
        <MainProductionGallery
          images={MainProductionArray}
          MotionProps={MotionProps}
          ProductionVariants={ProductionVariants}
        />
      </Grid>
    </Grid>
  );
}
