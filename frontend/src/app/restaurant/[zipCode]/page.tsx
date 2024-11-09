import React from "react";
import { fetchProducts, fetchRestaurantSummaryByZipCode } from "@/app/lib/data";
import { Product } from "@/types";
import ProductsGrid from "@/components/ProductsGrid";
import Cart from "@/components/Cart";

export default async function RestaurantPage({ params }: any) {
  const zipCode = params.zipCode;
  const restaurant = await fetchRestaurantSummaryByZipCode(zipCode);
  const products: Product[] = await fetchProducts();

  const apetizers = products.filter((product) => product.type === "ENTRANTE");
  const burgers = products.filter((product) => product.type === "HAMBURGUESA");
  const desserts = products.filter((product) => product.type === "POSTRE");
  const drinks = products.filter((product) => product.type === "BEBIDA");

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  if (restaurant.error) {
    return <h1>Restaurant does not exist</h1>;
  }

  return (
    <>
      <div>
        <h1 className="text-center text-3xl mb-8">{restaurant.city}</h1>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-center text-xl mb-4">Entrantes</h2>
            <ProductsGrid products={apetizers} />
          </div>
          <div>
            <h2 className="text-center text-xl mb-4">Hamburguesas</h2>
            <ProductsGrid products={burgers} />
          </div>
          <div>
            <h2 className="text-center text-xl mb-4">Postres</h2>
            <ProductsGrid products={desserts} />
          </div>
          <div>
            <h2 className="text-center text-xl mb-4">Bebidas</h2>
            <ProductsGrid products={drinks} />
          </div>
        </div>
      </div>
      <Cart restaurantZipCode={zipCode} />
    </>
  );
}
