const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(library, book) {
  library.push(book);
    return 0;
}
function showBooks(library) {
  for (let i = 0; i < library.length; i++) {
    console.log(library[i]);
  }
}
function createCard(title, author, description) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Description:</strong> ${description}</p>
        </div>
    `;
}
function addCard(title, author, description) {
    const cardContainer = document.getElementById('card-container');
    const cardHTML = createCard(title, author, description);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
}

