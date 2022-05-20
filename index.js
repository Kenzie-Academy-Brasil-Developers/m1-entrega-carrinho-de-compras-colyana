const productsCart = [
    {
        id: 1,
        name: "Pão de forma",
        price: 3.00
    },
    {
        id: 2,
        name: "Uva",
        price: 7.00
    },
    {
        id: 3,
        name: "Suco de laranja",
        price: 10.00
    }
]
const body          = document.querySelector("body")
const mainArea      = document.createElement("main")
let productsList    = document.createElement("ul")
const productItem   = document.createElement("li")
const productDetails = document.createElement("section")
const somaFinal     = document.createElement("p")
const buttonEnd     = document.createElement("button")

let soma = 0

body.appendChild(mainArea)
mainArea.appendChild(productsList)
productItem.appendChild(productsList)
mainArea.appendChild(productDetails)
productDetails.appendChild(somaFinal)
productDetails.appendChild(buttonEnd)


for(let i = 0; i < productsCart.length; i++){
  if(i === productsCart[i].id){
    let listItem = document.createElement("li");
    listItem.innerHTML = `${productsCart[i].name} - R$${productsCart[i].price}`
    productsList.appendChild(listItem)

    soma += productsCart[i].price
  }
}

buttonEnd.innerText = `Finalizar compra`