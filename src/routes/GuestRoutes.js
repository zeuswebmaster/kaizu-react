import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/NotFound';
import FrontPage from '../pages/guest/FrontPage';
import AboutPage from '../pages/guest/AboutPage';
import LoginPage from '../pages/guest/LoginPage';
import SignupPage from '../pages/guest/SignupPage';
import TermsPage from '../pages/guest/TermsPage';
import PrivacyPage from '../pages/guest/PrivacyPage';

const GuestRoutes = () => {
  return (
    <Routes>
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

export default GuestRoutes;
