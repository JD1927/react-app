import { LazyExoticComponent } from 'react';
import { FormikBasicPage, RegisterPage, FormikYupPage } from '../07-formik-react-forms/pages';
import { FormikComponentsPage } from '../07-formik-react-forms/pages/FormikComponents';

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
    path: '/formik-yup',
    to: '/formik-yup',
    Component: FormikYupPage,
    name: 'Formik Yup Page',
  },
  {
    path: '/formik-components',
    to: '/formik-components',
    Component: FormikComponentsPage,
    name: 'Formik Components Page',
  },
  {
    path: '/register',
    to: '/register',
    Component: RegisterPage,
    name: 'Register Page',
  },
];
