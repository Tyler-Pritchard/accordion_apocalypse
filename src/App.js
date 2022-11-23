import React from 'react';
import AccordionsList from './features/accordions/AccordionsList';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AccordionsList />
      <Footer />
    </div>
  );
}

export default App;
