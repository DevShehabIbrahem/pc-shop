let localitems = localStorage.getItem("items"),
  productssection = document.querySelector(".my_product");

if (productssection) {
  let chossenitems = JSON.parse(localitems);
  productui(chossenitems);
}

function productui(chossenitems) {
  let chossen = chossenitems.map((item) => {
    return `
       
          <div class="col-md-12">
            <div class="content">
            
              <div><img src="${item.imge}"  class="img-fluid" alt="img"></div>
              </div>
              <a href="#" onclick="removeitem(${item.id}); return false;" class="product-icon" >
           
           
              <i class="fa fa-trash" aria-hidden="true"></i>
         
          </a>
             
          </div>
         
        `;
  });
  productssection.innerHTML = chossen;
}
function removeitem(id) {
  console.log(id);
}
