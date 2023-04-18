import React from 'react';
import MainContainer from '../components/MainContainer';

const Portfolio = () => {
  return (
    <MainContainer>
      <div>
        <section>
          <h2>Skills</h2>
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
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              Belarusian Russian University. Qualification - information technologies engineer.{' '}
            </li>
            <li> RS School </li>
          </ul>
        </section>
        <section>
          <h2>English</h2>
          <li> B1: Adaptive English test</li>
        </section>
        <section>
          <h2>Hobby</h2>
          <li> Guitar</li>
          <li> Trips</li>
          <li> GYM</li>
        </section>
      </div>
    </MainContainer>
  );
};

export default Portfolio;
