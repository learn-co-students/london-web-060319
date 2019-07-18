window.addEventListener("DOMContentLoaded", () => {
  init();
});

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formNode = e.target;
  const book = {
    img: formNode[2].value,
    author: formNode[1].value,
    title: formNode[0].value
  };

  fetch("http://localhost:3001/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  })
    .then(data => data.json())
    .then(book => addBook(book));
});

function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = `card`;
  div.id = "book-" + book.id;

  const button = document.createElement("button");
  button.innerText = "x";
  button.dataset.id = book.id;
  button.addEventListener("click", () => {
    const bookDiv = document.querySelector(`#book-${book.id}`);
    fetch(`http://localhost:3001/books/${button.dataset.id}`, {
      method: "DELETE"
    }).then(() => bookDiv.remove());
  });

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  div.appendChild(button);
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(booksArray) {
  booksArray.map(book => {
    addBook(book);
  });
}

function renderAllBooks() {
  fetch("http://localhost:3001/books")
    .then(data => data.json()) // this resolves to a js obj (in this case, an [])
    .then(booksArray => showBooks(booksArray));
}

function init() {
  renderAllBooks();
}
