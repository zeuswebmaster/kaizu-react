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
  MacroDashboard,
  Assets,
  AssetsDetail,
  PortfolioDetail,
  NewsDetail,
} from '../pages';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { element: <Home />, index: true },
    { path: 'studio/dashboard', element: <Dashboard /> },
    { path: 'studio/macro_dashboard', element: <MacroDashboard /> },
    { path: 'studio/rankings', element: <Rankings /> },
    { path: 'studio/watchlists', element: <Watchlists /> },
    { path: 'studio/assets', element: <Assets /> },
    { path: 'studio/assets/:id', element: <AssetsDetail /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'portfolio/detail', element: <PortfolioDetail /> },
    { path: 'news', element: <News /> },
    { path: 'news/:id', element: <NewsDetail /> },
    { path: 'calendar/macro_calendar', element: <MacroCalendar /> },
    { path: 'calendar/stocks', element: <Stocks /> },
    { path: 'calendar/see_all', element: <SeeAll /> },
    { path: 'settings', element: <Settings /> },
  ],
};

export default MainRoutes;
