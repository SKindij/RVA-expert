import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { BreakpointsContext } from '../breakpoints-context';
import { motion } from 'framer-motion';
import Welcome from '../welcome/Welcome';
import Navigation from '../navigation/Navigation';
import MainCompany from './MainCompany';
import MainGallery from './MainGallery';

const MainWhyUs = lazy(() => import('./MainWhyUs'));
const MainObjects = lazy(() => import('./MainObjects'));
const MainContacts = lazy(() => import('./MainContacts'));

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
          content="Якщо Вам потрібні індивідуальні секційні ворота, захисні ролети, 
              шлагбауми або ж автоматика для відкатних чи розпашних воріт, то ви завітали в потрібне місце!"
        />
        <meta name="keywords" 
          content="гаражні ворота, розпашні ворота, захисні ролети, відкатні ворота, алюмінієві ролети, шлагбауми,
              монтаж воріт, налаштування автоматики, монтаж ролет, запис пульта" />
        <link rel="canonical" href="https://rva.expert/" />
    </Helmet>
       {/* відображаємо Navigation для малих екранів */}
       {ctx.isSmall && (
          <Navigation
            component={motion.div} // обгортка Navigation при застосуванні анімації
            show={true}
            position={null} // вкажіть позицію, якщо потрібно
          />
        )}
      <Welcome />
       {/* відображаємо Navigation не для малих екранів */}
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
      <Suspense fallback={<div>Loading...</div>}>
        <MainWhyUs />
        <MainObjects />   
        <MainContacts />
      </Suspense>
    </>
  );
}
