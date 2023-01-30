import { LazyExoticComponent } from 'react';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: 'shopping',
    to: 'shopping',
    Component: ShoppingPage,
    name: 'Shopping',
  },
];
