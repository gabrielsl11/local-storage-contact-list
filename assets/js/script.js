let list = localStorage.getItem('myList');

var form = document.querySelector('form');
var people = document.querySelector('tbody');

if (list) {
    list = JSON.parse(list);
} else {
    list = [];
}

toList();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let newPerson = new Object();
    newPerson.name = document.querySelector('#name').value;
    newPerson.telephone = document.querySelector('#telephone').value;

    list.push(newPerson);

    localStorage.setItem('myList', JSON.stringify(list));

    toList();

    document.querySelector('#name').focus();
})

function toList(filter = '') {
    people.innerHTML = "";
    list.forEach((item, key) => {

        if (item.name.toUpperCase().indexOf(filter.toUpperCase()) >= 0 || filter == "") {
            let tableRow = document.createElement('tr');
            let tableData0 = document.createElement('td');
            let tableData1 = document.createElement('td');
            let tableData2 = document.createElement('td');

            tableData0.innerHTML = `${item.name}`;
            tableData1.innerHTML = `${item.telephone}`;
            tableData2.innerHTML = `<button class="btn btn-primary">Update</button> <button class="btn btn-danger">Delete</button>`;

            tableRow.appendChild(tableData0);
            tableRow.appendChild(tableData1);
            tableRow.appendChild(tableData2);
            people.appendChild(tableRow);
        }
    });
}