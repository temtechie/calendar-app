import { Link } from 'react-router-dom';
import { PATHS } from '../../routes/constants';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const RegisterComponent = () => {
  return (
    <div>
      <div className='register-content'>
        <div>
          <Link to={PATHS.ROOT} className='register-logo'>
            <HiArrowSmallLeft /> Calendar App
          </Link>
          <h2 className='register-title'>Register your account</h2>
        </div>
        <form className='register-form'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='form-group'>
            <label htmlFor='email-address'>Full Name</label>
            <input
              id='fullname'
              name='fullname'
              type='text'
              autoComplete='fullname'
              required
              className='input-field'
              placeholder='Full Name'
            />
          </div>
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

          <div className='form-button'>
            <button type='submit' className='submit-button'>
              Register
            </button>
          </div>
          <h2>or</h2>
          <div className='form-button'>
            <Link to='/login'>
              <button type='submit' className='submit-button-login'>
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
