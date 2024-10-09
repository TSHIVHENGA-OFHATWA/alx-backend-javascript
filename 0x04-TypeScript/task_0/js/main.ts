// Define the Student interface with the required properties
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: 'Ofhatwa',
    lastName: 'Tshivhenga',
    age: 26,
    location: 'Pretoria'
};

// Create two students
const student1: Student = {
    firstName: 'Uakona',
    lastName: 'Tshivhenga',
    age: 21,
    location: 'Cape Town'
};


// Create an array containing the two students
const studentsList: Student[] = [student1, student2];


// Render a table using Vanilla JavaScript
const body = document.querySelector('body');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append a new row for each student in the studentsList
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
if (body) {
    body.appendChild(table);
}
