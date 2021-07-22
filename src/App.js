import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import ReactGA from 'react-ga';
import process from "process";
const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
function App() {

  React.useEffect(()=>{
    console.log("env:" + process.env.NODE_ENV);
    if (!development) {
      ReactGA.initialize('UA-196765342-1', {debug: true});
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
