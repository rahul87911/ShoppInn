import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React from "react";
import { Label } from "@headlessui/react";
import { color } from "../../../data/FilterData";

const step = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label) => (
          <Step>
            <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
