// // var nameInput = document.getElementById("productName")
// // var priceInput = document.getElementById("productPrice")
// // var categoryInput = document.getElementById("productCategory")
// // var saleInput = document.getElementById("productSale")
// // var descInput = document.getElementById("productDesc")

// // var productList = [];

// // function addProduct() {
// //     var product = {
// //         name: nameInput.value ,
// //         price:priceInput.value , 
// //         category:categoryInput.value ,
// //         sale : saleInput.checked ,
// //         desc:descInput.value ,
// //     }
// //     productList.push(product)
// //     displayProduct()
// // }

// // function displayProduct() {

// //     var cartoona = ""

// //     for(var i = 0 ; i < productList.length ; i++){
// //         cartoona += `<tr>   // 
// //         <td>`+ (i +1)+`</td>
// //         <td>`+productList[i].name+`</td>
// //         <td>`+productList[i].price+`</td>
// //         <td>`+productList[i].category+`</td>
// //         <td>`+productList[i].sale+`</td>
// //         <td>`+productList[i].desc+`</td>
// //         <td> <button class="btn btn-warning"> Update</button> </td>
// //         <td> <button class="btn btn-danger"> Delete</button> </td>
// //     </tr> `
// //     }
// //     document.getElementById("myData").innerHTML = cartoona;
// // }

// // function clearform() {

// //     nameInput.value = "" ;
// //     priceInput.value = "" ;
// //     categoryInput.value = "" ;
// //     saleInputInput.value = "" ;
// //     descInput.value = "" ;
// //     saleInput.checked = false ;
// // }

//  // CRUD  S

//  var nameInput = document.getElementById("productName");
//  var priceInput = document.getElementById("productPrice");
//  var categoryInput = document.getElementById("productCategory");
//  var descInput = document.getElementById("productDesc");
//  var searchInput = document.getElementById("searchName");

// var productList = [];

// if (localStorage.getItem("products") != null) {

//   productList = JSON.parse(localStorage.getItem("products"));
//   displayProduct(productList);
// }


//  function addProduct() {
//     var product = {
//         name:nameInput.value ,
//         price:priceInput.value ,
//         category:categoryInput.value ,
//         description:descInput.value ,
//     }
//   productList.push(product);
//   localStorage.setItem("products",JSON.stringify(productList));
//   displayProduct(productList);

//  }


//  function displayProduct(arr) {
//   var cartoona = ""
//   for(var i = 0 ; i < productList.length ; i++){
//     cartoona += `<tr>
//     <td>${(i+1)}</td>
//     <td>${productList[i].name}</td>
//     <td>${productList[i].price}</td>
//     <td>${productList[i].category}</td>
//     <td>${productList[i].description}</td>
//     <td><button class="btn btn-warning btn-sm">Update</button></td>
//     <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
// </tr>`
// }
//    document.getElementById("myData").innerHTML = cartoona;
// }


// function deleteProduct(index) {
//   productList.splice(index,1);
//   localStorage.setItem("products",JSON.stringify(productList));
//   displayProduct(productList);
// }


// function clearForm(){
//     nameInput.value = "" ;
//     priceInput.value = "" ;
//     categoryInput.value = "" ;
//     descInput.value = "" ;
// }



// // function searchByName(term) {
// //   var matchedProduct = [];
// //   for(var i = 0 ; i < productList.length ; i++){
// //     if (productList[i].name.toLowerCase().includes(term.toLowerCase()) === true){
// //      matchedProduct.push(productList[i])
// //     }
// //   }
// //   console.log(matchedProduct);
// //   displayProduct(matchedProduct);
// // }


// // searchByName("i")


// function searchByName() {
//   var searchValue = searchInput.value.toLowerCase();
//   var result = "";

//   for (var i = 0 ; i < productList.length ; i++){
//     if (productList[i].name.toLowerCase().includes(searchValue) == true) {
//       result += `<tr>
//       <td>${(i+1)}</td>
//       <td>${productList[i].name.toLowerCase().replace(searchValue,"<span class='bg-success'> " + searchValue + "</span>")}</td>
//       <td>${productList[i].price}</td>
//       <td>${productList[i].category}</td>
//       <td>${productList[i].description}</td>
//       <td><button class="btn btn-warning btn-sm">Update</button></td>
//       <td><button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
//   </tr>`
//     }
//     document.getElementById("myData").innerHTML = result;
//   }

// }

// if (localStorage.getItem("products") != null) {

//   productList = JSON.parse(localStorage.getItem("products"));
//   displayProduct(productList);


// localStorage.setItem("products",JSON.stringify(productList));

var siteNameInput = document.getElementById("siteNameInput")
var siteUrlInput = document.getElementById("siteUrlInput")

var siteList = [];

if ( localStorage.getItem("site") != null) {
  siteList = JSON.parse(localStorage.getItem("site"));
  displaySite(siteList);
}

function addSite() {

  if (validateSite() == true) {
    var site = {
      name:siteNameInput.value , 
      Url:siteUrlInput.value 
    }
     siteList.push(site);
     localStorage.setItem("site", JSON.stringify(siteList));
     displaySite(siteList);
     clearForm();
    
  } else {
   document.getElementById("wrongInputCard").classList.remove("d-none")
   document.getElementById("overlay").classList.remove("d-none")
  }
}

function displaySite(arr) {
  var cartoona = '';
  for(var i = 0 ; i < siteList.length ; i++){
    cartoona += `<tr>
    <td>${(i + 1)}</td>
    <td>${siteList[i].name}</td>
    <td><button class="btn visitBtn text-white btn-sm"><i class="fa-solid fa-eye me-2 "></i>Visit</button></td>
    <td><button onclick="deleteSite(${i})" class="btn deleteBtn text-white btn-sm"><i class="fa-regular fa-trash-can me-2 "></i>Delete</button></td>
</tr>`
  }
  document.getElementById("myData").innerHTML = cartoona;
}

function clearForm() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function deleteSite(num) {
  siteList.splice(num,1);
  localStorage.setItem("site", JSON.stringify(siteList));
  displaySite(siteList);
}


function validateSite(){
  var regex1 = /^\w{3,}$/
  var regex2 = /^.+\.com$/
   
  if (regex1.test(siteNameInput.value) == true && regex2.test(siteUrlInput.value)){
    return true ;
  }
    else {
      return false ;
    }
  }


  function cancelCard() {
    document.getElementById("wrongInputCard").classList.add("d-none")
    document.getElementById("overlay").classList.add("d-none")
  }
