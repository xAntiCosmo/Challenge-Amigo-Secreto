// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let numerosGenerados = [];
const listaDeAmigos = document.querySelector("#listaAmigos");
listaDeAmigos.innerHTML = "";

function agregarAmigo(){
    if(document.querySelector("#amigo").value == ""){
        alert("Por favor, ingresa un nombre válido.");
    }
    else{
        listaAmigos.push(document.querySelector("#amigo").value);
        
        //Para agregar el nombre a una lista
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = document.querySelector("#amigo").value;
        listaDeAmigos.appendChild(nuevoElemento);
        console.log(listaAmigos);

        document.querySelector("#amigo").value = "";
    }
}

function sortearAmigo(){
    let numeroAleatorio = generarNumeroSecreto();
    if(numeroAleatorio != -1){
        let amigoSorteado = listaAmigos[numeroAleatorio];
        listaDeAmigos.innerHTML = "";
        document.querySelector("#resultado").innerHTML = `El amigo sorteado es ${amigoSorteado}`;
    }
}

function generarNumeroSecreto(){
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);

    console.log(numeroAleatorio);

    if(numerosGenerados.length == listaAmigos.length){
        document.querySelector("#resultado").innerHTML = "No hay más amigos que sortear!";
        alert("Ya se han sorteado todos los nombres existentes!");
        return -1;
    }
    else{
        if(numerosGenerados.includes(numeroAleatorio)){
            return generarNumeroSecreto();
        }
        else{
            numerosGenerados.push(numeroAleatorio);
            console.log(numerosGenerados);
            return numeroAleatorio;
        }
    }
}