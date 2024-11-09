export interface RestaurantSummary {
  id: string;
  zipCode: string;
  city: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  type: string;
}

export interface Order {
  id: number;
  date: string;
  total: number;
  products: Product[];
}

export interface Restaurant {
  id: string;
  zipCode: string;
  city: string;
  orders: Order[];
}
