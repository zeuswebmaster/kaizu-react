import { MainLayout } from '../layouts';
import {
  Home,
  Dashboard,
  Rankings,
  Watchlists,
  Portfolio,
  News,
  MacroCalendar,
  Stocks,
  SeeAll,
  Settings,
} from '../pages';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { element: <Home />, index: true },
    { path: 'studio/dashboard', element: <Dashboard /> },
    { path: 'studio/rankings', element: <Rankings /> },
    { path: 'studio/watchlists', element: <Watchlists /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'news', element: <News /> },
    { path: 'calendar/macro_calendar', element: <MacroCalendar /> },
    { path: 'calendar/stocks', element: <Stocks /> },
    { path: 'calendar/see_all', element: <SeeAll /> },
    { path: 'settings', element: <Settings /> },
  ],
};

export default MainRoutes;
