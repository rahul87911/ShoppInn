import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div className="p-5 lg:px-20">
      {/* Address Card Section */}
      <div className="p-5 shadow-lg rounded-md border mb-8">
        <AddressCard />
      </div>

      {/* Cart Items and Price Details Section */}
      <div className="lg:grid grid-cols-2 lg:gap-10 relative">
        {/* Cart Items */}
        <div className="space-y-6">
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-auto mt-8 lg:mt-0">
          <div className="border p-5 rounded-md">
            <p className="flex uppercase font-bold opacity-60 pb-4">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹ 199</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">₹ 100</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />

              <div className="flex justify-between pt-3 text-black font-bold mb-3">
                <span>Total Amount</span>
                <span className="text-green-600">₹ 99</span>
              </div>
            </div>
            <hr />
            <div className="flex mt-6 mb-2">
              <Button
                variant="contained"
                className="w-full"
                sx={{ px: "1rem", py: "0.5rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
