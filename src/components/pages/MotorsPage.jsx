// components/pages/MotorsPage.jsx
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Brands from './motors/Brands';
import Services from './motors/Services';

function MotorsPage() {
  const [navigationLoaded, setNavigationLoaded] = useState(false);
  useEffect(() => {
    // При завантаженні ProductsPage позначаємо, що навігація завантажилась
    setNavigationLoaded(true);
  }, []);

  return (
  <>
    <Helmet>
      <title>RVA Автоматика для воріт</title>
      <meta name="description"
        content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення, то ви прийшли в потрібне місце!"
      />
      <meta name="keywords" 
        content="розпашна автоматика, відкатний двигун, автоматична ролета, шлагбаум,
          установка двигуна, монтаж автоматики, установка ролет, радіоприймач, запис пульта" />
    </Helmet>
    {/* Перевіряємо, чи завантажилась навігація перед її рендерингом */}
    {navigationLoaded && <Navigation show={true} />}
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', my: 4}}>
        <Typography variant="h4" component="h1" gutterBottom>
            Автоматика для всіх видів воріт. Шлагбауми.
        </Typography>
      </Box>
      <Brands />
      <Services />


    </Container>
  </>
  );
}
export default MotorsPage;