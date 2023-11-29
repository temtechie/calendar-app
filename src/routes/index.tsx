import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PATHS } from './constants';
import Loading from '../components/common/loading/loading';
import ProtectedRoute from './protected-route';
import UnprotectedRoute from './unprotected-route';
import DefaultLayout from '../layout/default-layout';
import DashboardLayout from '../layout/default-layout';
import EventPage from '../pages/event';

const LandingPage = lazy(() => import('../pages/landing-page'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const ErrorPage = lazy(() => import('../pages/error-page'));

const Layout = lazy(() => import('../components/layout'));
// const PhoneTopics = lazy(() => import('../pages/PhoneTopics'));
// const TodayInHistory = lazy(() => import('../pages/TodayInHistory'));
// const TodayBirthdays = lazy(() => import('../pages/TodayBirthdays'));
const CalendarView = lazy(() => import('../pages/calendar-view'));
// const Settings = lazy(() => import('../pages/Settings'));
// const CreateAdvert = lazy(() => import('../pages/CreateAdvert'));
// const StationIDs = lazy(() => import('../pages/StationIDs'));
// const EventsPage = lazy(() => import('../pages/EventsPage'));
// const News = lazy(() => import('../pages/News'));

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
          // { path: PATHS.HOME, element: <HomePage /> },
          { path: PATHS.HOME, element: <CalendarView /> },
          { path: 'event', element: <EventPage /> },
          // { path: PATHS.STATION_IDS, element: <StationIDs /> },
          // { path: PATHS.IMPOSSIBLE_TRIVIA, element: <ImpossibleTrivia /> },
          // { path: PATHS.PHONE_TOPICS, element: <PhoneTopics /> },
          // { path: PATHS.SETTINGS, element: <Settings /> },
          // { path: PATHS.TODAY_HISTORY, element: <TodayInHistory /> },
          // { path: PATHS.TODAY_BIRTHDAYS, element: <TodayBirthdays /> },
          // { path: PATHS.EVENTS, element: <EventsPage /> },
          // { path: PATHS.NEWS, element: <News /> },
        ],
      },
    ],
  },
]);

function CustomRoutes() {
  return <RouterProvider router={router} />;
}

export default CustomRoutes;
