import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AnimalsPage from './pages/AnimalsPage';
import BirthsPage from './pages/BirthsPage';
import VaccinationsPage from './pages/VaccinationsPage';
import DisposalsPage from './pages/DisposalsPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Componente raíz de la aplicación.
 */
const App = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginPage onLoginSuccess={setUser} />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/births" element={<BirthsPage />} />
          <Route path="/vaccinations" element={<VaccinationsPage />} />
          <Route path="/disposals" element={<DisposalsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
