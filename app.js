// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
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

        document.querySelector("#amigo").value = "";
    }
}

function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];
    listaDeAmigos.innerHTML = "";
    document.querySelector("#resultado").innerHTML = `El amigo sorteado es ${amigoSorteado}`;
}