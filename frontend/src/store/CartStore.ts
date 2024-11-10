import { makeAutoObservable } from "mobx";
import { Product } from "../types/ProductType";

class CartStore {
    private _cart: Array<Product> = [];

    constructor() {
        makeAutoObservable(this);
    }

    get cart() {
        return this._cart;
    }

    addToCart(product: Product) {
        if (this._cart.find(item => item.id === product.id)) {
            return
        }
        
        this._cart.push(product);
    }

    removeFromCart(product: Product) {
        this._cart = this._cart.filter(item => item.id !== product.id);
    }
}

export const cartStore = new CartStore();