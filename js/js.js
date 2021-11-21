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
//welcome user
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

//when user getout from the website {start}
logout.addEventListener("click", logoutt);

function logoutt() {
  //clear inforamtion from database =>localstorge
  if (userdata) localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
}
//when user getout from the website {end}

//display data in DOM {start}
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

(function profthreeui() {
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
//display data in DOM {end}

//save data in shoop icon after reloade {start}
(function itemsbasketnum() {
  let useritems = localStorage.getItem("prodctsincart");
  let usershhop = JSON.parse(useritems);
  if (usershhop) {
    usershhop.map((item) => {
      productscartdiv.innerHTML += `<li class="list-group-item">${item.title}${item.qty}</li>`;
    });
    basket.innerHTML += usershhop.length; //fixd length
  }
})();
let addeditem = localStorage.getItem("items") //save data after the reloade
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let allitems = [];
//save data in shoop icon after reloade {end}

//add To card logic {start}
function addedTocard(id) {
  //show items in menu && incress the number of items

  if (localStorage.getItem("username")) {
    // <= if user is login

    let choosenitems = products.find((item) => item.id === id);
    //fisrt time user choosen retrun =>obj
    let item = allitems.find((i) => i.id === choosenitems.id);

    if (item) {
      choosenitems.qty += 1;
    } else {
      allitems.push(choosenitems);
    }
    productscartdiv.innerHTML = "";
    allitems.forEach((item) => {
      productscartdiv.innerHTML += `<li class="list-group-item">${item.title} ${item.qty}</li>`; // add ele by ` `
    });

    addeditem = [...addeditem, choosenitems]; //add the useritems insid array for inline data
    let unique = getuniqueArr(addeditem, "id");

    localStorage.setItem("prodctsincart", JSON.stringify(unique)); //add this string items to local

    // length products
    let lengthproducts = document.querySelectorAll(".cart-products div li"); //all data inside the div
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}

function addedToselser(id) {
  //show items in menu && incress the number of items

  if (localStorage.getItem("username")) {
    // <= if user is login

    let choosenitems = productstow.find((item) => item.id === id);
    //fisrt time user choosen retrun =>obj
    let item = allitems.find((i) => i.id === choosenitems.id);

    if (item) {
      choosenitems.qty += 1;
    } else {
      allitems.push(choosenitems);
    }
    productscartdiv.innerHTML = "";
    allitems.forEach((item) => {
      productscartdiv.innerHTML += `<li class="list-group-item">${item.title} ${item.qty}</li>`; // add ele by ` `
    });

    addeditem = [...addeditem, choosenitems]; //add the useritems insid array for inline data
    let unique = getuniqueArr(addeditem, "id");

    localStorage.setItem("prodctsincart", JSON.stringify(unique)); //add this string items to local

    // length products
    let lengthproducts = document.querySelectorAll(".cart-products div li"); //all data inside the div
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}

function addedToprof(id) {
  //show items in menu && incress the number of items

  if (localStorage.getItem("username")) {
    // <= if user is login

    let choosenitems = productsthree.find((item) => item.id === id);
    //fisrt time user choosen retrun =>obj
    let item = allitems.find((i) => i.id === choosenitems.id);

    if (item) {
      choosenitems.qty += 1;
    } else {
      allitems.push(choosenitems);
    }
    productscartdiv.innerHTML = "";
    allitems.forEach((item) => {
      productscartdiv.innerHTML += `<li class="list-group-item">${item.title} ${item.qty}</li>`; // add ele by ` `
    });

    addeditem = [...addeditem, choosenitems]; //add the useritems insid array for inline data
    let unique = getuniqueArr(addeditem, "id");

    localStorage.setItem("prodctsincart", JSON.stringify(unique)); //add this string items to local

    // length products
    let lengthproducts = document.querySelectorAll(".cart-products div li"); //all data inside the div
    basket.innerHTML = lengthproducts.length; // how much items inside the basket
  } else {
    window.location = "./login.html";
  }
}
//unique numbber in local
function getuniqueArr(arr, filtertype) {
  let unique = arr
    .map((item) => item[filtertype])
    .map((item, i, last) => last.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}
//add To card logic {end}

//open menu
shoopingitem.addEventListener("click", showitems);

function showitems() {
  if (productscartdiv.innerHTML != "") {
    // if this div not empty show
    productscart.classList.toggle("d-none");
  }
}
