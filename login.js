document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  fetch("login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
    .then(res => res.text())
    .then(response => {
      const messageDiv = document.getElementById("login-message");
      if (response.trim() === "success") {
        messageDiv.innerText = "✅ Login successful! Redirecting...";
        messageDiv.style.color = "green";
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1500);
      } else {
        messageDiv.innerText = "❌ Invalid email or password.";
        messageDiv.style.color = "red";
      }
    })
    .catch(err => {
      console.error("Error:", err);
      document.getElementById("login-message").innerText = "❌ Server error.";
    });
});
