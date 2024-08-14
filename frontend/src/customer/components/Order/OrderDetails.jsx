import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Add } from "@mui/icons-material";
import OrderTracker from "./OrderTracker"
import { Grid } from "@mui/material";

const OrderDetails = () => {
    return(
        <div className="px-5 lg:px-20">
            <div>
                <h1 className='font-semibold text-xl py-7'>Delivery address</h1>
                <AddressCard/>
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3}/>
            </div>
            <Grid className="space-x-5" container>
                <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:'space-between'}}>
                    <div>
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://m.media-amazon.com/images/I/414872OyTsL.jpg" alt="Red One Piece Tshirt" />
                    </div>

                    <div>
                        <p className="">One Piece Monkey D Luffy Face Quote Anime T-Shirts for Men</p>
                        <p><span>Color: Red </span> Size: M </p>
                        <p>Seller: RahulBhai</p>
                    </div>
                </Grid>


            </Grid>
        </div>
    )
};

export default OrderDetails;
