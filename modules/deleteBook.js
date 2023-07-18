import fetchFromLstorage from "./fetchLocalStorage.js";

const bookList = document.getElementById('bookList');
const bookListContainer = document.getElementById('book-list-content');

export class DeleteBook {
    static deleteBookFromPage(target) {
        if (target.classList.contains('removeBook')) {
          target.parentElement.remove();
        }
    
        if (!bookList.firstElementChild) {
          bookList.style.border = '3px solid red';
        }
      }

      static displayOnLoad() {
        bookListContainer.style.display = 'flex';
      } 
}

export const deleteFromStorage = (item) => {
    const books = fetchFromLstorage();
    const { id } = item.parentElement;
    const index = books.findIndex((book) => book.id === id);
    books.splice(index, 1);
    localStorage.setItem('bookInfo', JSON.stringify(books));
};