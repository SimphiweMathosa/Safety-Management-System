// Get form elements
const form = document.getElementById('risk-assessment-form');
const nameInput = document.getElementById('name');
const departmentInput = document.getElementById('department');
const riskTypeInput = document.getElementById('risk-type');
const riskDetailsInput = document.getElementById('risk-details');
const actionTakenInput = document.getElementById('action-taken');
const submitButton = document.getElementById('submit');

// Get the table body to append new rows
const tableBody = document.querySelector('.incident-table tbody');

// Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission to server

    // Get the input values from the form
    const name = nameInput.value;
    const department = departmentInput.value;
    const riskType = riskTypeInput.value;
    const riskDetails = riskDetailsInput.value;
    const actionTaken = actionTakenInput.value;

    // Check if all fields are filled
    if (!name || !department || !riskType || !riskDetails || !actionTaken) {
        alert('Please fill in all fields');
        return;
    }

    // Create a new table row
    const newRow = document.createElement('tr');

    // Create table cells for each form field
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    
    const departmentCell = document.createElement('td');
    departmentCell.textContent = department;
    
    const riskTypeCell = document.createElement('td');
    riskTypeCell.textContent = riskType;
    
    const riskDetailsCell = document.createElement('td');
    riskDetailsCell.textContent = riskDetails;
    
    const actionTakenCell = document.createElement('td');
    actionTakenCell.textContent = actionTaken;

    // Append cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(departmentCell);
    newRow.appendChild(riskTypeCell);
    newRow.appendChild(riskDetailsCell);
    newRow.appendChild(actionTakenCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the form after submission
    form.reset();
});
