import { Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { TypographyHeader, TypographyParagraph } from '../common/TypographyVariants';
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
      <TypographyHeader
        sx={{ pt: 5 }}
        {...MotionProps} component={motion.p}
      >
        {"Наші об'єкти"}
      </TypographyHeader>

      <TypographyParagraph
        mt={5} {...MotionProps}
        component={motion.p}
      >
        Наші проекти - це свідчення нашої професійності та багаторічного досвіду у сфері монтажу секційних воріт та зовнішніх захисних ролет,
        установки шлагбаумів, автоматики для відкатних та розпашних воріт. 
        <br /><br />
        Висококваліфіковані майстри компанії Тех-Рішення володіють широким спектром навичок та знань.<br />
        Ми пильно стежимо за новітніми технологіями та інноваціями у галузі, щоб завжди залишатися на передовій та забезпечувати нашим клієнтам найсучасніші рішення.
        <br /><br />
        Кожен наш проект починається з творчого підходу та індивідуального дослідження побажань клієнта.<br />
        Наші фахівці співпрацюють з клієнтом на кожному етапі проекту, враховуючи унікальні особливості об&apos;єкта.<br />
        Ми прагнемо створити вироби, що точно відповідають індивідуальним потребам кожного замовника.
        <br /><br />
        Майстри компанії Тех-Рішення оснащені усім необхідним обладнанням та інструментами, щоб закривати проекти будь-якої складності.
        Наша мета - перевершити очікування клієнтів та забезпечити надійні та ефективні рішення для кожного з них.
        <br /><br />
        Ми пишаємося нашими виконаними проектами та відгуками наших клієнтів, які стають для нас найкращим підтвердженням нашої доброї репутації.
        Якщо вам потрібні надійні та стильні рішення для вашого проекта, команда Тех-Рішення завжди рада вам допомогти.
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
