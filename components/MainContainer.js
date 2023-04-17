import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MainContainer = ({ children, keywords }) => {
  const router = useRouter();
  const links = [
    { id: 0, name: 'About', link: '/' },
    { id: 1, name: 'Work', link: '/work' },
    { id: 2, name: 'Contacts', link: '/contacts' },
  ];

  return (
    <>
      <Head>
        <meta keywords={'ssr, react ssr, next.js ' + keywords}></meta>
        <title>SSR-APP</title>
      </Head>
      <header>
        <nav className="nav">
          <div className="container">
            {links.map(({ id, link, name }) => (
              <Link
                key={id}
                className={`link ${router.pathname === link ? 'active' : ''}`}
                href={link}>
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <div className="container">{children}</div>
    </>
  );
};
export default MainContainer;
