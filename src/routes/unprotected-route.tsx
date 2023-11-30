import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './constants';
import Loading from '../components/common/loading/loading';
import { useAppSelector } from '../redux/hook';

function UnprotectedRoute() {
  const { token, user, error } = useAppSelector((state) => state.auth);

  console.log('state', token, user, error);

  const auth = {
    id: '',
  };

  return token ? (
    <Navigate to={PATHS.HOME} />
  ) : (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}

export default UnprotectedRoute;
