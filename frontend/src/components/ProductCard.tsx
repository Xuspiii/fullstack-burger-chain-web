"use client"

import Image from 'next/image'
import React from 'react'
import { Product } from '@/types'
import AddToCartIcon from './Icons'
import { useCart } from '@/hooks/useCart'

export default function ProductCard({ product }: {product: Product} ) {

  const { addToCart } = useCart()

  return (
    <div className='bg-white rounded-md'>
      <Image src="/smashburguer.jpg" width={300} height={150} alt={product.name} className='w-full rounded-t-md' />
      <div className="px-3 py-2">
        <h3>{product.name}</h3>
        <div className='flex justify-between'>
          <span>{product.price}€</span>
          <div className='cursor-pointer' onClick={() => addToCart(product)}>
            <AddToCartIcon />
          </div>
        </div>
      </div> 
    </div>
  )
}

// width: 100%;
// aspect-ratio: 16/9;
// object-fit: cover;
// overflow: hidden;
