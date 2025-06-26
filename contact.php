<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "career_catalyst");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = isset($_POST['name']) ? $conn->real_escape_string($_POST['name']) : '';
  $email = isset($_POST['email']) ? $conn->real_escape_string($_POST['email']) : '';
  $message = isset($_POST['message']) ? $conn->real_escape_string($_POST['message']) : '';

  if ($name && $email && $message) {
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
    if ($conn->query($sql)) {
      echo "<p style='color: green;'>✅ Message sent successfully!</p>";
    } else {
      echo "<p style='color: red;'>❌ Error: " . $conn->error . "</p>";
    }
  } else {
    echo "<p style='color: red;'>❌ Missing input data.</p>";
  }
}

$conn->close();
?>
