import Link from 'next/link';
import { motion } from "framer-motion"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
  
  
  export default function Example(props:any) {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {props.items.map((product: { id: Key | null | undefined; images: {
              imageSrc: string | undefined; imageAlt: string | undefined; 
}[]; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
             <Link href={`/products/${product.id}`}>
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.8 }}
                key={product.id}  
                className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.images[0].imageSrc}
                    alt={product.images[0].imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-white">₹ {product.price}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }