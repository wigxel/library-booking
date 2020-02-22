import React from "react";
import { Tab } from "../components/Buttons";
import { product } from "ramda";

const columns = [
  { name: "Order #" },
  { name: "Item #" },
  { name: "Details", width: 200 },
  { name: "Colors" },
  { name: "Qty" },
  { name: "Print Type" },
  {
    name: (
      <>
        Delivery <br /> Method
      </>
    )
  },
  {
    name: (
      <>
        Delivery <br /> Time
      </>
    )
  },
  {
    name: (
      <>
        Production <br /> Status
      </>
    )
  }
];

const Product = {
  TableItem(props) {
    return (
      <tr className="text-sm mb-3">
        <td className="px-3 py-8 bg-white">
          <input type="checkbox" />
        </td>
        <td className="text-xs bg-white">{props.orderId}</td>
        <td className="text-xs bg-white">{props.item}</td>
        <td className="text-xs bg-white">{props.details}</td>
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
      </tr>
    );
  }
};

const RUSH_SHIPPING = Symbol("Rush");
const PICKUP_ORDER = Symbol("Pickup");

const rows = [
  {
    orderId: "#232JODJSDKN2",
    item: "#232JODJSDKN2",
    photo: "",
    quantity: 4,
    colors: [
      { name: "Peach", color: "#ff80af" },
      { name: "Hotpink", color: "#fa3da0" }
    ],
    details:
      "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
    printType: "DTG Print",
    deliveryMethod: RUSH_SHIPPING,
    deliveryTime: "23-June-2019",
    productionStatus: { currentStep: 4, totalSteps: 5 }
  },
  {
    orderId: "#232JODJSDKN2",
    item: "#232JODJSDKN2",
    photo: "",
    quantity: 4,
    colors: [
      { name: "Peach", color: "#ff80af" },
      { name: "Hotpink", color: "#fa3da0" }
    ],
    details:
      "No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)",
    printType: "DTG Print",
    deliveryMethod: PICKUP_ORDER,
    deliveryTime: "23-June-2019",
    productionStatus: { currentStep: 2, totalSteps: 5 }
  }
];

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-between mb-10">
        <h1 className="text-2xl">Production House</h1>
        <div className="flex">
          <select className="appearance-none max-w-xs px-4 py-2 text-white rounded-md bg-primary mr-4">
            <option>Categories</option>
            <option>Tops</option>
            <option>Sweat Shirts</option>
          </select>
          <div className="flex bg-gray-400 rounded-md flex-1 px-4 py-2">
            <img
              src={require("../assets/icons/magnifying-glass.svg")}
              alt="search"
              style={{ width: 20 }}
            />
            <input type="search" className="flex px-4 bg-transparent" />
            <span>X</span>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="flex-1 flex">
          <Tab count={123} isActive={true}>
            All Production
          </Tab>
          <Tab count={5}>Awaiting Production</Tab>
          <Tab>Completed</Tab>
        </div>

        <div className="text-right flex-1">
          <button className="border border-gray-200 rounded-lg px-3 py-2 text-sm mr-4">
            Print Worksheet
          </button>
          <select className="appearance-none max-w-xs px-3 py-2 text-gray-600 rounded-md mr-4 text-sm">
            <option>Make as Categories</option>
          </select>
          <button className="border bg-gray-500 opacity-50 border-gray-500 rounded-lg px-3 py-2 text-sm">
            Save
          </button>
        </div>
      </section>
      <table className="table w-full">
        <tr className="bg-gray-200">
          <td className="px-3" width="50">
            <input type="checkbox" />
          </td>
          {columns.map(e => (
            <th width={e.width} className="text-sm text-left">
              {e.name}
            </th>
          ))}
        </tr>
        {rows.map(e => (
          <Product.TableItem {...e} />
        ))}
      </table>
    </>
  );
};

export default Home;
