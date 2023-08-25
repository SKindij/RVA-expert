// components/pages/GatesPage.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GateTypes from './gates/GateTypes';
import PageGoods from '../common/PageGoods';
import { blocksDataForGates } from './blocksData';
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
      <title>RVA Секційні ворота</title>
      <meta name="description"
        content="Якщо Вам потрібні секційні ворота, ви прийшли в потрібне місце!"
      />
      <meta name="keywords" 
        content="монтаж секційних воріт, гаражні ворота, підйомні ворота, ворота з панелей, установка воріт" />
      <link rel="canonical" href="https://rva.expert/gates" />
    </Helmet>
    {/* Перевіряємо, чи можемо відображати навігацію */}
    {showNavigation && <Navigation show={true} />}
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Майстерність та інновації: Ворота для всіх випадків життя
        </Typography>
      </Box>
      <GateTypes />
      <PageGoods blocksData={blocksDataForGates} />
      <GateFAQ />
    </Container>
  </>
  );
}
export default GatesPage;