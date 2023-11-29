import NavbarButton from './navbar-button';
import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>Calendar App</div>
      <NavbarButton />
    </nav>
  );
}

export default Navbar;
