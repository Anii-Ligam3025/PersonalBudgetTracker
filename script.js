document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    
    const tableBody = document.getElementById('summaryBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${category}</td><td>$${amount}</td><td>${date}</td><td>${type}</td>`;
    tableBody.appendChild(newRow);
    
    document.getElementById('budgetForm').reset();
});
