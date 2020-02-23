import React from "react";
import styled from "styled-components";
import { Tab } from "./Buttons";
import { map } from "ramda";
import { Link } from "react-router-dom";
import { rows } from "../views/Home";
import { RUSH_SHIPPING, PICKUP_ORDER } from "../libs/constants";

const Card = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 3px 50px #0000000f;
`;

const ProductInfoStyle = styled(Card)`
  display: flex;
  justify-content: flex-start;
  padding: 2.5rem 2.5rem;

  & > section {
    min-width: 10rem;
    padding: 1px 1.5rem;

    &:not(:last-child) {
      border-right: solid 1px rgba(0, 0, 0, 0.16);
    }
  }
`;

export const OrderDetails = () => {
  return (
    <ProductInfoStyle className="bg-white">
      <section className="flex flex-col">
        <div>Order Value</div>
        <div className="text-primary mt-2">$40,000</div>
      </section>

      <section className="flex flex-col">
        <div>Order Date</div>
        <div className="text-sm text-primary mt-2">25 - June - 2017</div>
      </section>

      <section className="flex flex-col">
        <div>Delivery Method</div>
        <div className="text-sm">
          <div className="text-primary mt-2">Pickup Order</div>
        </div>
      </section>
      <section className="flex flex-col">
        <div>Rush Option</div>
        <div className="text-sm">
          <div className="text-primary mt-2">Rush</div>
        </div>
      </section>
      <section className="flex flex-col">
        <div>Status</div>
        <div className="text-sm">
          <div className="text-primary mt-2">Pending</div>
        </div>
      </section>
      <section className="flex flex-col">
        <div>Requested By</div>
        <div className="text-sm">
          <div className="text-primary mt-2">25 - June - 2017</div>
          <div>
            Time Left <span className="text-green-700">10:00:00</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div>Shipped or Picked Date</div>
        <div className="text-primary mt-2 text-sm">25 - June - 2017</div>
      </section>
    </ProductInfoStyle>
  );
};

export const ProductDetails = () => {
  return (
    <Card>
      <div className="flex justify-between pt-4 border-b mb-2 border-gray-200">
        <Tab.Holder>
          <Tab isActive={true}>Product Details</Tab>
          <Tab>History / Notes</Tab>
        </Tab.Holder>

        <div className="flex items-center">
          <select className="appearance-none max-w-xs px-3 py-2 text-gray-600 rounded-md mx-2 text-sm">
            <option>Worksheet</option>
          </select>
          <button className="border bg-gray-500 px-4 opacity-50 border-gray-500 rounded-lg px-3 mx-2 py-2 text-sm">
            Print
          </button>
          <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm mx-2">
            Add Note
          </button>
          <select className="appearance-none max-w-xs px-4 py-2 text-white rounded-md bg-primary mx-2">
            <option>Categories</option>
            <option>Tops</option>
            <option>Sweat Shirts</option>
          </select>
        </div>
      </div>
      <ProductSamples
        images={map(
          () => ({
            text: "Front",
            src: require("../assets/images/sweatshirt.png")
          }),
          Array(5).fill(0)
        )}
      />
    </Card>
  );
};

const productColumns = [
  { name: "Item #", width: "10%" },
  { name: "Details", width: 300 },
  { name: "Production Type" },
  { name: "Colors" },
  { name: "Quantity" },
  { name: "Paid" }
];

export const ProductSamples = props => {
  return (
    <section>
      <header className="flex bg-gray-200 py-2 px-4 items-center justify-between">
        <h1 className="text-base font-bold">Product</h1>
        <button className="px-4 py-2 text-sm text-primary border border-primary rounded-lg">
          Download Artwork
        </button>
      </header>
      <section className="images p-4 flex">
        {props.images.map(e => {
          return (
            <figure className="flex h-56 mx-2 flex-col">
              <img
                src={e.src}
                alt={e.text}
                className="object-fit-cover flex-1"
              />
              <figcaption className="p-2 text-center font-bold">
                {e.text}
              </figcaption>
            </figure>
          );
        })}
      </section>
      <table class="table w-full">
        <tr className="bg-gray-200">
          <th className="px-3 py-2" width="50">
            <input type="checkbox" />
          </th>
          {productColumns.map(e => (
            <th width={e.width} className="text-sm py-4 text-left">
              {e.name}
            </th>
          ))}
        </tr>
        {rows.map(e => (
          <Product.RowShort {...e} />
        ))}
      </table>
    </section>
  );
};

export const Product = {
  TableItem(props) {
    return (
      <Link to="/products/1" className="table-row text-sm mb-3">
        <td className="px-3 py-8 bg-white">
          <input type="checkbox" />
        </td>
        <td className="text-xs bg-white">{props.orderId}</td>
        <td className="text-xs bg-white">{props.item}</td>
        <td className="text-xs bg-white">
          <div className="flex items-center pr-3">
            <img
              className="w-10 h-10 flex-shrink-0 mr-4"
              src={require("../assets/images/sweatshirt.png")}
              alt="Product"
            />
            <span>{props.details}</span>
          </div>
        </td>
        <td className="bg-white">
          <div
            className="p-3 rounded-lg text-center inline-block"
            style={{ backgroundColor: props.colors[1].color }}
          >
            {props.colors[1].name}
          </div>
        </td>
        <td className="font-bold bg-white">L X {props.quantity}</td>
        <td className="font-bold bg-white">{props.printType}</td>
        <td className="w-32 bg-white">
          {props.deliveryMethod === RUSH_SHIPPING && (
            <div className="flex">
              <img
                src={require("../assets/icons/clock.svg")}
                alt="icon"
                className="w-5 mr-2"
              />
              <span className="text-red-600 ">
                Rush <br /> Shipping
              </span>
            </div>
          )}
          {props.deliveryMethod === PICKUP_ORDER && (
            <span className="text-blue-600">Pickup Order</span>
          )}
        </td>
        <td className="bg-white">{props.deliveryTime}</td>
        <td className="bg-white text-green-600">
          Running <br />
          {props.productionStatus.currentStep} of{" "}
          {props.productionStatus.totalSteps}
        </td>
      </Link>
    );
  },
  RowShort(props) {
    return (
      <tr className="text-sm mb-3">
        <td className="px-3 py-8 bg-white">
          <input type="checkbox" />
        </td>
        <td className="text-xs bg-white w-32">{props.item}</td>
        <td className="text-xs bg-white">
          <div className="flex items-center pr-3">
            <img
              className="w-10 h-10 flex-shrink-0 mr-4"
              src={require("../assets/images/sweatshirt.png")}
              alt="Product"
            />
            <span>{props.details}</span>
          </div>
        </td>
        <td className="font-bold bg-white text-red">{props.printType}</td>
        <td className="bg-white">
          <div
            className="p-3 rounded-lg text-center inline-block"
            style={{ backgroundColor: props.colors[1].color }}
          >
            {props.colors[1].name}
          </div>
        </td>
        <td className="font-bold bg-white">L X {props.quantity}</td>
        <td className="w-32 bg-white">Paid in full</td>
      </tr>
    );
  }
};
