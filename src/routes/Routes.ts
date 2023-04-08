import { LazyExoticComponent } from 'react';
import {
  FormikBasicPage,
  RegisterPage,
  FormikYupPage,
  FormikComponentsPage,
  FormikAbstrictionPage,
  RegisterFormikPage,
  DynamicFormPage
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
    path: '/register-formik',
    to: '/register-formik',
    Component: RegisterFormikPage,
    name: 'Register Formik Page',
  },
  {
    path: '/dynamic-forms',
    to: '/dynamic-forms',
    Component: DynamicFormPage,
    name: 'Dynamic Forms Page',
  },
  {
    path: '/register',
    to: '/register',
    Component: RegisterPage,
    name: 'Register Page',
  },
];
