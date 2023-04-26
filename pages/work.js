import Link from 'next/link';
import React from 'react';
import MainContainer from '../components/MainContainer';
import pizzaImg from '../assets/pizza.png';
import momentumImg from '../assets/momentum.png';
import museumImg from '../assets/museum.png';
import s from '../styles/work.module.scss';
import { LinkRounded } from '@mui/icons-material';
import Image from 'next/image';

const Work = ({ users }) => {
  return (
    <>
      <MainContainer keywords={'users page'}>
        <div className={s.projects}>
          <div className={s.project}>
            <div className={s.projectImage}>
              <Image src={momentumImg} />
            </div>
            <div className={s.description}>
              <a href="https://silver-lebkuchen-e87765.netlify.app">
                <h3 className={s.title}>Momentum</h3>
                <LinkRounded></LinkRounded>
              </a>
              <p className={s.techs}>react/redux Toolkit/scss/context</p>
            </div>
          </div>
          <div className={s.project}>
            <div className={s.projectImage}>
              <Image src={pizzaImg} />
            </div>
            <div className={s.description}>
              <a href="https://jovial-cocada-acafde.netlify.app/?categoryId=0&sortProperty=rating&currentPage=1">
                <h3 className={s.title}>React-pizza</h3>
                <LinkRounded></LinkRounded>
              </a>
              <p className={s.techs}>react/redux Toolkit/scss/context</p>
            </div>
          </div>
          <div className={s.project}>
            <div className={s.projectImage}>
              <Image src={museumImg} />
            </div>
            <div className={s.description}>
              <a href="https://rolling-scopes-school.github.io/denchik3192-JSFE2021Q3/museum/">
                <h3 className={s.title}>Museum</h3>
                <LinkRounded></LinkRounded>
              </a>
              <p className={s.techs}>html/css/js</p>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};
export default Work;
export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
