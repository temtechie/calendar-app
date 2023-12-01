import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PATHS } from './constants';
import Loading from '../components/common/loading/loading';
import ProtectedRoute from './protected-route';
import UnprotectedRoute from './unprotected-route';
import DashboardLayout from '../layout/default-layout';
import DayView from '../pages/day-view';
import EditModal from '../pages/calendar-edit';

const LandingPage = lazy(() => import('../pages/landing-page'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const ErrorPage = lazy(() => import('../pages/error-page'));

const CalendarView = lazy(() => import('../pages/calendar'));
const EventPage = lazy(() => import('../pages/event'));

const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    element: (
      <Suspense fallback={<Loading />}>
        <LandingPage />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '',
    element: <UnprotectedRoute />,
    children: [
      {
        path: PATHS.LOGIN,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: PATHS.REGISTER,
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loading />}>
            <DashboardLayout />
          </Suspense>
        ),
        children: [
          { path: PATHS.HOME, element: <CalendarView /> },
          { path: PATHS.EDIT_CALENDAR, element: <EditModal /> },
          { path: PATHS.CALENDAR, element: <DayView /> },
        ],
      },
    ],
  },
]);

function CustomRoutes() {
  return <RouterProvider router={router} />;
}

export default CustomRoutes;
