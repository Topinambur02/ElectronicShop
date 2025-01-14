import { makeAutoObservable } from "mobx";
import { DeviceType } from "../types/DeviceType";

export class DeviceStore {

    private _devices: Array<DeviceType>

    constructor() {
        this._devices = [];

        makeAutoObservable(this);
    }

    setDevices(devices: Array<DeviceType>) {
        this._devices = devices;
    }

    get devices() {
        return this._devices;
    }

}