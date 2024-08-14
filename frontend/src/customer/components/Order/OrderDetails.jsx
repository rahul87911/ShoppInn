import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      {/* Delivery Address Section */}
      <div>
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container spacing={3}>
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box
              className="shadow-xl rounded-md p-5 border"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <img
                className="w-[5rem] h-[5rem] object-cover rounded-md mr-4"
                src="https://m.media-amazon.com/images/I/414872OyTsL.jpg"
                alt="Red One Piece Tshirt"
              />

              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start", // Align content to the left
                }}
              >
                <p className="font-semibold text-lg text-left mb-1">
                  One Piece Monkey D Luffy Face Quote Anime T-Shirts for Men
                </p>
                <p className="text-left mb-1">
                  <span className="mr-3">Color: Red</span>
                  <span>Size: M</span>
                </p>
                <p className="text-left mb-1">Seller: RahulBhai</p>
                <p className="font-bold text-left">₹1099</p>
              </Box>

              <Box
                sx={{
                  color: deepPurple[500],
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column", // Align content to the left
                }}
              >
                <StarBorderIcon sx={{ fontSize: "2rem", mb: 1 }} />
                <span className="text-left">Rate & Review Product</span>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
