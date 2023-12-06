// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var paymentForm = document.getElementById('paymentForm');

  // Attach event listener to the form submission
  paymentForm.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform custom validation before submitting the form
    if (validateForm()) {
      // If validation passes, you can submit the form
      alert('Form submitted successfully!');
      paymentForm.submit();
    }
  });

  // Custom validation function
  function validateForm() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var upiInput = document.getElementById('upi');

    // Example: Check if the name contains only letters
    if (!/^[a-zA-Z ]+$/.test(nameInput.value)) {
      alert('Please enter a valid name with only letters.');
      return false;
    }

    // Example: Check if the phone number is a valid format
    if (!/^\d{10}$/.test(phoneInput.value)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }

    // Example: Check if the email is a valid format
    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // You can add more custom validation for the UPI ID or other fields

    // If all validation passes, return true
    return true;
  }
});
