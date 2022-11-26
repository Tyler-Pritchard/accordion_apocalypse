import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AccordionsDirectoryPage from './pages/AccordionsDirectoryPage';
import AccordionDetailPage from './pages/AccordionDetailPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<AccordionsDirectoryPage />} />
        <Route path='directory/:accordionId' element={<AccordionDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
