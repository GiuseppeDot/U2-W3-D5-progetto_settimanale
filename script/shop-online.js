const END_POINT = "https://striveschool-api.herokuapp.com/api/product/";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGNlODhhZDEyOTAwMTU4NzZiYzciLCJpYXQiOjE3MzE2NjEwMzIsImV4cCI6MTczMjg3MDYzMn0.Z5kPwpamDzIBv3LWgMIliIsz1NmEnk6fg4kZeyrkEtI";
const currentYear = document.getElementById("current-year");
currentYear.innerText = new Date().getFullYear();

// class Product {
//   constructor(_name, _description, _brand, _imageUrl, _price) {
//     this.name = _name;
//     this.description = _description;
//     this.brand = _brand;
//     this.imagrUrl = _imageUrl;
//     this.price = _price;
//   }
// }

// const nameProduct = document.getElementById("name");
// const descriptionProduct = document.getElementById("description");
// const brandProduct = document.getElementById("brand");
// const imageUrl = document.getElementById("imageUrl");
// const priceProduct = document.getElementById("price");
// const newProduct = new Product(
//   nameProduct.value,
//   descriptionProduct.value,
//   brandProduct.value,
//   imageUrl.value,
//   priceProduct.value
// );

//------------------------------------------------------------------------------------------------------------------------------------

fetch(END_POINT, {
  headers: {
    Authorization: API_TOKEN,
  },
})
  .then((response) => {
    if (response.ok) {
      console.log(response, "response");
      return response.json();
    } else {
      throw new Error("Errore nella recezione dati del server");
    }
  })
  .then((oggetto) => {
    console.log(oggetto, "oggetto");
    const row = document.getElementById("row-products");
    oggetto.forEach((product) => {
      const newCol = document.createElement("div");
      newCol.innerHTML = `
      <div class="card">
         <img src="..." class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div>
      `;
      row.appendChild(newCol);
    });
  })
  .catch((error) => {
    console.log(error, "error");
  });

console.log("ciao");
