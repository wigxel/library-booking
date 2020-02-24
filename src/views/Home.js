import React from "react";
import Icons from "../components/Icons";
import { Tab } from "../components/Buttons";
import Select from '../components/Select';
import { Product } from "../components/Product";
import { RUSH_SHIPPING, PICKUP_ORDER } from "../libs/constants";

const columns = [
  { name: "Order #" },
  { name: "Item #" },
  { name: "Details", width: 200 },
  { name: "Colors" },
  { name: "Qty" },
  { name: "Print Type" },
  {
    name: (
      <React.Fragment>
        Delivery <br /> Method
      </React.Fragment>
    )
  },
  {
    name: (
      <React.Fragment>
        Delivery <br /> Time
      </React.Fragment>
    )
  },
  {
    name: (
      <React.Fragment>
        Production <br /> Status
      </React.Fragment>
    )
  }
];

export const rows = [
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
    <React.Fragment>
      <section className="flex items-center justify-between mb-10">
        <h1 className="text-2xl">
          {Icons.Package}
          Production House
        </h1>
        <div className="flex">
         <Select withBg={true}
            options={Select.options(["Categories", "Rush Shipping", "Pickup Order"])}
            onChange={console.log}>
          </Select>
          <div className="flex bg-gray-200 hover:bg-gray-300 ml-2 rounded-md flex-1 px-4 py-2">
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
          <Select noBorder={true}
            className="w-32"
            options={Select.options(["Make a category", "Something", "Nothing"])}
            onChange={console.log}>
          </Select>
          <button className="ml-4 border bg-gray-500 opacity-50 border-gray-500 rounded-lg px-3 py-2 text-sm">
            Save
          </button>
        </div>
      </section>
      <table className="table w-full">
        <tr className="bg-gray-200">
          <th className="px-3" width="50">
            <input type="checkbox" />
          </th>
          {columns.map(e => (
            <th width={e.width} className="text-sm text-left">
              {e.name}
            </th>
          ))}
        </tr>
        {rows.map((e, idx) => (
          <Product.TableItem key={idx} zIndex={(rows.length - idx)} {...e} />
        ))}
      </table>
    </React.Fragment>
  );
};

export default Home;
