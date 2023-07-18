import fetchFromLstorage from "./fetchLocalStorage.js";
import newBookItem from './newBookItem.js'

export default function displayBooks() {
    const books = fetchFromLstorage();
    books.forEach((book) => {
        newBookItem.addBook(book);
    });
}