import React from 'react';
import { Chrono } from 'react-chrono';

import '../styles/BiographyViewStyles.css';
import timelineData from '../constants/timelineData'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function BiographyView() {

  return (
    <div className="App">
      <Navbar />
      <div style={{ width: '100%', height: 'calc(100vh - 150px - 13vh)' }}>
        <Chrono
          items={timelineData}
          mode="VERTICAL"
          slideItemDuration={10000}
          useReadMore={false}
          theme={{ primary: '#ff9f3f', secondary: '#fff3e6', cardBgColor: '#fff3e6', cardForeColor: '#ff9f3f' }}
          slideShow
        />
      </div>
      <Footer />
    </div>
  );
}

export default BiographyView;
