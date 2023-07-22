import { Grid } from '@mui/material';
import { TypographyHeader, TypographyParagraph } from '../common/TypographyVariants';
import MainWhyUsBox from './WhyUs/MainWhyUsBox';
import MainWhyUsArray from './WhyUs/MainWhyUsArray';
import { motion } from 'framer-motion';

const paragraphVariants = {
  initial: { y: '20vh' },
  animate: { y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1.5 } },
};

export default function MainWhyUs() {
  return (
    <Grid
      container direction="column" mt={10}
      justifyContent="center" alignItems="center"
    >
      <TypographyHeader
        variants={paragraphVariants} component={motion.p}
        initial="initial" whileInView="animate"
        viewport={{ once: true }}
      >
        Чому ми?
      </TypographyHeader>
      <TypographyParagraph
        variants={paragraphVariants} component={motion.p}
        initial="initial" whileInView="animate"
        viewport={{ once: true }} mt={5}
      >
        Наш бізнес-процес складається з наступниих етапів:
      </TypographyParagraph>
      <Grid
        viewport={{ once: true }}
        container direction={{ xs: 'column', lg: 'row' }}
        justifyContent="center" mt={3}
      >
        {MainWhyUsArray.map( (element) => {
          return (
            <MainWhyUsBox
              header={element.header}
              componentId={element.componentId}
              text={element.text}
              key={element.componentId}
            />
          );
        } )}
      </Grid>
    </Grid>
  );
}
