$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        // Check for empty values before submission
        if (name === "" || email === "" || phone === "") {
            alert("All fields are required!");
            return;
        }

        // AJAX call
        $.ajax({
            url: 'submit.php', // Make sure this is the correct path to submit.php
            type: 'POST',
            data: {
                name: name,
                email: email,
                phone: phone
            },
            success: function(response) {
                $("#result").html(response); // Display the PHP response in the result div
            },
            error: function(xhr, status, error) {
                alert("An error occurred: " + error); // Catch any errors
            }
        });
    });
});
