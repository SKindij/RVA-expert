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
          content="Якщо Вам потрібен індивідуальний підхід при виконанні замовлення на секційні ворота, захисні ролети, 
              шлагбауми або ж автоматику для відкатних чи розпашних воріт, то ви прийшли в потрібне місце!"
        />
        <meta name="keywords" 
          content="гаражні ворота, розпашні ворота, захисні ролети, відкатні ворота, алюмінієві ролети, шлагбауми,
              монтаж воріт, налаштування автоматики, монтаж ролет, запис пульта" />
    </Helmet>
      <MainCompany />
      <MainGallery />
      <MainWhyUs />
      <MainObjects />   
      <MainContacts />
    </>
  );
}
