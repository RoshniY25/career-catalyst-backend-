document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  if (password !== confirm) {
    alert("❌ Passwords do not match.");
    return;
  }

  const formData = new URLSearchParams();
  formData.append("fullname", name);
  formData.append("email", email);
  formData.append("password", password);

  fetch("register.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  })
    .then(res => res.text())
    .then(response => {
      alert(response);
      if (response.includes("success")) {
        window.location.href = "login.html";
      }
    })
    .catch(err => {
      console.error("Error:", err);
      alert("❌ Server error. Please try again.");
    });
});
