import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import {
  TypographyHeader,
  TypographyParagraph,
} from '../common/TypographyVariants';
import ObjectsGallery from './Objects/ObjectsGallery';
import ObjectsArray from './Objects/ObjectsArray';

const ObjectsVariants = {
  initial: { y: 150 },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.4, duration: 2 } },
};

const MotionProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: ObjectsVariants,
};

export default function MainObjects() {
  return (
    <Grid
      sx={{ backgroundColor: '#F3F3F3' }}
      {...MotionProps}
      component={motion.div}
      id="objects" className="titlefix"
    >
      <TypographyHeader sx={{ pt: 5 }} {...MotionProps} component={motion.p}>      
        {"Наші об'єкти"}
      </TypographyHeader>
      <TypographyParagraph mt={5} {...MotionProps} component={motion.p}>
        Завод оснащений усім необхідним для сучасного виробництва обладнанням. 
		Складальний цех дозволяє здійснювати виробництво та контрольне складання систем будь-якої складності.
      </TypographyParagraph>
      <Grid container>
        <ObjectsGallery
          images={ObjectsArray}
          MotionProps={MotionProps}
          ProductionVariants={ObjectsVariants}
        />
      </Grid>
    </Grid>
  );
}
