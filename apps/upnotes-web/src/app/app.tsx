// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './pages/home/Home';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DownloadPage from './pages/Download/Index';
function App() {
  React.useEffect(() => {
    console.log('env:' + process.env['NODE_ENV']);
    if (process.env['NODE_ENV'] !== 'development') {
      const trackers = [
        { trackingId: 'UA-196765342-1', debug: true },
        { trackingId: 'AW-834081170', debug: true },
      ];
      ReactGA.initialize(trackers);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<DownloadPage />} />
          <Route path="/feature-list" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
