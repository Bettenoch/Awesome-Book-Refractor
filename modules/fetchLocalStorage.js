export default function fetchFromLstorage() {
    let books;

    if (localStorage.getItem('bookInfo')) {
        books = JSON.parse(localStorage.getItem('bookInfo'));
      } else {
        books = [];
      }
    
      return books;
}