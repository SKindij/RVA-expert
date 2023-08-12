// components/pages/MotorsPage.jsx
import { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MotorBrands from './motors/MotorBrands';
import MotorTypes from './motors/MotorTypes';
import MotorGoods from './motors/MotorGoods';
import MotorFAQ from './motors/MotorFAQ';
import './page-styles-module.css';
// Ліниво завантажуємо компонент VideoGallery
const VideoGallery = lazy(() => import('./motors/VideoGallery'));
const videoUrls = [
  {
   id: 'V101',
   url: 'https://www.youtube.com/embed/S2z2mU6LIeU',
   title: 'ARES VELOCE SMART BT A500 Італійська швидкісна автоматика для колективного користування'
  },
  {
   id: 'V102',
   url: 'https://www.youtube.com/embed/RuAvmA3fBTI',
   title: 'PHOBOS BT A40 відкриття розпашних створок назовні'
  },
  {
   id: 'V103',
   url: 'https://www.youtube.com/embed/0a8iRZuIbZY',
   title: 'BBT BAT модуль аварійного живлення для розпашних воріт'
   },
  {
   id: 'V104',
   url: 'https://www.youtube.com/embed/zpDCnH1Uyq8', 
   title: 'SL BAT 2 модуль аварійного живлення відкатних воріт'
   },
  {
   id: 'V105',
   url: 'https://www.youtube.com/embed/DZv_dtwVGVw',
   title: 'BFT GIOTTO ULTRA XL приклад роботи на об\'єкті'
   },
  {
   id: 'V106',
   url: 'https://www.youtube.com/embed/OVD8X1BqPs8',
   title: 'E5 швидкісна автоматика для хвіртки або дверей'
   },  
];

function MotorsPage({ exchangeRate }) {
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
        content="Якщо Вам потрібна автоматика для воріт чи шлагбауми, то тут ви знайдете багато цікавого!"
      />
      <meta name="keywords" 
        content="розпашна автоматика, відкатний двигун, шлагбаум, автоматика на ворота,
          установка двигуна, монтаж автоматики, радіоприймач, запис пульта" />
      <link rel="canonical" href="https://rva.expert/motors" />
    </Helmet>
    {/* Перевіряємо, чи можемо відображати навігацію */}
    {showNavigation && <Navigation show={true} />}
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Сучасна автоматика для воріт: надійність та комфорт на кожен день
        </Typography>
      </Box>
      <MotorBrands />
      <MotorTypes />
      <MotorGoods exchangeRate={exchangeRate} />
      {/* Використовуємо Suspense для лінивого завантаження VideoGallery */}
      <Suspense fallback={<div>Loading...</div>}>
        <VideoGallery videoUrls={videoUrls} />
      </Suspense>
      <MotorFAQ />
    </Container>
  </>
  );
}
MotorsPage.propTypes = {
  exchangeRate: PropTypes.number.isRequired
};
export default MotorsPage;