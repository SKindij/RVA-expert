import { lazy, Suspense } from 'react';
import { BreakpointsContextProvider } from './components/breakpoints-context';
import { useContext } from 'react';
import Welcome from '../src/components/welcome/Welcome';
import Navigation from '../src/components/navigation/Navigation';
import Main from './components/main/MainPage';
import Copyright from './components/common/Copyright';
import { motion } from 'framer-motion';
import { BreakpointsContext } from './components/breakpoints-context';
// Імпорт сторінок
const ProductsPage = lazy(() => import('./components/pages/ProductsPage'));
const CalculatorPage = lazy(() => import('./components/pages/CalculatorPage'));

const appbarVariants = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: { duration: 1 },
  },
};

export default function App() {
  const ctx = useContext(BreakpointsContext);
  return (
    <BreakpointsContextProvider>
    <>
    
      <Welcome />
      {/* умовним оператором відображаємо Navigation не для малих екранів */}
      {!ctx.isSmall && (
        <Navigation
          initial="initial" animate="animate"
          variants={appbarVariants} component={motion.div}
          show={true} 
          position={null} // Вкажіть позицію, якщо потрібно
        />
      )}
      <Main />
      <Copyright />

    </>
    </BreakpointsContextProvider>
  );
}
