import Loading from '../components/common/loading/loading';
import LoginComponent from '../components/login/login';
import '../components/login/login.css';
import { useAppSelector } from '../redux/hook';

export default function Login() {
  const { loading } = useAppSelector((state) => state.auth);

  if (loading) return <Loading />;

  return (
    <>
      <div className='login-container'>
        <LoginComponent />
      </div>
    </>
  );
}
