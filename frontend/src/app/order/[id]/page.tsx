import React from 'react'
import { fetchOrderById } from '@/app/lib/data';

export default async function OrderPage({ params }: any) {
  const id = params.id;
  const order = fetchOrderById(id);
  return (
    <div>
      <h1>Order </h1>
    </div>
  )
}
