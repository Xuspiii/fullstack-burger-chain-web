import { Restaurant } from "@/types";
import React from "react";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const total = restaurant.orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <a
      className="bg-white rounded-md px-4 py-3 flex flex-col justify-between gap-4 hover:bg-slate-100 cursor-pointer"
      href={`/dashboard/${restaurant.zipCode}`}
    >
      <div>
        <h2>{restaurant.city}</h2>
        <h2>{restaurant.zipCode}</h2>
      </div>
      <div className="flex justify-between">
        <span>Pedidos: {restaurant.orders.length}</span>
        <span>Total: {total}€</span>
      </div>
    </a>
  );
}
