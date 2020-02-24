import React from "react";
import { OrderDetails, ProductDetails } from "../components/Product";
import { Link } from "react-router-dom";
import Icons from '../components/Icons';

const OrderInfo = () => {
  return (
    <div className="container mx-auto">
      <section className="flex items-center mb-4">
        <div className="flex items-center mr-3">
          <Link to="/">
            <a
              href="/"
              className="w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.572"
                height="20.794"
                viewBox="0 0 29.572 20.794"
              >
                <defs>
                  <style>{".a{fill:#fff;}"}</style>
                </defs>
                <path
                  class="a"
                  d="M9.659,4.987a1.049,1.049,0,0,1,1.49,1.475L3.592,14.019H28.529a1.038,1.038,0,0,1,1.043,1.044,1.05,1.05,0,0,1-1.043,1.058H3.592l7.557,7.543a1.07,1.07,0,0,1,0,1.49,1.044,1.044,0,0,1-1.49,0L.313,15.809a1.026,1.026,0,0,1,0-1.475Z"
                  transform="translate(0 -4.674)"
                />
              </svg>
            </a>
          </Link>

          <span className="ml-4 opacity-50">Back</span>
        </div>
        <h1 className="border-l text-2xl border-gray-200 px-3 flex-1">
          {Icons.Package}
          Production House
        </h1>
      </section>
      <section className="flex flex-col">
        <div className="w-full mb-4">
          Order: <b>#ADJ2322434D</b>
        </div>
        <div className="mb-4 flex text-sm items-center mb-4  justify-between">
          <div className="flex text-primary w-full">
            <span>Account Setup</span>
            <span className="px-2">{">"}</span>
            <span>Delivery Method</span>
          </div>

          <div className="flex items-center">
            <span className="whitespace-no-wrap text-primary">
              Production Status:
            </span>
            <span className="whitespace-no-wrap text-green-600 ml-4">
              Running 2 of 4
            </span>
          </div>
        </div>
      </section>
      <section className="mb-6 relative" style={{ zIndex: 4 }}>
        <OrderDetails />
      </section>
      <ProductDetails></ProductDetails>
    </div>
  );
};

export default OrderInfo;
