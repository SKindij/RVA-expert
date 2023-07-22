import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function MainContactsIcon(props) {
  return props.id === 'Полное Наименование' ? (
    <AccountBalanceRoundedIcon htmlColor={props.color} />
  ) : props.id === 'Адрес' ? (
    <HomeIcon htmlColor={props.color} />
  ) : props.id === 'Телефон / Факс' ? (
    <LocalPhoneRoundedIcon htmlColor={props.color} />
  ) : props.id === 'Электронный Адрес' ? (
    <MailRoundedIcon htmlColor={props.color} />
  ) : null;
}
