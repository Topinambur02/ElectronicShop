import { makeAutoObservable } from "mobx";
import { DeviceType } from "../types/DeviceType";

class CartStore {
    private _cart: Array<DeviceType> = [];

    constructor() {
        makeAutoObservable(this);
    }

    get cart() {
        return this._cart;
    }

    addToCart(device: DeviceType) {
        if (this._cart.find(item => item.id === device.id)) {
            return
        }
        
        this._cart.push(device);
    }

    removeFromCart(device: DeviceType) {
        this._cart = this._cart.filter(item => item.id !== device.id);
    }
}

export const cartStore = new CartStore();