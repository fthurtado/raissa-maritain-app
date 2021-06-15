import React from 'react';

import '../styles/LandingViewStyles.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function LandingView() {

  return (
    <div className="App">
      <Navbar />
      <p>Landing</p>
      <Footer />
    </div>
  );
}

export default LandingView;
