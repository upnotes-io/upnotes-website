// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import React from 'react';
import Footer from './pages/home/Footer';
import Header from './pages/home/Header';
import Home from './pages/home/Home';
import ReactGA from 'react-ga';
function App() {

  React.useEffect(()=>{
    console.log("env:" + process.env['NODE_ENV']);
    if (process.env['NODE_ENV'] !== 'development') {
      const trackers = [
          { trackingId: 'UA-196765342-1', debug: true },
          { trackingId: 'AW-834081170', debug: true}
      ]
      ReactGA.initialize(trackers);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  })

  return (
    <>
      <Header/>
        <Home />
      <Footer />
    </>
  );
}

export default App;
