let productssection = document.querySelector(".my_product");
console.log(productssection);
//show the items in cart page
function productui(allProducts = []) {
  if (JSON.parse(localStorage.getItem("prodctsincart")).length === 0)
    alert("There Is No Items");
  let products =
    JSON.parse(localStorage.getItem("prodctsincart")) || allProducts;
  let itemss = products.map((item) => {
    return `

          <div class="col-md-2">
            <div class="content">

              <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
              </div>
              <a href="#" onclick="removeitem(${item.id}); return false;" class="product-icon" >

              <i class="fa fa-trash" aria-hidden="true"></i>
              <span> ${item.qty}</span>

          </a>

          </div>

        `;
  });
  productssection.innerHTML = itemss;
}
productui();
//remove items
function removeitem(id) {
  let localitems = localStorage.getItem("prodctsincart");

  if (localitems) {
    let myitems = JSON.parse(localitems);

    let fitlerd = myitems.filter((item) => item.id !== id);
    localStorage.setItem("prodctsincart", JSON.stringify(fitlerd));

    //upstae my ui
    productui(fitlerd);
  }
}
