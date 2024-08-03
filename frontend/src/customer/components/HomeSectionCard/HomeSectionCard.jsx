import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overfloe-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="product" />
        </div>
        <div className='p-4 '>
          <h3 className='text-lg font-medium text-grey-900' >{product.brand}</h3>
          <h4 className='text-lg font-medium text-grey-900' >{product.title}</h4>
          <p className='mt-2 text-sm text-grey-500' >{product.size}</p>
          <p className='mt-2 text-sm text-grey-500' >{product.price}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard
