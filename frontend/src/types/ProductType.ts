import React from "react";

export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export interface IProps {
    product: Product;
    className?: string;
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}