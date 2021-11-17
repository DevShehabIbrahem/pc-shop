let welcomeuser = document.querySelector(".welcome"), //welcome div
  logout = document.querySelector("#logout"),
  user_data = document.querySelector(".user-data"),
  //local storge data
  userdata = localStorage.getItem("username"),
  //product container
  productcont = document.querySelector(".my_product"),
  basket = document.querySelector("#cart"), // em badge
  shoopingitem = document.querySelector(".shoopicon"), //icon
  productscart = document.querySelector(".cart-products"), //menu produtcts parent
  productscartdiv = document.querySelector(".cart-products div"); //menu produtcts

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
    title: "Asus pc",
    imge: "./img/p1.png",
  },
  {
    id: 2,
    title: "Msi pc",
    imge: "./img/p2.png",
  },
  {
    id: 3,
    title: "Aorus pc",
    imge: "./img/p3.png",
  },
  {
    id: 4,
    title: "Valorant pc",
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
//show items in menu && incress the number
let addeditem = []; //added item
function addedTocard(id) {
  if (localStorage.getItem("username")) {
    let choosenitems = products.find((item) => item.id === id); // get ele by id
    addeditem = [...addeditem, choosenitems]; //add the useritems insid array

    localStorage.setItem("items", JSON.stringify(addeditem));
    console.log(addeditem);
    productscartdiv.innerHTML += `<li class="list-group-item">${choosenitems.title}</li>`; // add ele by ` `
    // length products
    let lengthproducts = document.querySelectorAll(".cart-products li");
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}

//show menu

shoopingitem.addEventListener("click", showitems);

function showitems() {
  if (productscartdiv.innerHTML != "") {
    // if this div not empty show
    productscart.classList.toggle("d-none");
  }
}
