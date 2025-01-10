'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the type for a single product
type Product = {
  id: number;
  title: string;
  description: string;
};

const ClientPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch products on mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div className="bg-black p-6">
      <nav className="min-w-full bg-gray-600 flex justify-center items-center text-3xl text-white py-4 uppercase">
        Client Side Data Fetching
      </nav>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-gray-700 mt-2">
              {product.description.slice(0, 50)}...
            </p>
            <button
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
              onClick={() => router.push(`/client/${product.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientPage;
