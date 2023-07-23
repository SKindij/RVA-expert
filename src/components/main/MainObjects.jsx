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
      sx={ { backgroundColor: '#F3F3F3', padding: '60px 0' } }
      {...MotionProps}
      component={motion.div}
      id="objects" className="titlefix"
    >
      <TypographyHeader sx={{ pt: 5, textAlign: 'center', fontWeight: 600, fontSize: '28px' }} 
      {...MotionProps} component={motion.p}>      
          {"Наші об'єкти"}
      </TypographyHeader>

      <TypographyParagraph mt={5}  
        sx={{ textAlign: 'center', fontSize: '18px', maxWidth: '600px', mx: 'auto' }}
        {...MotionProps} component={motion.p}>
        Наші об&apos;єкти - це свідчення нашої професійності та багаторічного досвіду у сфері проектування та виробництва гаражних секційних воріт, алюмінієвих ролет та автоматики для відкатних та розпашних воріт. Команда компанії Тех-Рішення працює висококваліфікованими майстрами, які володіють широким спектром навичок та знань. Ми пильно стежимо за новітніми технологіями та інноваціями у галузі, щоб завжди залишатися на передовій та забезпечувати нашим клієнтам найсучасніші рішення.
        Кожен наш проект починається з творчого підходу та індивідуального дослідження потреб та вимог клієнта. Наші фахівці співпрацюють з клієнтом на кожному етапі проекту, враховуючи його бажання та унікальні особливості об&apos;єкта. Ми прагнемо створити вироби, що точно відповідають індивідуальним потребам кожного замовника.
        Завдяки великому досвіду та професіоналізму нашої команди, ми гарантуємо високу якість виконання робіт та дотримання усіх технічних стандартів. Майстри компанії Тех-Рішення оснащені усім необхідним обладнанням та інструментами, щоб закривати проекти будь-якої складності. Наша мета - перевершити очікування клієнтів та забезпечити надійні та ефективні рішення для кожного з них.
        Ми пишаємося нашими виконаними проектами та відгуками наших клієнтів, які стають для нас найкращим підтвердженням нашої доброї репутації. Якщо вам потрібні надійні та стильні рішення для вашого об&apos;єкта, команда Тех-Рішення завжди рада вам допомогти.     
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
