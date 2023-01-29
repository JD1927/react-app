import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    name: 'Lazy-1',
    Component: Lazy1,
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    name: 'Lazy-2',
    Component: Lazy2,
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    name: 'Lazy-3',
    Component: Lazy3,
  },
];