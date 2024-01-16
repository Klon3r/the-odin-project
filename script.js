const myLibrary = [];
const content = document.getElementById("content");
const addBookDialog = document.getElementById("addBookDialog");

class Book {
	constructor(name, author, pages, finished) {
  		this.name = name;
	  	this.author = author;
  		this.pages = pages;
		this.finished = finished;
		let id;
	}

function refreshBooks() {
  for (book in myLibrary) {
    const bookContent = document.createElement('div');
    bookContent.className = "book-content"
    bookContent.style.backgroundImage = "url('./img/paper.jpg')"
    const bookName = document.createElement("h4");
    const bookAuthor = document.createElement("h4");
    const bookPages = document.createElement("h4");
    const bookRead = document.createElement("h4");
    const deleteBookButton = document.createElement("button")
    deleteBookButton.style.gridArea = "delete";
    const finishedButton = document.createElement("button");
    finishedButton.style.gridArea = "finished";
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div"

    bookName.innerText = "Title: " + myLibrary[book].name;
    bookAuthor.innerText = "Author: " + myLibrary[book].author;
    bookPages.innerText = myLibrary[book].pages + " pages";
    if(myLibrary[book].finished === false) { 
      bookRead.innerText = "Finished: No";
      bookRead.style.color = "red";
    } else {
      bookRead.innerText = "Finished: Yes";
      bookRead.style.color = "green";
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
        bookRead.style.color = "green";
      } else {
        bookRead.innerText = "Finished: No";
        myLibrary[bookIndex].finished = false;
        bookRead.style.color = "red";
      }
    })

    bookContent.appendChild(bookName);
    bookContent.appendChild(bookAuthor);
    bookContent.appendChild(bookPages);
    bookContent.appendChild(bookRead);
    bookContent.appendChild(buttonDiv);
    buttonDiv.appendChild(deleteBookButton);
    buttonDiv.appendChild(finishedButton);
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

function cancel() {
  addBookDialog.close();
};

// Template books
const book1 = new Book("IT", "Stephen King", 1115, false);
const book2 = new Book("Hannibal Rising", "Thomas Harris", 384, true)
myLibrary.push(book1);
myLibrary.push(book2);
refreshBooks();
