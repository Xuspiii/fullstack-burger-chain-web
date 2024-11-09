import { fetchRestaurantByZipCode } from "@/app/lib/data";
import { Order } from "@/types";
import React from "react";

export default async function DashboardRestaurantPage({ params }: any) {
  const zipCode = params.zipCode;
  const restaurant = await fetchRestaurantByZipCode(zipCode);
  return (
    <div>
      <h1 className="text-3xl text-center mb-5">{restaurant.city}</h1>
      <h2 className="text-xl mb-5">Pedidos: {restaurant.orders.length}</h2>
      <div className="flex flex-col gap-5">
        {restaurant.orders.map((order: Order) => (
          <div className="bg-white px-4 p-3 flex gap-8" key={order.id}>
            <span>Id: {order.id}</span>
            <span>Total: {order.total}€</span>
            <div>
              {order.products.map((product) => (
                <span key={product.id}> {product.name};</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
