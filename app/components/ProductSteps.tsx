"use client";

import React from "react";
//import ShipingForm from "./ShipingForm";
import { useState } from "react";
import PaymentForm from "./PaymentForm";

const ProductSteps = () => {
  const [steps, setSteps] = useState(3);
  return steps === 1 ? (
    <div className="w-full h-64 aspect-auto bg-amber-700">{}</div>
  ) : steps === 2 ? (
    //<ShipingForm />
    <h1>shipping form</h1>
  ) : steps === 3 ? (
    <PaymentForm />
  ) : null;
};

export default ProductSteps;
