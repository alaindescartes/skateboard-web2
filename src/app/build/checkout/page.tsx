"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Link from "next/link";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. <Link href="/build">Go back to shop</Link></p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                    <div className="mt-4">
                        <button
                            onClick={clearCart}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2"
                        >
                            Clear Cart
                        </button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
