const myLibrary = [];
const content = document.getElementById("content");

function Book(name, author, pages, haveRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
};

function placeBooks() {
  // create div
  // loop through myLibrary array
  // place book onto the div

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
    if(myLibrary[0].haveRead === false) { 
      bookRead.innerText = "Not read"
    } else {
      bookRead.innerText = "Have read"
    }

    bookContent.appendChild(bookName);
    bookContent.appendChild(bookAuthor);
    bookContent.appendChild(bookPages);
    bookContent.appendChild(bookRead);
    content.appendChild(bookContent);
  }

}

// Template books
const book1 = new Book("IT", "Stephen King", 1115, false);
const book2 = new Book("Hannibal Rising", "Thomas Harris", 384, false)
myLibrary.push(book1);
myLibrary.push(book2);
placeBooks();