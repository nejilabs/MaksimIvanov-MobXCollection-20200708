// START: IMPORTS ---
import { observable, action, runInAction } from 'mobx';
import { getBurgers, getDrinks } from './api';
import {Product } from './types'
// END: IMPORTS ---

// START: STORE ---
export class ProductsStore{
  // START: OBSERVABLES
  @observable drinks:Product[] = []
  @observable burgers:Product[] = []

  @observable isLoading:boolean = true;
  // START: OBSERVABLES

  // START: ACTIONS
  @action 
  fetchProducts = async() =>{
    const drinks = await getDrinks();
    const burgers = await getBurgers();

    runInAction(() => {
      this.drinks = drinks
      this.burgers = burgers
      this.isLoading = false
    })
  }  
  // END: ACTIONS
}
// END: STORE ---
