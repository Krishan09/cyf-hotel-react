import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li className="order-list">
      {props.orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;