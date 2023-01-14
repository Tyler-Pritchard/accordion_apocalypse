import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductsDirectoryPage from './pages/ProductsDirectoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import Pay from './components/Pay';
// import Success from './pages/Success';
import { fetchProducts } from './features/products/productsSlice';
import './App.css';
import { fetchEvents } from './features/events/eventsSlice';
import { fetchInstructors } from './features/instructors/instructorsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchEvents());
    dispatch(fetchInstructors());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<ProductsDirectoryPage />} />
        <Route path='directory/:productId' element={<ProductDetailPage />} />
        <Route path='about' element={<AboutPage />} />
        {/* CREATE ROUTES/COMPONENTS FOR PAY & SUCCESS
        <Route path='/success' element={<Success />} /> */}
        <Route path='/pay' element={<Pay />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
