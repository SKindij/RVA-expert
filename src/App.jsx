import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BreakpointsContextProvider } from './components/breakpoints-context';
import MainPage from './components/main/MainPage';
import Copyright from './components/common/Copyright';
// Імпорт сторінок
const ProductsPage = lazy(() => import('./components/pages/ProductsPage'));
const CalculatorPage = lazy(() => import('./components/pages/CalculatorPage'));

export default function App() {
  return (
  <>
  <BreakpointsContextProvider> {/* Перенесіть BreakpointsContextProvider за межі Routes */}     
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