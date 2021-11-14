let welcomeuser = document.querySelector(".welcome"),
  logout = document.querySelector("#logout"),
  user_data = document.querySelector(".user-data"),
  //local storge data
  userdata = localStorage.getItem("username");

function apper() {
  if (userdata) {
    //add welcome to user
    welcomeuser.innerHTML += " welcome " + userdata;
    //show the massge div to user
    welcomeuser.classList.remove("d-none");
    //remove sign in and sign up form nav
    user_data.classList.add("d-none");
    //show logout to user
    logout.classList.remove("d-none");
  } else {
    user_data.classList.remove("d-none");
  }
}
apper();

logout.addEventListener("click", logoutt);
//when user getout from the website
function logoutt() {
  //clear inforamtion from database
  if (userdata) localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
