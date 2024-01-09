const myLibrary = [];

function Book(name, author, pages, haveRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
};

// Template books
const book1 = new Book("IT", "Stephen King", 1115, false);
const book2 = new Book("Hannibal Rising", "Thomas Harris", 384, false)