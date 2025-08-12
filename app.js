let listaAmigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    if (inputAmigo.value == ""){
        alert ("Por favor, insira um nome.")
    }else{
        listaAmigos.push(inputAmigo.value);
    }
    limparCampo();
    atualizarLista();
}

function limparCampo() {
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.value = "";
}

function atualizarLista(){
   let lista = document.getElementById("listaAmigos");
   lista.innerHTML = "";
   for (let i = 0; i < listaAmigos.length; i++) {
    let li = document.createElement("li"); /* criando elemento li onde ficará o nome do input*/
    li.textContent = listaAmigos[i]; /* adicionando na lista (li) o nome que está no array(posição i)*/
    lista.appendChild(li); /*colocando esse item no ul*/
}

}

function sorteioAmigo() {
    if (listaAmigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    } /*validando se na lista existem nomes*/

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    // Gerei com math random um índice aleatório entre 0 e 1 e depois multipliquei por listaAmigos.length para adequar o resultado ao número de nome do array  (lembrando que esse numero será o length -1) Por  fim, math floor pra arredondar pra baixo e tornar o resultado inteiro*/

    let amigoSorteado = listaAmigos[indiceAleatorio]; /* o numero sorteado se torna o índice e aponta o nome sorteado*/

    // Atualiza o elemento HTML com o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`; 
}
