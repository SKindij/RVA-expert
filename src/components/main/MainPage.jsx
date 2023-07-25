import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import { motion } from 'framer-motion';
import Welcome from '../welcome/Welcome';
import Navigation from '../navigation/Navigation';
import MainCompany from './MainCompany';
import MainGallery from './MainGallery';
import MainWhyUs from './MainWhyUs';
import MainObjects from './MainObjects';
import MainContacts from './MainContacts';

const appbarVariants = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: { duration: 1 },
  },
};

export default function MainPage() {
  const ctx = useContext(BreakpointsContext);
  return (
    <>
    <Helmet>
        <title>Тех-Рішення</title>
        <meta name="description"
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення на секційні ворота, захисні ролети, 
              шлагбауми або ж автоматику для відкатних чи розпашних воріт, то ви прийшли в потрібне місце!"
        />
        <meta name="keywords" 
          content="гаражні ворота, розпашні ворота, захисні ролети, відкатні ворота, алюмінієві ролети, шлагбауми,
              монтаж воріт, налаштування автоматики, монтаж ролет, запис пульта" />
    </Helmet>
      <Welcome />
       {/* умовним оператором відображаємо Navigation не для малих екранів */}
       {!ctx.isSmall && (
          <Navigation
            initial="initial" //пропс для бібліотеки framer-motion
            animate="animate" //пропс для бібліотеки framer-motion
            variants={appbarVariants} // інструкції для різних варіацій анімації
            component={motion.div} // обгортка Navigation при застосуванні анімації
            show={true}
            position={null} // вкажіть позицію, якщо потрібно
          />
        )}
      <MainCompany />
      <MainGallery />
      <MainWhyUs />
      <MainObjects />   
      <MainContacts />
    </>
  );
}
