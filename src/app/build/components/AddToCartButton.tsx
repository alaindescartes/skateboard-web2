"use client";

import React from "react";
import { useCart } from "../context/CartContext";

type AddToCartButtonProps = {
    item: {
        id: string;
        name: string;
        price: number;
    };
};

const AddToCartButton = ({ item }: AddToCartButtonProps) => {
    const { addItem } = useCart();

    return (
        <button
            onClick={() => addItem(item)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
