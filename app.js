let amigos = [];

function agregarAmigo(){
    let nombreIngresado = document.getElementById('amigo').value;
    if (nombreIngresado==''){
        alert('Por favor, inserte un nombre');
    } else{
        amigos.push(nombreIngresado);
        AsignarTextoElemento('#listaAmigos', amigos);
        limpiarCaja();
    }
}


function limpiarCaja(){
    let valorCaja=document.querySelector('#amigo');
    valorCaja.value='';
}

function AsignarTextoElemento(elemento, arreglo){
    let lista = document.querySelector(elemento);
    lista.innerHTML = "";
    for (let i = 0; i < arreglo.length; i++){
        lista.innerHTML+='<li>'+arreglo[i]+'</li>';
    }
}

function sortearAmigo() {
    if (amigos.length == 0){
        alert("No se ha ingresado ningún nombre");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}