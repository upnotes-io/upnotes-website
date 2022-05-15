import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ReactGA from 'react-ga';
function App() {

  React.useEffect(()=>{
    console.log("env:" + process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'development') {
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
