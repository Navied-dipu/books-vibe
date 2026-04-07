import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/homePage/Home";
import Books from '../pages/books/books';

import Errorpage from "../pages/Errorpage/Errorpage";
import BookDetails from "../pages/BookDEtails/BookDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/books",
                element: <Books></Books>
            },
            {
                path: "/bookDetails/:bookId",
                element: <BookDetails></BookDetails>,
                loader: () => fetch("/booksData.json"),
            }
        ],
        errorElement: <Errorpage></Errorpage>
    },
]);