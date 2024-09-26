export function Card({ title, author, genre, pages, imageLink, onClick }) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={onClick} // Trigger modal on click
    >
      <img className="rounded-t-lg" src={imageLink} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Author: {author}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Genre: {genre}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Pages: {pages}
        </p>
      </div>
    </div>
  );
}
