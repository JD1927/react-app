import { LazyExoticComponent } from 'react';
import {
  FormikBasicPage,
  RegisterPage,
  FormikYupPage,
  FormikComponentsPage,
  FormikAbstrictionPage
} from '../07-formik-react-forms/pages';

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
    path: '/formik-abstriction',
    to: '/formik-abstriction',
    Component: FormikAbstrictionPage,
    name: 'Formik Abstriction Page',
  },
  {
    path: '/register',
    to: '/register',
    Component: RegisterPage,
    name: 'Register Page',
  },
];
