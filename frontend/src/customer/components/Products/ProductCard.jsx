import React from 'react'
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full objecty-cover object-left-top'  src={product.imageUrl} alt="dress" />
      </div>

      <div className='textpart bg-white p-3'>
         <div>
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p >{product.brand}</p>
         </div>

         <div className='flex items-center space-x-2'>
            <p className='font-semibold'>₹ {product.discountedprice}</p>
            <p className='line-through opacity-50'>₹ {product.price}</p>
            <p className='text-green-600 font-semibold'>{product.discount}% off</p>
         </div>
      </div>
    </div>
  )
}

export default ProductCard
