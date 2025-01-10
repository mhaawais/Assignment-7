'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Remove an item from the cart
  const removeItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navbar */}
      <nav className="min-w-full bg-gray-600 flex justify-center items-center text-3xl text-white py-4 uppercase">
        Cart Page
      </nav>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mt-8">
        {cartItems.length === 0 ? (
          <p className="text-gray-700 text-center">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 py-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  unoptimized={true}
                  className="rounded mb-4 md:mb-0"
                />

                <div className="flex-1 md:ml-6 text-center md:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-lg">Price: ${item.price}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Price */}
            <h2 className="text-2xl font-bold mt-6 text-center md:text-right">
              Total: ${calculateTotalPrice()}
            </h2>

            {/* Checkout Button */}
            <div className="text-center md:text-right">
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Go to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
