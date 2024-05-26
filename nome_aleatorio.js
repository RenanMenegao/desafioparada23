function nomeAleatorio() {
    let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo", "Helena", "Isabela", "João"];
    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeAleatorio = nomes[indiceAleatorio];
    return nomeAleatorio;
}

function mostrarNomeAleatorio() {
    let nomeAleatorioParagrafo = document.getElementById("nomeAleatorio");
    nomeAleatorioParagrafo.textContent = nomeAleatorio();
}