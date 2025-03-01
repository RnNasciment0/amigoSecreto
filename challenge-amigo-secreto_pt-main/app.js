//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  
  if (nome) {
    listaDeAmigos.push(nome);
    atualizarListaDeAmigos();
    input.value = '';
  }
}

function atualizarListaDeAmigos() {
  const listaAmigosElement = document.getElementById('listaAmigos');
  listaAmigosElement.innerHTML = '';

  listaDeAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear.');
    return;
  }

  const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
  
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}