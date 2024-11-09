export async function fetchRestaurantSummaryByZipCode(zipCode: string) {
  try {
    const res = await fetch(
      `http://localhost:8080/api/restaurants/summary/${zipCode}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProducts() {
  try {
    const res = await fetch("http://localhost:8080/api/products");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchOrders() {
  try {
    const res = await fetch("http://localhost:8080/api/orders");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRestaurantByZipCode(zipCode: string) {
  try {
    const res = await fetch(
      `http://localhost:8080/api/restaurants/zipCode/${zipCode}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAllRestaurants() {
  try {
    const res = await fetch(
      `http://localhost:8080/api/restaurants`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

