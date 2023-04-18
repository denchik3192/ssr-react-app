import { Instagram, LinkedIn, Mail, Phone, Telegram, YouTube } from '@mui/icons-material';
import MainContainer from '../components/MainContainer';
import s from '../styles/contacts.module.scss';

const Contacts = () => {
  const socialLiks = [
    { id: 0, name: 'instagram' },
    { id: 1, name: 'LinkedIn' },
    { id: 2, name: 'instagram' },
  ];
  return (
    <MainContainer keywords={'contact page'}>
      <div>
        <Instagram />
      </div>

      <LinkedIn />
      <YouTube />
      <Mail />
      <Telegram />
      <Phone />
    </MainContainer>
  );
};

export default Contacts;
