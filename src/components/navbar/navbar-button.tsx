import { Link } from 'react-router-dom';

function NavbarButton() {
  return (
    <div className='navbar__buttons'>
      <Link to='/login' className='navbar__login-btn'>
        Login
      </Link>
      {/* <Link to='/register' className='navbar__register-btn'>
        Register
      </Link> */}
    </div>
  );
}

export default NavbarButton;
