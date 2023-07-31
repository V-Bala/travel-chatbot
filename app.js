function signUp() {
    var email = document.getElementById("email").value;
    
    // Send the email to the server for file writing
    // Replace "file_writer.php" with the actual endpoint or server-side script that handles file writing
    fetch("file_writer.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
    })
    .then(function(response) {
        if (response.ok) {
            alert("Email successfully signed up!");
            document.getElementById("email").value = ""; // Clear the email field after successful signup
        } else {
            alert("Error occurred while signing up. Please try again.");
        }
    })
    .catch(function(error) {
        alert("Error occurred while signing up. Please try again.");
        console.log(error);
    });
}