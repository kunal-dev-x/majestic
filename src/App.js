import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import ShopMen from './pages/ShopMen';
import ShopWomen from './pages/ShopWomen';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header />
          <main role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/men" element={<ShopMen />} />
              <Route path="/women" element={<ShopWomen />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
