const myLibrary = [];
const content = document.getElementById("content");
const addBookDialog = document.getElementById("addBookDialog");

function Book(name, author, pages, finished) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
  let id;
};

function refreshBooks() {
  for (book in myLibrary) {
    const bookContent = document.createElement('div');
    bookContent.className = "book-content"
    const bookName = document.createElement("h4");
    bookName.style.gridArea = "title";
    const bookAuthor = document.createElement("h4");
    bookAuthor.style.gridArea = "author";
    const bookPages = document.createElement("h4");
    bookPages.style.gridArea = "pages";
    const bookRead = document.createElement("h4");
    bookRead.style.gridArea = "read";
    const deleteBookButton = document.createElement("button")
    deleteBookButton.style.gridArea = "delete";
    const finishedButton = document.createElement("button");
    finishedButton.style.gridArea = "finished";


    bookName.innerText = "Title: " + myLibrary[book].name;
    bookAuthor.innerText = "Author: " + myLibrary[book].author;
    bookPages.innerText = myLibrary[book].pages + " pages";
    if(myLibrary[book].finished === false) { 
      bookRead.innerText = "Finished: No";
    } else {
      bookRead.innerText = "Finished: Yes";
    }

    let bookIndex = book;
    myLibrary[bookIndex].id = bookIndex;
    deleteBookButton.innerText = "Delete";
    deleteBookButton.addEventListener('mousedown', function() { deleteBook(myLibrary[bookIndex].id ) })

    finishedButton.innerText = "Finished";
    finishedButton.addEventListener('mousedown', function() {
      if(bookRead.innerText === "Finished: No"){
        bookRead.innerText = "Finished: Yes";
        myLibrary[bookIndex].finished = true;
      } else {
        bookRead.innerText = "Finished: No";
        myLibrary[bookIndex].finished = false;
      }
    })

    bookContent.appendChild(bookName);
    bookContent.appendChild(bookAuthor);
    bookContent.appendChild(bookPages);
    bookContent.appendChild(bookRead);
    bookContent.appendChild(deleteBookButton);
    bookContent.appendChild(finishedButton);
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

function deleteBook(index) {
  myLibrary.splice(index, 1);
  clearBookDisplay()
  refreshBooks();
}

function finishedBook() {


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
const template = new Book("IT", "Stephen King", 1115, false);
myLibrary.push(template);
const book2 = new Book("Hannibal Rising", "Thomas Harris", 384, true)

myLibrary.push(book2);
refreshBooks();