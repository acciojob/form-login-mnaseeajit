function getFormvalue() {
    //Write your code here
     // Get the form element
        var form = document.getElementById("form1");

        // Access the input fields by their names
        var firstName = form.elements["fname"].value;
        var lastName = form.elements["lname"].value;

        // Display values using alert
        alert("First name: " + firstName + "\nLast name: " + lastName);

        // Prevent the form from submitting (optional)
        return false;
}
