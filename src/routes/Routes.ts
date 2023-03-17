import { LazyExoticComponent } from 'react';
import { FormikBasicPage, RegisterPage } from '../07-formik-react-forms/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    path: '/formik-basic',
    to: '/formik-basic',
    Component: FormikBasicPage,
    name: 'Formik Basic Page',
  },
  {
    path: '/register',
    to: '/register',
    Component: RegisterPage,
    name: 'Register Page',
  },
];
