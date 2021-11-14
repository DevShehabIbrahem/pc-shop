let username = document.querySelector("#my-username"),
  password = document.querySelector("#my-pass"),
  register_btn = document.querySelector("#login");

//local storge data
let getuser = localStorage.getItem("username"),
  getpass = localStorage.getItem("password");

//function register
register_btn.addEventListener("click", loginvald);
function loginvald(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("plz enter your email");
  } else {
    logindone();
  }
}

function logindone() {
  if (
    getuser &&
    getuser.trim() === username.value &&
    getpass &&
    getpass === password.value
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  } else {
    alert("username and password is wrong");
  }
}
