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
      {/* <div className={s.contactWrapper}>
        <h1>Contact page</h1>
      </div> */}
    </MainContainer>
  );
};

export default Contacts;
