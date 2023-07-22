import { Grid } from '@mui/material';
import MainTypowriter from './Company/MainTypowriter';
import { motion } from 'framer-motion';
import { TypographyParagraph } from '../common/TypographyVariants';

const paragraphVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 4 } },
};

export default function MainCompany() {
  return (
    <Grid
      container justifyContent="center"
      alignItems="center" direction="column"
      sx={{ backgroundColor: '#F3F3F3', height: 'auto' }}
      pt={4} id="company" className="titlefix"
    >
      <Grid container item justifyContent="center" alignItems="center">
        <MainTypowriter />
      </Grid>
      <Grid
        container item mb={5}
        justifyContent="center" alignItems="flex-start"
      >
        <TypographyParagraph
          component={motion.p} variants={paragraphVariants}
          initial="initial" whileInView="animate"
          viewport={{ once: true }} mt={2}
        >
          Тех-Рішення- компанія, що спеціалізується на виробництві, монтажі та сервісному обслуговуванні гаражних секційних воріт та зовнішніх алюмінієвих ролет. 
          Також ми проводимо установку та налаштування автоматики для відкатних та розпашних воріт, шлагбаумів.
          За багато років роботи нами реалізовано безліч різноманітних проектів. 
          Якщо Вам потрібен індивідуальний підхід та професіоналізм під час виконання замовлення - ви прийшли у потрібне місце!
        </TypographyParagraph>
      </Grid>
    </Grid>
  );
}
