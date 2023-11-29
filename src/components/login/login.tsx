import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/constants';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const LoginComponent = () => {
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
            />
          </div>

          <div className='form-checkbox'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              className='checkbox-input'
            />
            <label htmlFor='remember-me' className='checkbox-label'>
              Remember me
            </label>
          </div>

          <div className='form-links'>
            <a href='/' className='forgot-password-link'>
              Forgot your password?
            </a>
          </div>

          <div className='form-button'>
            <button type='submit' className='submit-button'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
