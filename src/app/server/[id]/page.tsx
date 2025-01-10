import { Metadata } from 'next';

// ✅ Define the type for the book
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

// ✅ Function to fetch the book by ID
const fetchBookById = async (id: string): Promise<Book> => {
  const response = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch book data');
  }
  return response.json();
};

// ✅ Metadata generation function
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const book = await fetchBookById(params.id);
  return {
    title: `Book Details - ${book.name}`,
    description: `Details for book ${book.name}`,
  };
}

// ✅ Page component to display book details
export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await fetchBookById(params.id);

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navbar */}
      <nav className="bg-gray-600 text-white text-3xl py-4 text-center uppercase">
        Book Details
      </nav>

      {/* Book Details Section */}
      <div className="bg-white rounded shadow p-6 max-w-lg mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">{book.name}</h2>
        <p className="text-lg text-gray-700 mb-2">Type: {book.type}</p>
        <p className="text-lg text-gray-700 mb-4">
          Available: {book.available ? 'Yes' : 'No'}
        </p>

        <button
          className={`px-6 py-3 rounded text-white font-semibold ${
            book.available ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {book.available ? 'Available' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}
