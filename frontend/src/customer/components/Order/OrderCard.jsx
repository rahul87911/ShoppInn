import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-lg hover:shadow-xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-20 h-20 object-cover object-top"
              src="https://redflame.in/cdn/shop/files/CORE-81974-G_1_8c51321b-1332-4b83-a196-4661e8e65722.jpg?v=1718099387&width=540"
              alt="Product"
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2 font-medium">Slim Fit Medium Wash Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p className="font-semibold">₹1099</p>
        </Grid>

        <Grid item xs={4}>
          {true ? (
            <div>
              <p className="flex items-center">
                <AdjustIcon
                  sx={{ width: 15, height: 15 }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on August 12</span>
              </p>
              <p className="flex text-xs text-gray-600">
                Your item has been delivered
              </p>
            </div>
          ) : (
            <p>Expected delivery on August 12</p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
