// Selects the HTML element with the id 'favcap' (e.g., an input field) and assigns it to the variable 'input'
const input = document.querySelector('#favcap');
// Selects the HTML element with  'button' (e.g., a button field) and assigns it to the variable 'button'
const button = document.querySelector('button');
// Selects the HTML element with the id 'list' (e.g., a list field) and assigns it to the variable 'list'
const list = document.querySelector('#list');
// Creates a new <li> (list item) HTML element but does not add it to the document yet.
const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);

// button.addEventListener('cilck', function () {

// })

if (input.value.trim() !== ' ') {
    button.addEventListener('cilck', function () {

    })
}

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();