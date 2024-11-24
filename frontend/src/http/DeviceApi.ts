import $host from ".";
import { DeviceType } from "../types/DeviceType";

export const getAllDevices = async () => {
    const { data } = await $host.get('/device');
    return data;
}

export const getDeviceById = async (id: number) => {
    const { data } = await $host.get(`/device/${id}`);
    return data;
}

export const createDevice = async (device: DeviceType) => {
    const { data } = await $host.post('/device', device);
    return data;
}

export const updateDevice = async (device: DeviceType) => {
    const { data } = await $host.put(`/device`, device);
    return data;
}

export const deleteDevice = async (id: number) => {
    const { data } = await $host.delete(`/device/${id}`);
    return data;
}