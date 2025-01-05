
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ServerPage = async () => {
  const books = await fetchBooks();

  return (
    <div className="min-h-screen bg-black p-6">

      <nav className= "min-w-full bg-gray-600 flex justify-center items-center text-3xl text-white py-4 uppercase">
        Server side data fetching
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hover:shadow-2xl transition-all duration-300 p-6 gap-6 h-full rounded-lg shadow-lg">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <p className="text-gray-500">Type: {book.type}</p>
            <p className="text-gray-500">
              Available: {book.available ? "Yes" : "No"}
            </p>

            {/* Styled Button for Available and Unavailable Books */}
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className={`px-6 py-2 rounded text-white ${
                  book.available ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {book.available ? "Connect" : "Unavailable"}
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ServerPage;
