import { Currency } from 'lucide-react';
import React, { Children, createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const BookContext = createContext();
export default function BookProvider({ children }) {
    const [storeBook, setStoreBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {

        const isExistBook = storeBook.find(
            (book) => book.bookId === currentBook.bookId,
        );
        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            //   setReadList([...readList, currentBook]);
            setStoreBook([...storeBook, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`);

        }
    }
    const handleWishList = (currentBook) => {
        const isExistInReadList = storeBook.find(
            (book) => book.bookId === currentBook.bookId,
        );

        if (isExistInReadList) {
            toast.error("This book is already in read list");
            return;
        }
        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId,
        );
        if (isExistBook) {
            toast.error("The book is already exist");
        } else {
            //   setReadList([...readList, currentBook]);
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`);

        }
    }
    const data = {
        storeBook,
        setStoreBook,
        handleMarkAsRead,
        wishList,
         setWishList,
        handleWishList,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}
