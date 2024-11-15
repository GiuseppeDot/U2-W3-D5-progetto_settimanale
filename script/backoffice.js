const END_POINT = "https://striveschool-api.herokuapp.com/api/product/";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGNlODhhZDEyOTAwMTU4NzZiYzciLCJpYXQiOjE3MzE2NjEwMzIsImV4cCI6MTczMjg3MDYzMn0.Z5kPwpamDzIBv3LWgMIliIsz1NmEnk6fg4kZeyrkEtI";

class Product {
  constructor(_name, _description, _brand, _imageUrl, _price) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.imagrUrl = _imageUrl;
    this.price = _price;
  }
}

const nameProduct = document.getElementById("name");
const descriptionProduct = document.getElementById("description");
const brandProduct = document.getElementById("brand");
const imageUrlProduct = document.getElementById("imageUrl");
const priceProduct = document.getElementById("price");

const formCustom = document.getElementById("product-form");
formCustom.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = new Product(
    nameProduct.value,
    descriptionProduct.value,
    brandProduct.value,
    imageUrlProduct.value,
    priceProduct.value
  );
  fetch(END_POINT, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response, "response");
      } else {
        throw new Error("Errore nella recezione dati");
      }
    })
    .catch((error) => {
      console.log(error, "error");
    });
});

// console.log(END_POINT);
