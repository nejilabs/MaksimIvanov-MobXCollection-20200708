import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStores } from "./StoresProvider";
import { useObserver } from "mobx-react-lite";

export const OrderForm = () => {
  const { productsStore, ordersStore } = useStores();

  const { register, handleSubmit } = useForm();

  const { fetchProducts } = productsStore;

  useEffect(() => {
    fetchProducts();
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    ordersStore.addOrder(data.drinks, data.burgers);
  });

  return useObserver(() => {
    const { isLoading, drinks, burgers } = productsStore;

    if (isLoading) {
      return <>Loading...</>;
    }

    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Make an order</legend>
          <label htmlFor="drink">Drink</label>
          <select {...register("drink")} id="drink" name="drink">
            {drinks.map((drink) => (
              <option key={drink.name} value={drink.name}>
                {drink.displayName} - ${drink.price}
              </option>
            ))}
          </select>
          <label htmlFor="burger">Burger</label>
          <select {...register("burger")} id="burger" name="burger">
            {burgers.map((burger) => (
              <option key={burger.name} value={burger.name}>
                {burger.displayName} - ${burger.price}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  });
};
