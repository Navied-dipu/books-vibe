import React, { use } from 'react'
import BookCard from '../ui/BookCard'
const booksPromise=fetch("/public/booksData.json").then(res=>res.json())
export default function AllBooks() {
    const books=use(booksPromise)
    console.log(books)
  return (
    <div className="my-12 max-w-7xl mx-auto">
      <h2 className="font-bold text-3xl text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, ind) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </div>
  )
}
