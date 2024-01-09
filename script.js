const myLibrary = [];
const content = document.getElementById("content");
const addBookDialog = document.getElementById("addBookDialog");

function Book(name, author, pages, finished) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
};

function refreshBooks() {
  for (book in myLibrary) {
    const bookContent = document.createElement('div');
    bookContent.className = "book-content"
    const bookName = document.createElement("h4");
    const bookAuthor = document.createElement("h4");
    const bookPages = document.createElement("h4");
    const bookRead = document.createElement("h4");

    bookName.innerText = myLibrary[book].name;
    bookAuthor.innerText = myLibrary[book].author;
    bookPages.innerText = myLibrary[book].pages + " pages";
    if(myLibrary[book].finished === false) { 
      bookRead.innerText = "Not finshed"
    } else {
      bookRead.innerText = "Finished"
    }

    bookContent.appendChild(bookName);
    bookContent.appendChild(bookAuthor);
    bookContent.appendChild(bookPages);
    bookContent.appendChild(bookRead);
    content.appendChild(bookContent);
  }
}

function addBook() {
  addBookDialog.showModal();
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookPagesInput.value = "";
  document.getElementById('true').checked = false;
  document.getElementById('false').checked = false;
}

function cancel() { 
  addBookDialog.close();
};

function addBookToLibrary() {
  const bookNameInput = document.getElementById("bookNameInput");
  const bookAuthorInput = document.getElementById("bookAuthorInput");
  const bookPagesInput = document.getElementById("bookPagesInput");
  const bookHaveRead = document.getElementById('true').checked;
  const addedBook = new Book(bookNameInput.value, bookAuthorInput.value, bookPagesInput.value, bookHaveRead)
  myLibrary.push(addedBook)
  addBookDialog.close();
  clearBookDisplay()
  refreshBooks()
}

function clearBookDisplay() {
  document.querySelectorAll('.book-content').forEach(e => e.remove());
}

// Template books
const book1 = new Book("IT", "Stephen King", 1115, false);
const book2 = new Book("Hannibal Rising", "Thomas Harris", 384, true)
myLibrary.push(book1);
myLibrary.push(book2);
refreshBooks();