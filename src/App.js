import React from 'react';
import AccordionsDirectoryPage from './pages/AccordionsDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AccordionsDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
