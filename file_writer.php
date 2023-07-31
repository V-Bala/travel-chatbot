<?php
// Retrieve the email from the POST request
$email = $_POST['email'];

// Validate the email address (you can add more robust validation if needed)
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Define the file path where the email addresses will be stored
    $filePath = "emails.txt";

    // Append the email address to the file
    file_put_contents($filePath, $email . PHP_EOL, FILE_APPEND);

    // Return a success response
    http_response_code(200);
} else {
    // Return an error response
    http_response_code(400);
}
?>
