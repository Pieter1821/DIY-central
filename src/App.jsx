import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import CartPage from './pages/cartpage';
import HomePage from './pages/homepage';
import ProductPage from './pages/productpage';
import Footer from './components/footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
