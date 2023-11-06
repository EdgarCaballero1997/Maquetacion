let listaCarrito = [];
let prenda1 = () => {
    objectPrenda1 = {
    nombre: "Pantalón suelto gris",
    precio: 30
    }
    listaCarrito.push(objectPrenda1);
}
let prenda2 = () => {
    objectPrenda2 = {
    nombre: "Vestido túnico",
    precio: 20
    }
    listaCarrito.push(objectPrenda2);
}
let prenda3 = () => {
    objectPrenda3 = {
    nombre: "Falda mid print",
    precio: 20
    }
    listaCarrito.push(objectPrenda3);
}
let prenda4 = () => {
    objectPrecio4 = {
    nombre: "Cardigan largo rayas",
    precio: 30
    }
    listaCarrito.push(objectPrecio4);
}
let prenda5 = () => {
    objectPrenda5 = {
    nombre: "Mini falda cebra",
    precio: 20
    }
    listaCarrito.push(objectPrenda5);
}
let prenda6 = () => {
    objectPrenda6 = {
    nombre: "Mono beige",
    precio: 50
    }
    listaCarrito.push(objectPrenda6);
}
let prenda7 = () => {
    objectPrenda7 = {
    nombre: "Jersey vestido beige",
    precio: 20
    }
    listaCarrito.push(objectPrenda7);
}
let prenda8 = () => {
    objectPrenda8 = {
    nombre: "Pantalón ancho negro",
    precio: 30
    }
    listaCarrito.push(objectPrenda8);
}
let mostrarCarrito = () => {
    let arrayCaracteristicas = [];
    for(let i = 0; i < listaCarrito.length; i++) {
        let nombreObject = listaCarrito[i].nombre;
        let precioObject = listaCarrito[i].precio;
        let prenda = `Artículo: ${nombreObject}.\nPrecio: ${precioObject}€`;
        arrayCaracteristicas.push(prenda);
    }
    let resultElement = document.getElementById("text-total");
    arrayCaracteristicas.forEach((caracteristicas) => {
        let parrafo = document.createElement("p");
        parrafo.textContent = caracteristicas;
        resultElement.appendChild(parrafo);
    });
    return arrayCaracteristicas;
  }
let precioTotal = () => {
    let arrayPrecios = [];
    for(let i = 0; i < listaCarrito.length; i++){
        let precios = listaCarrito[i].precio;
        arrayPrecios.push(precios);
    }
    let suma = 0;
    for(let i = 0; i < arrayPrecios.length; i++){
        suma += arrayPrecios[i];
    }
    let sumaTotal = document.getElementById("precioTotal-txt").innerHTML = `Precio total: ${suma}€`;
    return sumaTotal;
}

//NOTA PARA EL PROFESOR: Para que este código funcione correctamente es necesario que después de calcular el precio total del carrito,
//si se quiere añadir una nueva prenda de ropa al carrito, primero hay que refrescar la página y volver a añadir las que en un principio
//ya seleccionaste anteriormente. No encuentro la forma de hacerlo realmente bien.

//NO SOY CAPAZ DE ESCRIBIR ESTE CÓDIGO DE FORMA COMPATIBLE CON JQUERY, HE INTENTADO TODO LO QUE SE ME HA OCURRIDO, INCLUÍDO ChatGPT,
//Y NI SIQUIERA HA FUNCIONADO. NO VOY A PERDER MÁS TIEMPO CON ESTE RETO PORQUE ME PILLARÁ EL TREN CON ANGULAR Y EL RETO FINAL DE MAQUETACIÓN.