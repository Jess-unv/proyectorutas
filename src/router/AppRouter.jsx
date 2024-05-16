import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
  HomePage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  AboutPage,
  ContactPage,
  ServicesPage,
  ProfilePage,
  SettingsPage,
  ReportsPage,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route
            path='dashboard'
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path='profile'
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path='settings'
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path='reports'
            element={
              <PrivateRoute>
                <ReportsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
