//потрібно додати збереження стану завантаження для лінивого компонента
import { useState, useEffect } from 'react';
//import { lazy, Suspense } from 'react';
import Navigation from '../navigation/Navigation';
import { TypographyHeader } from '../common/TypographyVariants';
import { Helmet } from 'react-helmet';

function GatesPage() {
  const [navigationLoaded, setNavigationLoaded] = useState(false);
  useEffect(() => {
    // При завантаженні компонента ProductsPage позначаємо, що навігація завантажилась
    setNavigationLoaded(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>RVA Секційні ворота</title>
        <meta name="description"
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення, то ви прийшли в потрібне місце!"
        />
        <meta name="keywords" 
          content="секційні ворота, розпашна автомаатика, ролові ворота, відкатний двигун, віконна ролет, шлагбаум,
              устаановка воріт, монтаж автоматики, установка ролет, радіоприймач" />
      </Helmet>
      {/* Перевіряємо, чи завантажилась навігація перед її рендерингом */}
      {navigationLoaded && <Navigation show={true} />}
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Шановні клієнти!<br/>
        Сторінка із рзноманіттям секційних воріт на даний момент знаходиться у розробці!
      </TypographyHeader>
    </>
  );
}

export default GatesPage;