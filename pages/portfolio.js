import React from 'react';
import MainContainer from '../components/MainContainer';
import s from '../styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <MainContainer>
      <div style={{ width: '100%', marginTop: '20px' }}>
        <section className={s.section}>
          <h2>Skills:</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Redux/Redux Toolkit</li>
            <li>Typescript</li>
            <li>GraphQL</li>
            <li>SQLite3</li>
            <li>Oracle</li>
          </ul>
        </section>
        <section className={s.section}>
          <h2>Education:</h2>
          <ul>
            <li>
              Belarusian Russian University. Qualification - Information technologies engineer.{' '}
            </li>
            <li>The Rolling Scopes School - JavaScript/Front-end</li>
          </ul>
        </section>
        <section className={s.section}>
          <h2>English:</h2>
          <ul>
            <li> B1: Adaptive English test</li>
          </ul>
        </section>
        <section className={s.section}>
          <h2>Work:</h2>
          <ul>
            <li> Relay protection (2012-2019)</li>
            <li> Automated control system engineer (2019-current)</li>
          </ul>
        </section>
        <section className={s.section}>
          <h2>Hobbies:</h2>
          <ul>
            <li> Guitar</li>
            <li> Trips</li>
            <li> GYM</li>
          </ul>
        </section>
      </div>
    </MainContainer>
  );
};

export default Portfolio;
