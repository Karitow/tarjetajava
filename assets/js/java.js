let precioInicial = document.querySelector("#precio-inicial");
let cuantos = document.querySelector("#total");
let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let pagar = document.querySelector("#valor-total");

/* mas.onclick= function () {
total.InnerHTML =+1; // +1
valor.InnerHTML = ( 
    total.InnerHTML * precioInicial.InnerHTML
    ).tulocalstring ()
};

menos.onclick= function () {
total.InnerHTML =-1 ;// -1
valor.InnerHTML = ( 
    total.InnerHTML * precioInicial.InnerHTML)
}; */

menos.addEventListener("click", function () {
cuantos.innerHTML --;
pagar.InnerHTML = ( total.innerHTML * precioInicial.innerHTML)
})
mas.addEventListener("click", function () {
cuantos.innerHTML ++;
pagar.innerHTML = ( total.innerHTML * precioInicial.innerHTML)
})
