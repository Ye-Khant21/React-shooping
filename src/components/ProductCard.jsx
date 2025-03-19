import React from 'react'
import Rating from './Rating';

const ProductCard = ({product:{title,price,image,rating:{rate}}}) => {
    const currentRate = rate.toFixed(0);
  return (
    <div className='border border-black p-5 flex flex-col items-start gap-5'>
     <img src={image} alt={title}  className='h-40'/>
     <p className='font-bold line-clamp-2'>
        {title}
     </p>
     <Rating rate={rate}></Rating>
    <div className='flex justify-between items-end w-full mt-auto'>
    <p >{price}</p>
    <button className='text-sm border border-black px-3 py-2' >Add cart</button>
    </div>

    </div>
  )
}

export default ProductCard
