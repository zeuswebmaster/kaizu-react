import { Navigate } from 'react-router-dom';

import { AuthLayout } from '../layouts';
import { SignIn, SignUp, LoginWithEmail, Page404 } from '../pages';

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
