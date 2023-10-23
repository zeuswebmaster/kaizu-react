import { lazy } from 'react';

import { MainLayout } from '../layouts';
import { LoadComponent } from '../components';

const HomeLayout = LoadComponent(lazy(() => import('../pages/Home')));
const DashboardLayout = LoadComponent(lazy(() => import('../pages/studio/Dashboard')));
const RankingsLayout = LoadComponent(lazy(() => import('../pages/studio/Rankings')));
const WatchlistsLayout = LoadComponent(lazy(() => import('../pages/studio/Watchlists')));
const PortfolioLayout = LoadComponent(lazy(() => import('../pages/Portfolio')));
const NewsLayout = LoadComponent(lazy(() => import('../pages/News')));
const MacroCalendarLayout = LoadComponent(lazy(() => import('../pages/calendar/MacroCalendar')));
const StocksLayout = LoadComponent(lazy(() => import('../pages/calendar/Stocks')));
const SeeAllLayout = LoadComponent(lazy(() => import('../pages/calendar/SeeAll')));
const SettingsLayout = LoadComponent(lazy(() => import('../pages/Settings')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { element: <HomeLayout />, index: true },
    { path: 'studio/dashboard', element: <DashboardLayout /> },
    { path: 'studio/rankings', element: <RankingsLayout /> },
    { path: 'studio/watchlists', element: <WatchlistsLayout /> },
    { path: 'portfolio', element: <PortfolioLayout /> },
    { path: 'news', element: <NewsLayout /> },
    { path: 'calendar/macro_calendar', element: <MacroCalendarLayout /> },
    { path: 'calendar/stocks', element: <StocksLayout /> },
    { path: 'calendar/see_all', element: <SeeAllLayout /> },
    { path: 'settings', element: <SettingsLayout /> },
  ],
};

export default MainRoutes;
