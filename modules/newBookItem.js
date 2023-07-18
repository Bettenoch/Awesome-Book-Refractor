const bookList = document.getElementById('bookList');

export default class CreateBook {
    static addBook(book) {
        const bookItem = document.createElement('li');
        bookItem.className = 'books-list-item';
        bookItem.id = book.id;
        bookItem.innerHTML = `
            <div class="bookList-content">
                <p class="book-title">"<strong>${book.title}</strong>"</p> 
                <p class="book-author">By: ${book.author}</p>
            </div>
            <button class='removeBook'>Remove</button>
        `;
        bookList.appendChild(bookItem);
        bookList.style.border = '3px solid black';
    }
}