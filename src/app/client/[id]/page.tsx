'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem('cart');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    const newItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    router.push('/cart');
  };

  return (
    <div className="bg-black p-6">
      <nav className="min-w-full bg-gray-600 flex justify-center items-center text-3xl text-white py-4 uppercase mb-8">
        Product Details
      </nav>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          layout="responsive"
          unoptimized={true}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-bold text-cyan-800 mt-4">Price: ${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
