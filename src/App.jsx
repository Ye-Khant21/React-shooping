import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';
import ProductSection from './components/ProductSection';

function App() {
    const  categories = ["electrics", "clothes", "shoes", "computers", "books"];

  return (
    <>
   <Header></Header>
   <CategorySection/>
   <ProductSection/>
    <Footer/>
    </>
  )
}

export default App;
