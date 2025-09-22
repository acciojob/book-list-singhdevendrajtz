document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');

    // Event listener for adding a book
    form.addEventListener('submit', (e) => {
        // Prevent actual form submission
        e.preventDefault();

        // Get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;

        // Basic validation
        if (title === '' || author === '' || isbn === '') {
            alert('Please fill in all fields');
            return;
        }

        // Create new table row element
        const row = document.createElement('tr');

        // Populate the row with HTML for the book data
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        // Append the new row to the table body
        bookList.appendChild(row);

        // Clear the form fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    });

    // Event listener for deleting a book
    bookList.addEventListener('click', (e) => {
        // Check if the clicked element has the 'delete' class
        if (e.target.classList.contains('delete')) {
            // Remove the entire row (the parent of the button's parent)
            e.target.closest('tr').remove();
        }
    });
});
