import React from 'react';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Services from './Services';

const Home = () => {
  return (
    <>
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
