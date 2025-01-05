'use client';

import { useEffect, useState } from 'react';

// Define the type for a single product
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const Client = () => {
  // State holds an array of products or null initially
  const [data, setData] = useState<Product[] | null>(null);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setData);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (!data) return <p>Loading...</p>;

  return (
    <div className="bg-black p-6">

     <nav className= "min-w-full bg-gray-600 flex justify-center items-center text-3xl text-white py-4 uppercase">
        client side data fetching
      </nav>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-cyan-800 mt-2">Price: ${product.price}</p>
          <div  className='flex flex-col justify-end items-center'>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300">
            Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Client;
