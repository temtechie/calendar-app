import HeroSection from '../components/landing-page/hero-section';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import '../components/landing-page/hero-section.css';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='landing-page'>
        <div className='container'>
          <HeroSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
