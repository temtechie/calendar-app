import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './constants';
import Loading from '../components/common/loading/loading';

function UnprotectedRoute() {
  const auth = {
    id: '',
  };

  return auth && auth.id ? (
    <Navigate to={PATHS.HOME} />
  ) : (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}

export default UnprotectedRoute;
