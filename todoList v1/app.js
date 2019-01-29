// Book Class
class Book {
  constructor(title, author, isbn) {
    this.title =title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: 'Book One',
        author: 'sugma',
        isbn: '123456'
      },
      {
        title: 'Book 2',
        author: 'fugma',
        isbn: '696969'
      }
    ];

    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const list = document.querySelector('#book-list');
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-small delete">X</a></td>
      `;
    
    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    container.insertBefore(div, container.childNodes[1]);
    // vanish in 3s
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Store Class

// Event: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent the submit from submitting (refreshing)
  e.preventDefault();
  // get the form data
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  // validate that all fields are not empty
  if(title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    const book = new Book(title, author, isbn);
    console.log(book);

    // show success message
    UI.showAlert('Book has been added', 'success');

    // add book to list
    UI.addBookToList(book);

    // clear the fields
    UI.clearFields();
  }

  // create an instance of the new book

});

// Event: remove book
document.querySelector('#book-list').addEventListener('click', (e) => {
  //console.log(e.target)
  e.preventDefault()
  UI.deleteBook(e.target)

  // show success method
  UI.showAlert('Book has been removed', 'success');
});