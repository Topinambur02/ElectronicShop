import { makeAutoObservable } from "mobx";
import { Type } from "../types/Type";
import { Brands } from "../types/BrandsType";
import { DeviceType } from "../types/DeviceType";

export class DeviceStore {

    private _devices: Array<DeviceType>
    private _types: Array<Type>
    private _brands: Array<Brands>

    constructor() {
        this._devices = [];

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

    setDevices(devices: Array<DeviceType>) {
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