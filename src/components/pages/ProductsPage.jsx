import { TypographyHeader } from '../common/TypographyVariants';
import { Helmet } from 'react-helmet';
import Navigation from '../navigation/Navigation';
//import Rolets from './products/Rolets';

function ProductsPage() {
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
      <Navigation show={true} />
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Шановні клієнти!
      </TypographyHeader>
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Незабаром тут буде відображатися перелік нашою продукції.
      </TypographyHeader>
    </>
  );
}

export default ProductsPage;
