let listaAmigos = [];
let numerosGenerados = []; //Arreglo para sortear amigos diferentes
const listaDeAmigos = document.querySelector("#listaAmigos"); //Selección de referencia para insertar los nombres en una lista
listaDeAmigos.innerHTML = ""; //Para limpiar el campo de la lista

function agregarAmigo(){
    //Si la caja de texto está vacía
    if(document.querySelector("#amigo").value == ""){
        alert("Por favor, ingresa un nombre válido.");
    }
    //Si el nombre ya existe en el arreglo
    else if(listaAmigos.includes(document.querySelector("#amigo").value)){
        alert("Este nombre ya ha sido ingresado.");
    }
    else{
        //Para agregar el nombre al arreglo
        listaAmigos.push(document.querySelector("#amigo").value);
        
        //Para agregar el nombre a una lista
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = document.querySelector("#amigo").value;
        listaDeAmigos.appendChild(nuevoElemento);
        console.log(listaAmigos);

        //Para limpiar la caja de texto
        document.querySelector("#amigo").value = "";
    }
}

//Sortea un amigo aleatorio que no haya sido sorteado antes
function sortearAmigo(){
    let numeroAleatorio = generarNumeroSecreto();
    if(numeroAleatorio != -1){
        let amigoSorteado = listaAmigos[numeroAleatorio];
        listaDeAmigos.innerHTML = "";
        document.querySelector("#resultado").innerHTML = `El amigo sorteado es ${amigoSorteado}`;
    }
}

//Genera un número aleatorio, pero si ya fue sorteado, genera otro diferente
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