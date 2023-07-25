
import Navigation from '../navigation/Navigation';
import { TypographyHeader } from '../common/TypographyVariants';
import { Helmet } from 'react-helmet';

function CalculatorPage() {
  return (
    <>
      <Helmet>
        <title>RVA Калькулятор цін</title>
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
        Сторінка з калькулятором цін на даний момент знаходиться у розробці!
      </TypographyHeader>
    </>
  );
}

export default CalculatorPage;
