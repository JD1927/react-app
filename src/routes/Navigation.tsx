import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { Suspense } from 'react';
import { routes } from './Routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ path, to, name }) => (
                  <li key={path}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}>
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({path, Component}) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />} />
              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
