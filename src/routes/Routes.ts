import { LazyExoticComponent } from 'react';
import { AboutPage, HomePage, UsersPage } from '../07-formik-react-forms/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: '/',
    to: '/',
    Component: HomePage,
    name: 'Home',
  },
  {
    path: '/about',
    to: '/about',
    Component: AboutPage,
    name: 'About',
  },
  {
    path: '/users',
    to: '/users',
    Component: UsersPage,
    name: 'Users',
  },
];
