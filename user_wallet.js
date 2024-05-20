// JavaScript for Wallet page

document.getElementById("addFundsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var amount = parseFloat(document.getElementById("amount").value);
    if (amount >= 500) {
        // Process the form submission (e.g., update wallet balance)
        alert("Funds added successfully: $" + amount.toFixed(2)); // Example alert
        // You can add code here to handle the form submission (e.g., send a request to the server)
    } else {
        alert("Minimum amount for adding funds is $500.");
    }
});

document.getElementById("withdrawFundsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var amount = parseFloat(document.getElementById("withdrawAmount").value);
    // Process the form submission