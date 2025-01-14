export interface DeviceType {
    id?: number;
    name: string;
    price: number;
    brand: string;
    type: string;
    year: number;
    color: string;
    country: string;
    bucketId?: number;
    imageId?: number | null;
}