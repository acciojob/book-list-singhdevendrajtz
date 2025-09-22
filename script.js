document.getElementById('book-form').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the form from submitting

            // Get form values
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            // Create new table row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td><button class="delete">Clear</button></td>
            `;

            // Append row to the book list
            document.getElementById('book-list').appendChild(row);

            // Clear the form fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
        });

        // Add event listener for delete button clicks
        document.getElementById('book-list').addEventListener('click', function(e) {
            if (e.target.classList.contains('delete')) {
                e.target.closest('tr').remove(); // Remove the entire row
            }
        });