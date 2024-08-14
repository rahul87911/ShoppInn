import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () =>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
        <div className='lg:grid grid-cols-2 lg:px-16 relative'>
<div >
      {[1,1,1,1].map((item)=><CartItem/>)}

</div>

        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
            <p className='flex ml-2 mt-2uppercase font-bold opacity-60 pb-4'> Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold'>
               <div className='flex justify-between pt-3 text-black ml-2 mr-2 '>
                  <span>
                    Price
                  </span>
                  <span>₹ 199</span>
               </div>

               <div className='flex justify-between pt-3 text-black ml-2 mr-2'>
                  <span>
                    Discount
                  </span>
                  <span className='text-green-600'>₹ 100</span>
               </div>

               <div className='flex justify-between pt-3 text-black ml-2 mr-2'>
                  <span>
                    Delivery Charges
                  </span>
                  <span className='text-green-600'>Free</span>
               </div>
               <hr />

               <div className='flex justify-between pt-3 text-black font-bold mb-3 ml-2 mr-2'>
                  <span>
                    Total Amount
                  </span>
                  <span className='text-green-600  '>₹ 99</span>
               </div>
               
            </div>
            <hr />
            <div className='flex mt-6 mb-2 ml-3 '>

            <Button
                    onClick={handleCheckout}
                    variant="contained"
                    className='w-full'
                    sx={{ px: "1rem", py: "0.5rem", bgcolor: "#9155fd" }}
                  >
                    Checkout
                  </Button>
            </div>

        
            </div>
        </div>
        </div>

    </div>
  )
}

export default Cart
