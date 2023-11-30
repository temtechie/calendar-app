import { Outlet } from 'react-router-dom';
import Login from '../pages/login';

function ProtectedRoute() {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
