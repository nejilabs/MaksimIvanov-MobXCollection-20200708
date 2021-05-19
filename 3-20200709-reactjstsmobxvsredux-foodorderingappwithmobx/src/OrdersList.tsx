// START: IMPORTS ---
import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStores } from "./StoresProvider";

// END: IMPORTS ---

// START: COMPONENT ---
export const OrdersList = () => {
  // START: STATES
  const { ordersStore } = useStores();
  // START: STATES

  // START: METHODS
  // START: METHODS

  // START: TEMPLATE
  return useObserver(() => {
    const { orders } = ordersStore;
    if (!orders.length) {
      return <p>No Order</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Drink</th>
            <th>Burger</th>
            <th>Total Price</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => {
            return (
              <tr>
                <td>{order.drink.displayName}</td>
                <td>{order.burger.displayName}</td>
                <td>{order.totalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  });
  // END: TEMPLATE
};
// END: COMPONENT ---
