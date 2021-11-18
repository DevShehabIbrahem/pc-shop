let productssection = document.querySelector(".my_product");
//REFACT THE ITEMS TO MAP
if (productssection) {
  let localitems = localStorage.getItem("items");
  let chossenitems = JSON.parse(localitems);
  productui(chossenitems);
}
//show the items in cart page
function productui(chossenitems) {
  let items = chossenitems.map((item) => {
    return `
       
          <div class="col-md-2">
            <div class="content">
            
              <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
              </div>
              <a href="#" onclick="removeitem(${item.id}); return false;" class="product-icon" >
           
           
              <i class="fa fa-trash" aria-hidden="true"></i>
         
          </a>
             
          </div>
         
        `;
  });
  productssection.innerHTML = items;
}
//remove items
function removeitem(id) {
  let localitems = localStorage.getItem("items");

  if (localitems) {
    let myitems = JSON.parse(localitems);

    let fitlerd = myitems.filter((item) => item.id != id);
    productui(fitlerd); //upstae my ui
    localStorage.setItem("items", JSON.stringify(fitlerd));
    console.log(fitlerd);
  }
}
