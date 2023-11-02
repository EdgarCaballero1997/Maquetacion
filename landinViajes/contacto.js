//Creamos un array fuera de la función para que acumule la información
//de los clientes
let informacionArray = [];
//Creamos la función para recolectar la información y que la guarde en
//el array.
//NOTA PARA EL PROFESOR: Por alguna razón que desconozco no me deja hacer
//una función arrow. Es una lástima porque me parecen muy estéticas.
function guardarInformacion() {
    let nombre = document.getElementById('input-formulario1').value;
    let origen = document.getElementById('input-formulario2').value;
    let destino = document.getElementById('input-formulario3').value;
    let nPersonas = document.getElementById('input-formulario4').value;
    let fechas = document.getElementById('input-formulario5').value;
//Creamos una condición para verificar si se han proporcionado los datos
//del cliente.
    if (nombre && origen && destino && nPersonas && fechas) {
//Aplicamos el método "toLowerCase" para que los prompts no sean sensibles
//a las mayusculas.
        let destinoMinusc = destino.toLowerCase();
//Creamos un objeto literal con la información facilitada por el cliente.
        let infoObject = {
            nombre: nombre,
            origen: origen,
            destino: destinoMinusc,
            nPersonas: nPersonas,
            fechas: fechas
        };
//Pusheamos el objeto al array
        informacionArray.push(infoObject);
//Limpiamos las entradas de los prompts
        document.getElementById('input-formulario1').value = '';
        document.getElementById('input-formulario2').value = '';
        document.getElementById('input-formulario3').value = '';
        document.getElementById('input-formulario4').value = '';
        document.getElementById('input-formulario5').value = '';
//Comprobamos por consola qué información se está ejecutando en nuestro código.
//Este console.log() se puede quitar en producción.
        console.log('Información guardada:', infoObject);
    }
}
//Con este fragmento de código permitimos que la función se active cada vez que
//el cliente pincha en el botón.
let botonSolicitarInfo = document.getElementById('boton-formulario');
botonSolicitarInfo.addEventListener('click', guardarInformacion);
//Creamos la segunda función para filtrar y mostrar las solicitudes con destino
//en Canarias, Mallorca o Galicia.
function filtrarSolicitudes() {
    let destinosPermitidos = ['canarias', 'mallorca', 'galicia'];
    let solicitudesFiltradas = informacionArray.filter(infoObject => {
        return destinosPermitidos.includes(infoObject.destino);
    });
//Mostramos las solicitudes filtradas en la consola para verificar que nuestras
//funciones se ejecutan correctamente.
    console.log('Solicitudes con destino en Canarias, Mallorca o Galicia:');
    solicitudesFiltradas.forEach(info => {
        console.log('Nombre:', info.nombre);
        console.log('Origen:', info.origen);
        console.log('Destino:', info.destino);
        console.log('Nº de personas:', info.nPersonas);
        console.log('Fechas:', info.fechas);
        console.log('---');
    });
}
//Con este código cada vez que el cliente haga click sobre elotón "filtrar
//busqueda" la función de filtrado se ejecuta.
let botonFiltrado = document.getElementById('boton-filtrado');
botonFiltrado.addEventListener('click', filtrarSolicitudes);