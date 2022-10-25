let boton = document.getElementsByClassName("btn");
let nombre = document.getElementsByClassName("producto__name");
let precio = document.getElementsByClassName("precio");
let borrador = document.getElementById("btn__borrar")
console.log(boton);

let arrayDeNombres = []
let arrayDePrecios = []
let arrayDeBotones = []

for (let i = 0; i < nombre.length; i++) {
    arrayDeNombres.push(nombre[i].textContent) 
    arrayDePrecios.push(precio[i].textContent);
}

class Productos {
    constructor(id,nombre, precio,) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
    }
}

let productos = []

let cosas = () => {

    for (let i = 0; i < 6; i++) {
        productos.push(new Productos(i,arrayDeNombres[i],arrayDePrecios[i]))
    }

}
cosas()
console.log(productos);


let carritoDeCompras = JSON.parse(localStorage.getItem("listaDeCompras")) || [];
console.log(carritoDeCompras);

let agregarAlCarrito = (n) => {

    if (carritoDeCompras != []) {
        carritoDeCompras.push(productos[n])
        localStorage.setItem("listaDeCompras", JSON.stringify(carritoDeCompras));
    }

}


boton[0].addEventListener("click", () => {
    const n = 0;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})
boton[1].addEventListener("click", () => {
    const n = 1;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})
boton[2].addEventListener("click", () => {
    const n = 2;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})
boton[3].addEventListener("click", () => {
    const n = 3;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})
boton[4].addEventListener("click", () => {
    const n = 4;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})
boton[5].addEventListener("click", () => {
    const n = 5;
    agregarAlCarrito(n);
    console.log(carritoDeCompras)
})