import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookProvider';
import BookCard from '../ui/BookCard';



export default function ListedReadList({ sortingType }) {
  const { storeBook } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(storeBook);
  console.log(filteredReadList)
 
   useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...storeBook].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setFilteredReadList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...storeBook].sort((a, b) => a.rating - b.rating);
        console.log(sortedData);
        setFilteredReadList(sortedData);
      }
    }
  }, [sortingType, storeBook]);
  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No read list data found</h2>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 '>
      {
        filteredReadList.map((book, index) => <BookCard key={index} book={book} />)
      }
    </div>
  )
}
