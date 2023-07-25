import { Helmet } from 'react-helmet';
import MainCompany from './MainCompany';
import MainGallery from './MainGallery';
import MainWhyUs from './MainWhyUs';
import MainObjects from './MainObjects';
import MainContacts from './MainContacts';

export default function Main() {
  return (
    <>
    <Helmet>
        <title>Тех-Рішення</title>
        <meta name="description"
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення, то ви прийшли в потрібне місце!"
        />
    </Helmet>
      <MainCompany />
      <MainGallery />
      <MainWhyUs />
      <MainObjects />   
      <MainContacts />
    </>
  );
}
