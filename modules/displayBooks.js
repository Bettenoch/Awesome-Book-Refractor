import fetchFromLstorage from "./fetchLocalStorage";
import newBookItem from './newBookItem'

export default function displayBooks() {
    const books = fetchFromLstorage();
    books.forEach((book) => {
        newBookItem.addBook(book);
    });
}