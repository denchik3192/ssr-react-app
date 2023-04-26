import { GitHub, Instagram, LinkedIn, Mail, Phone, Telegram, YouTube } from '@mui/icons-material';
import MainContainer from '../components/MainContainer';
import s from '../styles/contacts.module.scss';

const Contacts = () => {
  return (
    <MainContainer keywords={'contact page'}>
      <div className={s.contactContainer}>
        <div className={s.contact}>
          <a href={'tel:+375298623039'}>
            <Phone />
            <span>+375(29)862-30-39</span>
          </a>
        </div>
        <div className={s.contact}>
          <a href={'mailto:sd465341@gmail.com'}>
            <Mail />
            <span>Mail(sd465341@gmail.com)</span>
          </a>
        </div>
        <div className={s.contact}>
          <a href={`https://t.me/Denchik3192`}>
            <Telegram />
            <span>Telegram</span>
          </a>
        </div>
        <div className={s.contact}>
          <a href={`https://www.instagram.com/denchy92/`}>
            <Instagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className={s.contact}>
          <a href={`https://www.linkedin.com/in/denis-slabodchikov-775bb620b/`}>
            <LinkedIn />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </MainContainer>
  );
};

export default Contacts;
