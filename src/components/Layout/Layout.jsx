import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <nav>
        <Links>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </Links>
      </nav>
      <hr />
      <Suspense fallback={<h2>Loading...</h2>}>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Suspense>
    </>
  );
};

const OutletWrapper = styled.div`
  min-height: 100vh;
  padding: 10px 45px;
`;
const Links = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

export default Layout;
