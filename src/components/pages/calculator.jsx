import React from 'react';
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
      </Helmet>
      <Navigation show={true} />
      <TypographyHeader sx={{ color: '#000', mt: 10 }}>
        Шановні партнери! Сторінка з калькулятором цін на даний момент знаходиться у розробці!
      </TypographyHeader>
    </>
  );
}

export default Calculator;
