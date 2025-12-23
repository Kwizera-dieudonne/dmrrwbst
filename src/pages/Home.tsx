import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSlider />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;