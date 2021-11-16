let welcomeuser = document.querySelector(".welcome"),
  logout = document.querySelector("#logout"),
  user_data = document.querySelector(".user-data"),
  //local storge data
  userdata = localStorage.getItem("username"),
  //product container
  productcont = document.querySelector(".my_product"),
  basket = document.querySelector(".shoopicon");

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

//products
let products = [
  {
    id: 1,
    imge: "./img/p1.png",
  },
  {
    id: 2,
    imge: "./img/p2.png",
  },
  {
    id: 3,
    imge: "./img/p3.png",
  },
  {
    id: 4,
    imge: "./img/p4.jpg",
  },
];
function productsuI() {
  let product = products.map((item) => {
    return `
   
      <div class="col-md-12">
        <div class="content">
        
          <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
          </div>
          <a href="#" onclick="addedTocard(${item.id}); return false;" class="product-icon" >
       
       
        <i class="fa fa-heart"></i>
     
      </a>
         
      </div>
    
     
  
      
    `;
  });
  productcont.innerHTML = product;
}
productsuI();
console.log();
function addedTocard(id) {
  let choosenitems = products.find((item) => item.id === id);
  console.log(choosenitems);
}

// function cheaklogeduser(id) {
//   if (localStorage.getItem("username")) {
//     alert(id);
//   } else {
//     window.location = "login.html";
//   }
// }
