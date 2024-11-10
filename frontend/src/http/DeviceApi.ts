import $host from ".";

export const getAllDevices = async () => {
    const { data } = await $host.get('/device');
    return data;
}

export const getDeviceById = async (id: number) => {
    const { data } = await $host.get(`/device/${id}`);
    return data;
}