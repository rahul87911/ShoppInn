import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';














const CartItem = ({item}) => {

  const dispatch=useDispatch();

  const handleUpdateCartItem=(num)=>{
   const data={data:{quantity:item.quantity+num},cartItemId:item?.id}
   dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem=()=>{
   dispatch(removeCartItem(item.id))
  }


  return (
    <div className="flex items-start p-4 bg-white shadow-md border rounded-lg">
      <div className="flex-shrink-0 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative">
        <img
          className="w-full h-full object-cover object-top rounded-lg"
          src={item.product.imageUrl}
          alt="cart item"
        />
      </div>
      <div className="ml-4 flex-1">
        <p className="flex text-base font-semibold text-gray-800">{item.product.title}</p>
        <p className="flex text-sm text-gray-600">Size: {item.size} | Color: {item.product.color}</p>
        <p className="flex text-sm text-gray-600 mt-1">Seller: {item.product.brand}</p>
        
        <div className="flex items-center mt-4">
          <p className="text-lg font-semibold text-gray-900 mr-4">₹ {item.discountedPrice}</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500 line-through">₹ {item.price}</p>
            <p className="text-sm text-green-600 font-semibold">{item.product.discountPercent}% Off</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-3">
          <button onClick={handleRemoveCartItem} className="text-blue-500 hover:underline text-sm">Remove</button>
          <button className="text-blue-500 hover:underline text-sm">Save for later</button>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-center ml-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-4 border rounded-sm">{item.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
