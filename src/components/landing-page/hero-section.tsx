import HeroSectionImage from '../../assets/hero-section-image.png';

const HeroSection = () => {
  const heroImageStyle = { width: '100%', height: '50%' };

  return (
    <div className='hero-section'>
      <div className='content'>
        <h3 className='cta-text'>Schedule like a Pro</h3>
        <p className='description'>
          Experience the future of calendars with Ipro Suite Calendar App, where
          our cutting-edge technology seamlessly integrates event scheduling,
          reminders, and more, empowering you to manage your time effortlessly.
          Revolutionize your planning game and organize your life like never
          before with Ipro Suite Calendar App
        </p>
        <div className='cta-form'>
          <form action='#'>
            <div className='form-group'>
              <label htmlFor='email' className='sr-only'>
                Email address
              </label>
              <input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='input-field'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='cta-button'>
                Join News Letter
              </button>
            </div>
          </form>
          <p className='disclaimer'>
            By providing your email, you agree to our{' '}
            <a href='/' className='disclaimer-link'>
              terms of service
            </a>
            .
          </p>
        </div>
      </div>
      <div className='hero-section-image'>
        <img
          src={HeroSectionImage}
          alt='hero section image'
          style={heroImageStyle}
          className='hero-image'
        />
      </div>
    </div>
  );
};

export default HeroSection;
