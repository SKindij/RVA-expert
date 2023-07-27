// components/pages/MotorsPage.jsx
import { useState, useEffect } from 'react';
import { TypographyHeader, TypographyParagraph } from '../common/TypographyVariants';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';


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








  </>
  );
}

export default MotorsPage;