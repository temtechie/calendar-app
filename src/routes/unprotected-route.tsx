import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './constants';
import Loading from '../components/common/loading/loading';
import { useAppSelector } from '../redux/hook';

function UnprotectedRoute() {
  const { token } = useAppSelector((state) => state.auth);

  return token ? (
    <Navigate to={PATHS.HOME} />
  ) : (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}

export default UnprotectedRoute;
