let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return myLibrary.length - 1; // Return the index of the new book
}

const addBookForm = document.getElementById('add-book-form');
const addBookDialog = document.getElementById('add-book-dialog');
const cardContainer = document.getElementById('card-container');

function createCard(book, index) {
    return `
        <div class="card" data-index="${index}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
            <button class="delete" onclick="removeBook(${index})">Remove book</button>
            <button class="toggle-read" onclick="toggleRead(${index})">Toggle Read Status</button>
        </div>
    `;
}

function addCard(title, author, pages, read) {
    const index = addBookToLibrary(title, author, pages, read);
    const cardHTML = createCard(myLibrary[index], index);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    updateDisplay();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    updateDisplay();
}

function updateDisplay() {
    cardContainer.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const cardHTML = createCard(book, index);
        cardContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function showAddBookDialog() {
    addBookDialog.showModal();
}

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(addBookForm);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read = formData.get('read') === 'on';
    addCard(title, author, pages, read);
    addBookDialog.close();
    addBookForm.reset();
});

window.showAddBookDialog = showAddBookDialog;
window.removeBook = removeBook;
window.toggleRead = toggleRead;