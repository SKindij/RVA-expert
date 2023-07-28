// components/pages/MotorsPage.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GateBrands from './gates/GateBrands';
import GateTypes from './gates/GateTypes';
import GateFAQ from './gates/GateFAQ';

function GatesPage() {
  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    // задаємо певну затримку для рендерінгу навігації
    const timeout = setTimeout(() => {
      setShowNavigation(true);
    }, 100);    
    // прибираємо таймер при розмонтуванні компонента
    return () => clearTimeout(timeout);
  }, []);

  return (
  <>
    <Helmet>
      <title>RVA Автоматика для воріт</title>
      <meta name="description"
        content="Якщо Вам потрібена автоматика для воріт, ви прийшли в потрібне місце!"
      />
      <meta name="keywords" 
        content="розпашна автоматика, відкатний двигун, автоматична ролета, шлагбаум,
          установка двигуна, монтаж автоматики, установка ролет, радіоприймач, запис пульта" />
    </Helmet>
    {/* Перевіряємо, чи можемо відображати навігацію */}
    {showNavigation && <Navigation show={true} />}
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Сучасна автоматика для воріт: надійність та комфорт на кожен день
        </Typography>
      </Box>
      <GateBrands />
      <GateTypes />
      <GateFAQ />

    </Container>
  </>
  );
}
export default GatesPage;