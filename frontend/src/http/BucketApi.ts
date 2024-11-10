import $host from ".";

export const addDeviceToBucket = async (bucketId: number, deviceId: number) => {
    const { data } = await $host.post(`/buckets/${bucketId}/add/${deviceId}`);
    return data;
}

export const removeDeviceFromBucket = async (bucketId: number, deviceId: number) => {
    const { data } = await $host.post(`/buckets/${bucketId}/remove/${deviceId}`);
    return data;
}

export const getDevicesByBucketId = async (bucketId: number) => {
    const { data } = await $host.get(`/buckets/${bucketId}/devices`);
    return data;
}