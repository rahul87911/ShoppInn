import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Add } from "@mui/icons-material";
import OrderTracker from "./OrderTracker"

const OrderDetails = () => {
    return(
        <div className="px-5 lg:px-20">
            <div>
                <h1 className='font-semibold text-xl py-7'>Delivery address</h1>
                <AddressCard/>
            </div>
            <div className="py-10">
                <OrderTracker activeStep={3}/>
            </div>
        </div>
    )
};

export default OrderDetails;
