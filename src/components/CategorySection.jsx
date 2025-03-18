import React from 'react'
import CategoryButton from './CategoryButton';

const CategorySection = () => {
    const title = "Product Categories"
    const  categories = ["all","electrics", "clothes", "shoes", "computers", "books"];
  return (
    
       <section className='p-5'>
      <p className='text-sm text-gray-500 mb-2'> {title}</p>
     <div className='flex overflow-scroll'>  
      {categories.map((category) => <CategoryButton key={category} />)}
     </div>
    </section>
    
  )
}

export default CategorySection
