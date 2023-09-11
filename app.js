console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
  {
    id: 1,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];

class Book {
  constructor(id, title, author, read) {
    (this.id = id),
      (this.title = title),
      (this.author = author),
      (this.read = read);
  }
}

class Library {
  constructor(books) {
    (this.book_count = books.length), (this.books = books);
  }

  addBook() {
    const bookTitle = document.getElementById("title");
    const bookAuthor = document.getElementById("author");
    const bookRead = document.getElementById("read");
    this.book_count++;
    const createdBook = new Book(
      this.book_count,
      bookTitle.value,
      bookAuthor.value,
      bookRead.value
    );
    this.books.push(createdBook);

    // adding book to table
    const table = document.getElementById("tableBody");
    const newTr = document.createElement("tr");
    console.log(createdBook.id);
    newTr.classList.add(createdBook.id);
    newTr.id = "bookRow" + createdBook.id;
    const titleData = document.createElement("td");
    const authorData = document.createElement("td");
    const readData = document.createElement("td");
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.id = "remove";
    removeButton.classList.add(createdBook.id);
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", (event) => {
      this.removeBook(parseInt(event.target.classList[0]));
    });

    titleData.textContent = bookTitle.value;
    authorData.textContent = bookAuthor.value;
    const newCheckbox = document.createElement("input");
    newCheckbox.classList.add(createdBook.id);
    newCheckbox.type = "checkbox";
    newCheckbox.checked = bookRead.checked;
    newCheckbox.disabled = bookRead.checked;
    newCheckbox.addEventListener("click", (event) => {
      this.markRead(event.target, parseInt(event.target.classList[0]));
    });

    readData.appendChild(newCheckbox);
    removeCell.appendChild(removeButton);
    newTr.appendChild(titleData);
    newTr.appendChild(authorData);
    newTr.appendChild(readData);
    newTr.appendChild(removeCell);
    console.log(newTr);

    table.appendChild(newTr);
    console.log(this.book_count);
  }

  markRead(checkbox, id) {
    this.books.find((book) => {
      if (id === book.id) {
        book.read = true;
        checkbox.disabled = true;
      }
    });
  }

  removeBook(id) {
    this.books = this.books.filter((book) => {
      return book.id != id;
    });
    console.log(this.books);

    const table = document.getElementById("tableBody");
    const row = document.getElementById("bookRow" + id);
    table.removeChild(row);
  }
}

const library = new Library(books);
const bookAdd = document.getElementById("inputForm");
bookAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});

const bookOne = document.getElementById("bookRow1");
const row1 = document.getElementById("firstRow");
bookOne.addEventListener("click", (event) => {
  event.preventDefault();
  bookOne.remove(row1);
});
