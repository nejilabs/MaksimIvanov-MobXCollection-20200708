import { Product } from './types';

export const getDrinks = async (): Promise<Product[]> => (
  [
    { name: 'drink1', displayName: 'Drink 1', price: 2 },
    { name: 'drink2', displayName: 'Drink 2', price: 3 },
    { name: 'drink3', displayName: 'Drink 3', price: 4 },
  ]
)

export const getBurgers = async (): Promise<Product[]> => (
  [
    { name: 'burger1', displayName: 'Burger 1', price: 5 },
    { name: 'burger2', displayName: 'Burger 2', price: 4 },
    { name: 'burger3', displayName: 'Burger 3', price: 3 },
  ]
)