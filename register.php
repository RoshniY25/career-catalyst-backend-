<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "career_catalyst");
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["fullname"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  $stmt = $conn->prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $email, $password, $name);

  if ($stmt->execute()) {
    echo "✅ Registered successfully!";
  } else {
    echo "❌ Error: Email may already exist.";
  }

  $stmt->close();
}

$conn->close();
?>
