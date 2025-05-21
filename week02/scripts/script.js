// A key skill for any frontend web developer is the ability to manipulate DOM(DOM), a JavaScript object that is created after the browser initially renders the document.Manipulating the DOM means to read, edit, update, or delete the document, including CSS properties, dynamically.Essentially, the DOM is the outline of the HTML and content nodes.


// Selects the HTML element with the id 'favcap' (input field)
const input = document.querySelector('#favcap');

// Selects the HTML element 'button'
const button = document.querySelector('button');

// Selects the HTML element with the id 'list' (unordered list)
const list = document.querySelector('#list');

// Adds a click event listener to the button
button.addEventListener('click', function () {
    // Check if input is not empty or just whitespace
    if (input.value.trim() !== '') {
        // Create a new list item <li>
        const li = document.createElement('li');

        // Set the text content of the list item to the input value
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Add a click event to delete the list item when the ❌ button is clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);   // Remove the list item
            input.focus();          // Focus the input field
        });

        // Append the delete button to the list item
        li.append(deleteButton);

        // Append the list item to the list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Refocus the input field for next entry
        input.focus();
    }
});
