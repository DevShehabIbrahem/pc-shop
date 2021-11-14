//regis ter user information
let username = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  register_btn = document.querySelector("#sign_up");

//submit  register function
register_btn.addEventListener("click", valdetion);

function valdetion(e) {
  e.preventDefault();
  //valdetion register
  if (email.value === "" || password.value === "" || username.value === "") {
    alert("plz enter your email");
  } else {
    savedata();

    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
//save data at database
function savedata() {
  localStorage.setItem("username", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}
