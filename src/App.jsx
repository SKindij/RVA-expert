import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BreakpointsContextProvider } from './components/breakpoints-context';
import { useContext } from 'react';
import Welcome from '../src/components/welcome/Welcome';
import Navigation from '../src/components/navigation/Navigation';
import MainPage from './components/main/MainPage';
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
  <>
  <BreakpointsContextProvider> {/* Перенесіть BreakpointsContextProvider за межі Routes */}
        <Welcome />
        {/* умовним оператором відображаємо Navigation не для малих екранів */}
        {!ctx.isSmall && (
          <Navigation
            initial="initial"
            animate="animate"
            variants={appbarVariants}
            component={motion.div}
            show={true}
            position={null} // Вкажіть позицію, якщо потрібно
          />
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* ensures that only one route is rendered at a time */}
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} /> {/* Використайте LazyProductsPage */}
            <Route path="/calculator" element={<CalculatorPage />} /> {/* Використайте LazyCalculatorPage */}
          </Routes>
        </Suspense>
        <Copyright />
      </BreakpointsContextProvider>
  </>
  );
}
