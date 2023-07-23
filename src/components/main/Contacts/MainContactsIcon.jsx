import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function MainContactsIcon(props) {
  return props.id === 'Компанія' ? (
    <AccountBalanceRoundedIcon htmlColor={props.color} />
  ) : props.id === 'Адреса' ? (
    <HomeIcon htmlColor={props.color} />
  ) : props.id === 'Телефон' ? (
    <LocalPhoneRoundedIcon htmlColor={props.color} />
  ) : props.id === 'Пошта' ? (
    <MailRoundedIcon htmlColor={props.color} />
  ) : null;
}
