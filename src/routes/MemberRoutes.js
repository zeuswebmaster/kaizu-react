import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';

// Authenticated pages
import AppHome from '../pages/member/Home';
import AppStudioDashboards from '../pages/member/studio/Dashboards';
import AppStudioRankings from '../pages/member/studio/Rankings';
import AppStudioHeatmap from '../pages/member/studio/Heatmap';
import AppPortfolio from '../pages/member/Portfolio';
import AppNews from '../pages/member/News';
import AppCalendar from '../pages/member/Calendar';
import AppSettings from '../pages/member/Settings';

// Guest pages
import FrontPage from '../pages/guest/FrontPage';
import AboutPage from '../pages/guest/AboutPage';
import LoginPage from '../pages/guest/LoginPage';
import SignupPage from '../pages/guest/SignupPage';
import TermsPage from '../pages/guest/TermsPage';
import PrivacyPage from '../pages/guest/PrivacyPage';

const MemberRoutes = () => {
  return (
    <Routes>
      
      {/* Authenticated Pages */}
      <Route path="/home" element={<AppHome />} />
      <Route path="/studio/dashboards" element={<AppStudioDashboards />} />
      <Route path="/studio/rankings" element={<AppStudioRankings />} />
      <Route path="/studio/heatmap" element={<AppStudioHeatmap />} />
      <Route path="/portfolio" element={<AppPortfolio />} />
      <Route path="/news" element={<AppNews />} />
      <Route path="/calendar" element={<AppCalendar />} />
      <Route path="/settings" element={<AppSettings />} />

      {/* Guest Pages */}
      <Route path="/" element={<FrontPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/log-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MemberRoutes;
