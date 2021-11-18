let welcomeuser = document.querySelector(".welcome"), //welcome div
  logout = document.querySelector("#logout"),
  user_data = document.querySelector(".user-data"),
  //local storge data
  userdata = localStorage.getItem("username"),
  //product container
  productcont = document.querySelector(".my_product"),
  sellerdiv = document.querySelector(".my_producttow"),
  prothree = document.querySelector(".my_productthree"),
  basket = document.querySelector("#cart"), // em badge
  shoopingitem = document.querySelector(".shoopicon"), //icon
  productscart = document.querySelector(".cart-products"), //menu produtcts parent
  productscartdiv = document.querySelector(".cart-products div"); //menu produtcts
//menu produtcts

(function apper() {
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
})();

//when user getout from the website
logout.addEventListener("click", logoutt);

function logoutt() {
  //clear inforamtion from database =>localstorge
  if (userdata) localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
//display data in DOM
(function productsuI() {
  let product = products.map((item) => {
    return `
      <div class="col-md-12">
        <div class="content">
        
          <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
          </div>
          <a href="#" onclick="addedTocard(${item.id}); return false;" class="product-main" >
       
       
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
     
      </a>
         
      </div>
    `;
  });
  productcont.innerHTML = product;
})();

//display data in DOM
(function bestseeleruI() {
  let bestseller = productstow.map((item) => {
    return `
        <div class="col-md-12">
          <div class="content">
          <div class="bg-light rounded">
            
            <img src="${item.imge}"  class="img-fluid" alt="img">
           
            <div class="info bg-dark"  >
            <a href="#" onclick="addedToselser(${item.id}); return false;" class="product-custom" >
         
         
            <i class="fa fa-cart-plus" aria-hidden="true"> 230$</i>
            

         
          </a>
          <span class="lorem">Lorem Ipsum</span>
            </div>

            </div>
           
            </div>
           

        </div>
      `;
  });
  sellerdiv.innerHTML = bestseller;
})();

(function profthree() {
  let prof = productsthree.map((item) => {
    return `
        <div class="col-md-12">
          <div class="content">
          
            <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
            </div>
            <a href="#" onclick="addedToprof(${item.id}); return false;" class="product-icon" >
         
         
            <i class="fa fa-cart-plus" aria-hidden="true"></i>

       
        </a>

        </div>
      `;
  });
  prothree.innerHTML = prof;
})();

//save data in shoop icon after reloade
(function itemsbasketnum() {
  let useritems = localStorage.getItem("items");
  let usershhop = JSON.parse(useritems);
  if (usershhop) {
    usershhop.map((item) => {
      productscartdiv.innerHTML += `<li class="list-group-item">${item.title}</li>`;
    });
    basket.innerHTML += usershhop.length; //fixd length
  }
})();

function addedTocard(id) {
  //show items in menu && incress the number of items
  let addeditem = localStorage.getItem("items") //save data after the reloade
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  if (localStorage.getItem("username")) {
    // <= if user is login

    let choosenitems = products.find((item) => item.id === id);

    addeditem = [...addeditem, choosenitems]; //add the useritems insid array for inline data

    localStorage.setItem("items", JSON.stringify(addeditem)); //add this string items to local
    productscartdiv.innerHTML += `<li class="list-group-item">${choosenitems.title}</li>`; // add ele by ` `
    // length products
    let lengthproducts = document.querySelectorAll(".cart-products li"); //all data inside the div
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}

// best seller add
function addedToselser(id) {
  //show items in menu && incress the number of items
  let addeditem = localStorage.getItem("items") //save data after the reloade in locastorge
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (localStorage.getItem("username")) {
    // <= if user is login
    let choosenitems = productstow.find((item) => item.id === id); //objct ele

    addeditem = [...addeditem, choosenitems]; //add the useritems insid array for inline data

    localStorage.setItem("items", JSON.stringify(addeditem)); //add this string items to local

    productscartdiv.innerHTML += `<li class="list-group-item">${choosenitems.title}</li>`; // add ele by ` `

    // length products
    let lengthproducts = document.querySelectorAll(".cart-products li"); //all data inside the div
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}

// prof items
function addedToprof(id) {
  let addeditem = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  let chossenitems = productsthree.find((item) => item.id === id);
  addeditem = [...addeditem, chossenitems];
  localStorage.setItem("items", JSON.stringify(addeditem));
  productscartdiv.innerHTML += `<li class="list-group-item">${chossenitems.title}</li>`;
  let many = document.querySelectorAll(".cart-products li");
  basket.innerHTML = many.length;
}
//open menu
shoopingitem.addEventListener("click", showitems);

function showitems() {
  if (productscartdiv.innerHTML != "") {
    // if this div not empty show
    productscart.classList.toggle("d-none");
  }
}

// best seller
//
