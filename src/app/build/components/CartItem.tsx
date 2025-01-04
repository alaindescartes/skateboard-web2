"use client";

import React from "react";
import { useCart } from "../context/CartContext";

type CartItemProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

const CartItem = ({ id, name, price, quantity }: CartItemProps) => {
    const { removeItem } = useCart();

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <h4 className="text-lg">{name}</h4>
                <p>${price} x {quantity}</p>
            </div>
            <button
                onClick={() => removeItem(id)}
                className="text-red-500 hover:text-red-700"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
