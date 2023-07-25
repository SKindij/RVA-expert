//потрібно додати збереження стану завантаження для лінивого компонента
import { useState, useEffect } from 'react';
//import { lazy, Suspense } from 'react';
import { TypographyHeader, TypographyParagraph } from '../common/TypographyVariants';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
// Завантажуємо ліниво компоненти Rolets та Gatess
//const Rolets = lazy(() => import('./products/Rolets'));
//const Gatess = lazy(() => import('./products/Gates'));

function ProductsPage() {
  const [navigationLoaded, setNavigationLoaded] = useState(false);
  useEffect(() => {
    // При завантаженні ProductsPage позначаємо, що навігація завантажилась
    setNavigationLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>RVA Продукція</title>
        <meta name="description"
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення, то ви прийшли в потрібне місце!"
        />
        <meta name="keywords" 
          content="секційні ворота, розпашна автомаатика, ролові ворота, відкатний двигун, віконна ролет, шлагбаум,
              устаановка воріт, монтаж автоматики, установка ролет, радіоприймач" />
      </Helmet>
      {/* Перевіряємо, чи завантажилась навігація перед її рендерингом */}
      {navigationLoaded && <Navigation show={true} />}
{/*
      <Suspense fallback={<div>Loading...</div>}>
        <Rolets />
        <Gatess />
      </Suspense>
*/}
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Шановні клієнти!<br/>
        Незабаром тут буде відображатися перелік нашої продукції.
        
      </TypographyHeader>
      <TypographyParagraph
        mb={15} 
      >
        Секційні ворота. Захисні ролети.<br/>
        Автоматика для розпашних та відкатних воріт.
      </TypographyParagraph>
    </>
  );
}

export default ProductsPage;