<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $content = $_POST["content"];

  $to = "max.orin05@yahoo.com";
  $email_subject = "New contact form submission: $name";
  $email_body = "You have received a new message from the contact form.\n\nName: $name\nEmail: $email\Content: $content";
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email";

  mail($to, $email_subject, $email_body, $headers);
  header("Location: thank-you.html");
  exit();
}
?>