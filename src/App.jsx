import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import CategorySection from './components/CategorySection';

function App() {
    const  categories = ["electrics", "clothes", "shoes", "computers", "books"];

  return (
    <>
   <Header></Header>
   <CategorySection/>
    <Footer/>
    </>
  )
}

export default App;
