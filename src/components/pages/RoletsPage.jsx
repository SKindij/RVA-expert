// components/pages/RoletsPage.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RoletTypes from './rolets/RoletTypes';
import RoletFAQ from './rolets/RoletFAQ';

function RoletsPage() {
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
      <title>RVA Захисні ролети</title>
      <meta name="description"
        content="Якщо Вам потрібні захисні ролети, ви прийшли в потрібне місце!"
      />
      <meta name="keywords" 
        content="монтаж гаражних ролет, ролети на вікна, ролетні решітки, ролети з ламелей, установка ролет" />
      <link rel="canonical" href="https://rva.expert/rolets" />
    </Helmet>
    {/* Перевіряємо, чи можемо відображати навігацію */}
    {showNavigation && <Navigation show={true} />}
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Зовнішні Захисні Алюмінієві Ролети
        </Typography>
      </Box>

      <RoletTypes />
      <RoletFAQ />

    </Container>
  </>
  );
}
export default RoletsPage;