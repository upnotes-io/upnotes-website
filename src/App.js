import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ReactGA from 'react-ga';

function App() {
  React.useEffect(()=>{
    ReactGA.initialize('G-7XPBWVV3BQ');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
