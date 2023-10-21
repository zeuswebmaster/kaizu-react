import { lazy } from 'react';

import { MainLayout } from '../layouts';
import { LoadComponent } from '../components';

const HomeLayout = LoadComponent(lazy(() => import('../pages/Home')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [{ element: <HomeLayout />, index: true }],
};

export default MainRoutes;
