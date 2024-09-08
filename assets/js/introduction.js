// Calling the function
document.querySelector('btn.btn').addEventListener('click', () => {
    // Creating the item 'name'  with the value from the input
    localStorage.setItem('name', document.querySelector('input.name').value);
})

// Getting the value of the item 'name' for the input
document.querySelector('input.name').value = localStorage.getItem('name');
// Getting the value of the item 'name' for the paragraph.
document.querySelector('p.paragraph').innerHTML = `Welcome again ${localStorage.getItem('name')}`;