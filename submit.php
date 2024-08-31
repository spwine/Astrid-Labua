<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve and sanitize form data
  $name = htmlspecialchars($_POST["full-name"]);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $telephone = htmlspecialchars($_POST["phone"]);
  $company = htmlspecialchars($_POST["company"]);
  $comment = htmlspecialchars($_POST["message"]);

  // Validate input data
  if (empty($name) || empty($email) || empty($telephone) || empty($company) || empty($comment)) {
    echo "Please fill in all required fields.";
    exit;
  }

  // Validate email format
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
    exit;
  }

  // Single recipient email address
  $recipientEmail = "pongsakorn.wine@hotmail.com"; // Replace with your recipient email

  // reCAPTCHA verification
  $recaptchaSecretKey = '6LfrSjMqAAAAANokh8JOZn8gOTZZAZc2w0stUj4H'; // Securely store this key
  $recaptchaResponse = $_POST['g-recaptcha-response'];

  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = [
    'secret' => $recaptchaSecretKey,
    'response' => $recaptchaResponse,
  ];

  $options = [
    'http' => [
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data),
    ],
  ];

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);

  if ($result === false) {
    echo "Error verifying reCAPTCHA.";
    exit;
  }

  $responseKeys = json_decode($result, true);

  // Check if the reCAPTCHA response is valid
  if (!$responseKeys["success"]) {
    echo "reCAPTCHA verification failed.";
    exit;
  }

  // Compose the email message
  $headers = "From: contactus_form@astridlabua.com\r\n";
  $subject = "Contact Form Submission from Astrid Labua website";
  $message = "Name: $name\nCompany: $company\nEmail: $email\nTelephone: $telephone\nMessage: $comment";

  // Send the email
  if (mail($recipientEmail, $subject, $message, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Failed to send the email.";
  }
}
