import { IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className="flex items-start p-4 bg-white shadow-md border rounded-lg">
      <div className="flex-shrink-0 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] relative">
        <img
          className="w-full h-full object-cover object-top rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHbwnb9OUtlUg2vnXLbvaaknINvJWaPzfgg&s"
          alt="cart item"
        />
      </div>
      <div className="ml-4 flex-1">
        <p className="flex text-base font-semibold text-gray-800">Slim Kurta for Men</p>
        <p className="flex text-sm text-gray-600">Size: L | Color: White</p>
        <p className="flex text-sm text-gray-600 mt-1">Seller: Levi's</p>
        
        <div className="flex items-center mt-4">
          <p className="text-lg font-semibold text-gray-900 mr-4">₹ 199</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500 line-through">₹ 211</p>
            <p className="text-sm text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-3">
          <button className="text-blue-500 hover:underline text-sm">Remove</button>
          <button className="text-blue-500 hover:underline text-sm">Save for later</button>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col items-center ml-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-4 border rounded-sm">1</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
