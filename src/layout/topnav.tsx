import { logout } from '../redux/features/auth-slice';
import { useAppDispatch } from '../redux/hook';
import './topnav.css';

function TopNav({ onToggleSidebar }: any) {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <div className='top-nav'>
      <div className='top-nav-content'>
        <div>
          <button className='hamburger-icon' onClick={onToggleSidebar}>
            &#9776;
          </button>
          <div>User Name</div>
        </div>
        <div>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
