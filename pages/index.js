import MainContainer from '../components/MainContainer';
import s from '../styles/index.module.scss';

const Index = () => {
  return (
    <MainContainer keywords={'main page'}>
      <div className={s.mainWrapper}>
        <h1 className={s.mainTitle}>
          Frontend <br></br>Developer.
        </h1>
        <p>desssssssssssssssssssssssssssssssssssssssss </p>
      </div>
    </MainContainer>
  );
};

export default Index;
