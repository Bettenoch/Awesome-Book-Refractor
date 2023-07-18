const bookList = document.getElementById('bookList');

export default class CreateBook {
    static addBook(book) {
        const bookItem = document.createElement('li');
        bookItem.className = 'books-list';
        bookItem.id = book.id;
        bookItem.innerHTML = `
            <p class="book-title">${book.title}</p> 
            <p>By</p>
            <p class="book-author">${book.author}</p>
            <button class='removeBook'>Remove</button>
        `
        bookList.appendChild(bookItem);
        
    }
}