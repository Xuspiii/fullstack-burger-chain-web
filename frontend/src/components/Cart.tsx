"use client";

import React, { useState } from "react";
import { ArrowRight, CartIcon } from "./Icons";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types";

export default function Cart({ restaurantZipCode }: {restaurantZipCode: string}) {
  const { cart, getTotal, clearCart } = useCart();
  const [visible, setVisible] = useState(false);

  const sendOrder = async () => {
    const orderData = {
      total: getTotal(),
      restaurantZipCode: restaurantZipCode,
      products: cart,
    };
    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      console.log(response);
      if (response.ok) {
        console.log("Pedido completado");
        clearCart()
      } else {
        console.log("Pedido no completado");
      }
    } catch (error) {
      console.log("Error al hacer pedido");
    }
  };

  if (!visible) {
    return (
      <div
        className="fixed top-5 right-5 bg-white p-6 rounded-full cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <CartIcon />
      </div>
    );
  } else {
    return (
      <div className="fixed right-0 top-0 h-full bg-white w-[400px]">
        <div
          className="absolute top-2 left-2 cursor-pointer"
          onClick={() => setVisible(false)}
        >
          <ArrowRight />
        </div>
        <div className="px-10">
          <h2 className="text-center mt-6 text-xl mb-5">Carrito</h2>
          {cart.map((cartItem: Product) => (
            <div key={cartItem.id} className="flex justify-between">
              <span>{cartItem.name}</span>
              <span>{cartItem.price}€</span>
            </div>
          ))}
          <div className="flex justify-between my-5">
            <span>Total</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-orange-600 text-white py-1 rounded-md"
            onClick={sendOrder}
          >
            Hacer pedido
          </button>
        </div>
      </div>
    );
  }
}
