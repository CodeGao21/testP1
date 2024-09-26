import React, { useState, useEffect } from 'react';
import { Card } from './card'; // Assuming you have the Card component

export function CardGallery() {
  const [books, setBooks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fetch the data from the API
  useEffect(() => {
    fetch('https://my.api.mockaroo.com/books.json?key=c3b25970')
      .then((response) => response.json())
      .then((data) => {
        const booksWithImages = data.map(book => ({
          ...book,
          imageLink: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
        }));
        setBooks(booksWithImages);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBook(null);
  };

  // Helper function to decide between <p> and <input>
  const renderField = (value) => {
    const isEditable = Math.random() > 0.5; // 50% chance to make the field editable
    if (isEditable) {
      return <input type="text" className="border border-gray-300 p-1 rounded" defaultValue={value} />;
    } else {
      return <p className="text-lg text-gray-700">{value}</p>;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {books.map((book, index) => (
          <div key={index}>
            <Card
              title={book.name}
              author={book.author}
              genre={book.genre}
              pages={book.pages}
              imageLink={book.imageLink} // Pass the random image URL
              onClick={() => openModal(book)} // Open modal with book data
            />
          </div>
        ))}
      </div>

      {isOpen && selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Image */}
              <div className="flex items-center justify-center">
                <img
                  className="w-full h-auto rounded-lg"
                  src={selectedBook.imageLink}
                  alt={selectedBook.name}
                />
              </div>

              {/* Right Column: Book Details */}
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">{selectedBook.name}</h3>
                <div>
                  <span className="font-bold">Autor: </span>
                  {renderField(selectedBook.author)}
                </div>
                <div>
                  <span className="font-bold">Género: </span>
                  {renderField(selectedBook.genre)}
                </div>
                <div>
                  <span className="font-bold">Páginas: </span>
                  {renderField(selectedBook.pages)}
                </div>
              </div>
            </div>

            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
