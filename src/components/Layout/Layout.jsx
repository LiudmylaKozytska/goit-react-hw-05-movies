import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Header, NavList, Link } from './LayoutStyle';

const Layout = () => {
  return (
    <>
      <Header>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </NavList>
      </Header>
      <main>
        <Suspense fallback={<Oval />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
