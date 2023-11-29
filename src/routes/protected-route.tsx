import { Outlet } from 'react-router-dom';
import Login from '../pages/login';

function ProtectedRoute() {
  const auth = {
    id: '',
  };

  return auth?.id ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
