import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ProductSection />
    </div>
  );
}

export default App;
