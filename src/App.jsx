import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BreakpointsContextProvider } from './components/breakpoints-context';
import MainPage from './components/main/MainPage';
import Copyright from './components/common/Copyright';
// Імпорт сторінок
const RoletsPage = lazy(() => import('./components/pages/RoletsPage'));
const GatesPage = lazy(() => import('./components/pages/GatesPage'));
const MotorsPage = lazy(() => import('./components/pages/MotorsPage'));

export default function App() {
  return (
  <>
    <BreakpointsContextProvider> {/* Перенесіть BreakpointsContextProvider за межі Routes */}     
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* ensures that only one route is rendered at a time */}
            <Route path="/" element={<MainPage />} />
            <Route path="/rolets" element={<RoletsPage />} />
            <Route path="/gates" element={<GatesPage />} />
            <Route path="/motors" element={<MotorsPage />} />
          </Routes>
      </Suspense>
        <Copyright />
    </BreakpointsContextProvider>
  </>
  );
}