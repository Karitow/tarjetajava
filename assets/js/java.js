let precioInicial = document.querySelector("#precio-inicial");
let cuantos = document.querySelector("#total");
let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let pagar = document.querySelector("#valor-total");


menos.addEventListener("click", function () {
cuantos.innerHTML --;
pagar.innerHTML = ( total.innerHTML * precioInicial.innerHTML)
})
mas.addEventListener("click", function () {
cuantos.innerHTML ++;
pagar.innerHTML = ( total.innerHTML * precioInicial.innerHTML)
})
