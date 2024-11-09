import React from "react";
import { fetchAllRestaurants } from "../lib/data";
import { Restaurant } from "@/types";
import RestaurantCard from "@/components/RestaurantCard";

export default async function DashboardPage() {
  const restaurants = await fetchAllRestaurants();

  return (
    <div>
      <h1 className="text-3xl mb-5">Dashboard</h1>
      <div className="grid grid-cols-4 gap-8">
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
