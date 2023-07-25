
import Navigation from '../src/components/Navigation/Navigation';
import { TypographyHeader } from '../src/components/common/TypographyVariants';
import { Helmet } from 'react-helmet';

function Calculator() {
  return (
    <>
      <Helmet>
        <title>Калькулятор цін</title>
        <meta name="description"
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення, то ви прийшли в потрібне місце!"
        />
        <meta name="keywords" 
          content="секційні ворота, розпашна автомаатика, ролові ворота, відкатний двигун, віконна ролет, шлагбаум,
              устаановка воріт, монтаж автоматики, установка ролет, радіоприймач" />
      </Helmet>
      <Navigation show={true} />
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Шановні клієнти! Сторінка з калькулятором цін на даний момент знаходиться у розробці!
      </TypographyHeader>
    </>
  );
}

export default Calculator;
