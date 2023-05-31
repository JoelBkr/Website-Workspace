function showCreateForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("createForm").style.display = "block";
    document.getElementById("createFormLink").style.display = "none";
    document.getElementById("loginFormLink").style.display = "block";
}

function showLoginForm() {
    document.getElementById("createForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginFormLink").style.display = "none";
    document.getElementById("createFormLink").style.display = "block";
}

function checkMasterPassword() {
    var passwordInput = document.getElementById("password").value;
    if (passwordInput === "workspace187") {
      window.location.href = "index.html";
    } else {
      alert("Falsches Passwort!");
    }
  }

function checkPasswords() {
    var password1 = document.getElementById("newPassword1").value;
    var password2 = document.getElementById("newPassword2").value;

    var passwordMatchError = document.getElementById("passwordMatchError");

    if (password1 !== password2) {
        passwordMatchError.textContent = "Die Passwörter stimmen nicht überein.";
        document.querySelector("#createForm button[type='submit']").disabled = true;
    } else {
        passwordMatchError.textContent = "";
        document.querySelector("#createForm button[type='submit']").disabled = false;
    }
}

function togglePasswordVisibility(inputId, toggleBtnId) {
    var passwordInput = document.getElementById(inputId);
    var toggleBtn = document.getElementById(toggleBtnId);

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = 'Passwort verstecken';
    } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = 'Passwort anzeigen';
    }
  }
