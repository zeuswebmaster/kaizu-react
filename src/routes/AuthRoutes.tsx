import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthLayout } from '../layouts';
import { LoadComponent } from '../components';

const SignIn = LoadComponent(lazy(() => import('../pages/auth/SignIn')));
const SignUp = LoadComponent(lazy(() => import('../pages/auth/SignUp')));
const LoginWithEmail = LoadComponent(lazy(() => import('../pages/auth/LoginWithEmail')));
const Page404 = LoadComponent(lazy(() => import('../pages/Page404')));

const AuthRoutes = [
  {
    path: '/sign-in',
    element: <AuthLayout />,
    children: [{ element: <SignIn />, index: true }],
  },
  {
    path: '/sign-up',
    element: <AuthLayout />,
    children: [{ element: <SignUp />, index: true }],
  },
  {
    path: '/login-email',
    element: <AuthLayout />,
    children: [{ element: <LoginWithEmail />, index: true }],
  },
  {
    path: '/404',
    element: <Page404 />,
  },
  { path: '*', element: <Navigate to="/404" replace /> },
];

export default AuthRoutes;
