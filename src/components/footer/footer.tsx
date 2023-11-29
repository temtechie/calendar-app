import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer__logo'>Ipro Suite</div>
        <div className='footer__links'>
          <a href='#' className='footer__link'>
            Home
          </a>
          <a href='#' className='footer__link'>
            Features
          </a>
          <a href='#' className='footer__link'>
            Testimonials
          </a>
          <a href='#' className='footer__link'>
            Contact
          </a>
        </div>
      </div>
      <div>
        <p className='footer__copyright'>
          © 2023 Calendar App LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
