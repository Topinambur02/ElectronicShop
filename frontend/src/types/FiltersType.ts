export interface Filters {
    price: NumValue;
    brand: Array<string>;
    type: Array<string>;
    year: NumValue;
    color: Array<string>;
    country: Array<string>;
}

interface NumValue {
    min: number;
    max: number;
}