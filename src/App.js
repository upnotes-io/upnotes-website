import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
        <Home />
      <Footer />
    </>
  );
}

export default App;
