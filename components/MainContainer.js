import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'ssr, react ssr, next.js ' + keywords}></meta>
        <title>SSR-APP</title>
      </Head>
      <header>
        <nav className="nav">
          <Link className="link" href="/">
            Main
          </Link>
          <Link className="link" href="/users">
            Users
          </Link>
        </nav>
      </header>
      <div>{children}</div>
    </>
  );
};
export default MainContainer;
