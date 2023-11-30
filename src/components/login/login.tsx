import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/constants';
import { HiArrowSmallLeft } from 'react-icons/hi2';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hook';
import { loginUser } from '../../redux/actions/auth-action';

const LoginComponent = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState({ email: '', password: '' });

  const handleLogin = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    dispatch(loginUser(user))
      .then((resultAction) => {
        const originalPromiseResult = resultAction.payload;
        if (originalPromiseResult) {
          window.location.href = '/home';
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <div className='login-content'>
        <div>
          <Link to={PATHS.ROOT} className='login-logo'>
            <HiArrowSmallLeft /> Calendar App
          </Link>
          <h2 className='login-title'>Sign in to your account</h2>
        </div>
        <form className='login-form'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='form-group'>
            <label htmlFor='email-address'>Email address</label>
            <input
              id='email-address'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='input-field'
              placeholder='Email address'
              onChange={handleLogin}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='input-field'
              placeholder='Password'
              onChange={handleLogin}
            />
          </div>

          <div className='form-links'>
            <a href='/' className='forgot-password-link'>
              Forgot your password?
            </a>
          </div>
          <div className='form-button'>
            <button
              type='submit'
              className='submit-button'
              onClick={handleFormSubmit}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
