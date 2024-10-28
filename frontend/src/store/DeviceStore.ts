import { makeAutoObservable } from "mobx";
import { Product } from "../types/ProductType";
import { Type } from "../types/Type";
import { Brands } from "../types/BrandsType";

export class DeviceStore {

    private _devices: Array<Product>
    private _types: Array<Type>
    private _brands: Array<Brands>

    constructor() {

        this._devices = [
            { id: 1, name: 'Samsung Galaxy S21', price: 1000, imageUrl: 'phone.jpg' },
            { id: 2, name: 'iPhone 13', price: 1200, imageUrl: 'phone.jpg' },
            { id: 3, name: 'iPhone 13', price: 1200, imageUrl: 'phone.jpg' },
            { id: 4, name: 'iPhone 13', price: 1200, imageUrl: 'phone.jpg' }
        ];

        this._types = [
            { id: 1, name: 'Ноутбуки' },
            { id: 2, name: 'Смартфоны' }
        ];

        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 2, name: 'Apple' }
        ];

        makeAutoObservable(this);
    }

    setDevices(devices: Array<Product>) {
        this._devices = devices;
    }

    setTypes(types: Array<Type>) {
        this._types = types;
    }

    setBrands(brands: Array<Brands>) {
        this._brands = brands;
    }

    get devices() {
        return this._devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
}