class Product {
  constructor(name, pictureUrl, description, price) {
    this.name = name;
    this.photo = pictureUrl;
    this.description = description;
    this.price = price;
  }

  constructHTML() {
    var list = { name: this.name, price: this.price, photo: this.photo };
    document.getElementById("products").innerHTML += `<div id='product' class='productDiv'><h4>${this.name}</h4><img width='100' src='${this.photo}' height='100' alt='product'><p style='font-size:14px'>${this.description}</p><span>$${this.price}</span><br><br><button class='gb' onclick='add(${JSON.stringify(list)})'>add to cart</button></div>`;
  }
}

var cartProducts;
var opened = false;

if (localStorage.getItem('key') !== null) {
  try {
    cartProducts = JSON.parse(localStorage.getItem('key'));
  } catch (error) {
    console.error("Error parsing cartProducts from localStorage:")
    cartProducts = [];
  }
} else {
  localStorage.setItem('key', '[]');
  cartProducts = [];
}
for (i = 0; i < cartProducts.length; i++) {
  console.log(cartProducts[i]);
}

if (cartProducts.length > 0) {
  document.getElementById("counterSymbol").style.display = "block";
  document.getElementById("counterSymbol").textContent = cartProducts.length;
}

var products = [
  new Product("Full Fruit Munchers Package", "full.png", "contains three 20ml salsas and 50g of chips. Get all your necessary vitamins naturally. Add 'em an extra burst of flavour with our salsas!", "40.00"),
  new Product("Mango Munchers", "mango.png", "Love our mango variant and nothing else? Get our 50g container of pure Mango Muncher goodness.", "30.00")
];

for (var i = 0; i < products.length; i++) {
  products[i].constructHTML();
}

function add(name) {
  cartProducts.push(name);
  document.getElementById("counterSymbol").style.display = "block";
  document.getElementById("counterSymbol").textContent = cartProducts.length;
  console.log(cartProducts);
  doit()
  localStorage.setItem("key", JSON.stringify(cartProducts));
  alert("product " + name.name + " added to cart")
}

function final() {
  if (cartProducts.length != 0) {
    window.location = "final.html"
  } else {
    alert("you haven't ordered anything!")
  }
}

function Return() {
  if (cartProducts.length != 0) {
    window.location = "final.html"
  }
}

function clear() {
  alert("Your cart has been cleared")
  cartProducts = []
  localStorage.setItem('key', '[]');
}

function show() {
  if (!opened) {
    document.getElementById("bars").classList.add("spin")
    document.getElementById("expid").classList.add("exp")
    setTimeout(() => {
      document.getElementById("bars").classList.remove("spin")
      document.getElementById("expid").classList.remove("exp")
      document.getElementById("bars").style.transform = "rotate(90deg)"
      document.getElementById("expid").style.top = "0px"
    }, 500)
    opened = true
  } else {
    document.getElementById("bars").classList.add("spinL")
    document.getElementById("expid").classList.add("shr")
    setTimeout(() => {
      document.getElementById("bars").classList.remove("spinL")
      document.getElementById("expid").classList.remove("shr")
      document.getElementById("bars").style.transform = "rotate(0deg)"
      document.getElementById("expid").style.top = "-500px"
    }, 500)
    opened = false
  }
}

function remove(id) {
  console.log(id)
  cartProducts.splice(id-1,1)
  if(cartProducts.length == 0){
    document.getElementById("counterSymbol").style.display = "none";
  }
  document.getElementById("counterSymbol").textContent = cartProducts.length
  localStorage.setItem("key", JSON.stringify(cartProducts));
  doit()
}

function doit() {
  var wat
  document.getElementById("orders").innerHTML = "";
  for (i = 0; i < cartProducts.length; i++) {
    wat = i
    DIV = document.createElement("div");
    DIV.style.backgroundColor = "#fff1b5";
    DIV.style.margin = "20px";
    DIV.style.borderRadius = "10px";
    DIV.style.padding = "10px";

    TITLE = document.createElement("h4");
    PHOTO = document.createElement("img");
    PRICE = document.createElement("span");
    BUTTON = document.createElement("button");

    TITLE.textContent = cartProducts[i].name;
    PHOTO.src = cartProducts[i].photo;
    PHOTO.width = 100;
    PHOTO.height = 100;
    PHOTO.style.borderRadius = "60%";
    PHOTO.style.marginTop = "10px"
    PRICE.textContent = "$" + cartProducts[i].price;
    BUTTON.onclick = () => { remove(wat) };
    BUTTON.textContent = "Remove From Cart";
    BUTTON.classList.add("rb");
    BUTTON.style.fontSize = "12px"
    BUTTON.style.margin = "15px"

    DIV.id = "cart" + cartProducts.length;
    DIV.appendChild(PHOTO);
    DIV.appendChild(TITLE);
    DIV.appendChild(PRICE);
    DIV.appendChild(document.createElement("br"));
    DIV.appendChild(BUTTON);

    

    document.getElementById("orders").appendChild(DIV);
  }
}

function tst() {
  console.log("test")
}
doit()