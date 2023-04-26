import { Instagram, LinkedIn, Telegram, YouTube } from '@mui/icons-material';
import MainContainer from '../components/MainContainer';
import s from '../styles/index.module.scss';

const Index = () => {
  return (
    <MainContainer keywords={'main page'}>
      <div className={s.mainWrapper}>
        <h1 className={s.mainTitle}>
          Frontend <br></br>Developer.
        </h1>

        <p className={s.description}>Hi, I develop websites & single page aplications.</p>
      </div>
      {/* <div className={s.spiner}></div> */}
      <div className={s.social}>
        <a href="https://t.me/denchik3192">
          <Telegram />
        </a>
        <a href="https://www.linkedin.com/in/denis-slabodchikov-775bb620b/">
          <LinkedIn />
        </a>
        <a href="https://www.instagram.com/denchy92/">
          <Instagram />
        </a>
        <a href="">
          <YouTube />
        </a>
      </div>
    </MainContainer>
  );
};

export default Index;
