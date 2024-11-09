import React from 'react'
import ProductCard from './ProductCard'
import { Product } from "@/types"

export default function ProductsGrid({ products }: {products: Product[]}) {
  return (
    <div className='grid grid-cols-4 gap-8'>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product = {product} />
      ))}
    </div>
  )
}
