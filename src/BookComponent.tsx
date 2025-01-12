import React from "react";
import Book from "./Book";

const BookComponent: React.FC<Book> = ({ title, author }) => {

    return (
        <li>
            <h2>{title}</h2>
            <p>{author}</p>
        </li>
    );
}

export default BookComponent;