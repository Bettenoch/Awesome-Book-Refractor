import bookItems from './modules/booklist';
import CreateBook from './modules/newBookItem';
import fetchFromLstorage from './modules/fetchLocalStorage';
import { DeleteBook, deleteFromStorage } from './modules/deleteBook';
import displayBooks from './modules/displayBooks';
import { DateTime } from './modules/luxon';

const date = DateTime.fromObject({ }, { zone: 'system' }).toLocaleString(DateTime.DATE_FULL);
const time = DateTime.fromObject({ }, { zone: 'system' }).toLocaleString(DateTime.TIME_SIMPLE);
const formField = document.getElementById('addBookForm');
const addBookItem = document.querySelector('.form-container');
const bookList = document.getElementById('bookList');
const bookListContainer = document.getElementById('book-list-content');
const contactDoc = document.getElementById('contact-holder');
const MainLink = document.getElementById('Main-Link');
const AddPageLink = document.getElementById('Add-Page-Link');
const contactPageLink = document.getElementById('Contact_Link');
const dateSection = document.querySelector('.date-time');

dateSection.innerHTML = `${date} ${time}`;

MainLink.forEach((link) => link.addEventListener('click', () => {
    bookListContainer.style.display = 'flex';
    addBookItem.style.display = 'none';
    contactDoc.style.display = 'none';
  }));

AddPageLink.forEach((link) => link.addEventListener('click', () => {
    bookListContainer.style.display = 'none';
    addBookItem.style.display = 'flex';
    contactDoc.style.display = 'none';
  }));

contactPageLink.forEach((link) => link.addEventListener('click', () => {
    bookListContainer.style.display = 'none';
    addBookItem.style.display = 'none';
    contactDoc.style.display = 'flex';
  }));

formField.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;
  const books = fetchFromLstorage();

  if (!title || !author) {
    addBookItem.style.display = 'flex';
  } else {
    const book = new bookItems(title, author, Date.now());
    bookItems.push(book);
    CreateBook.addBook(book);
    fetchFromLstorage();

    localStorage.setItem('bookInfo', JSON.stringify(bookItems));

    title.value = '';
    author.value = '';
  }
});

bookList.addEventListener('click', (e) => {
  DeleteBook.deleteBookFromPage(e.target);
  deleteFromStorage(e.target);
});

window.addEventListener('load', displayBooks());
window.addEventListener('load', DeleteBook.displayOnLoad());