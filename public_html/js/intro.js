
/**
 * Abre uma popup com a mensagem "Olá mundo!" em espanhol
 * 
 * @returns void
 */
function emEspanhol() {
    alert("¡Hola Mundo!");
}

// Exibe o DOM do documento no console do navegador
console.log(document);
//Busca um elemento no DOM a partir de um seletor
console.log(document.querySelector("button"));
console.log(document.querySelector("button").textContent); // Imprime o conteúdo da tag
console.log(document.querySelector("button:nth-child(5)")); // Seletor com pseudo-seletor
var btn = document.querySelector("button:nth-child(4)"); // Armazenando referência para uma tag em uma variável
console.log(btn.textContent); // Imprime conteúdo a partir da variável

/**
 * Muda o conteúdo de uma tag
 * 
 * @returns void
 */
function cumprimentar() {
    var nome = document.querySelector("#nome");
    var p = document.querySelector("#cumprimento");
    p.textContent = "Olá " + nome.value;
}

/**
 * Recebe o valor de uma cor por parâmetro e muda o background-color de uma tag 
 * 
 * @param {valor de uma cor} cor
 * @returns void
 */
function changeColor(cor) {
    document.querySelector("#changeColor").style.backgroundColor = cor;
}

/**
 * Recebe um elemento input checkbox por parâmetro,
 * verifica se está marcado,
 * e altera o atributo src de uma tag img
 * 
 * @param {input chechbox} ligada
 * @returns void
 */
function ligar(ligada) {
    var img = document.querySelector("#lampada");
    //console.log(ligada);
    if (ligada.checked) {
        img.src = "img/ligada.png";
        return;
    }
    img.src = "img/desligada.png";
}

/**
 * Altera a classe de um elemento
 * 
 * Recebe true quando for para mostrar a imagem,
 * e false quando for para esconder a imagem
 * 
 * @param {bool} mostrar
 * @returns void
 */
function show(mostrar) {
    var img = document.querySelector("#item");
    if (mostrar) {
        img.classList.remove("hide");
        return;
    }
    img.classList.add("hide");
}