const casas = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  };
  
  let currentQuestion = 1;
  
  function responder(casa) {
    casas[casa]++;
    if (currentQuestion < 4) {
      document.getElementById(`question${currentQuestion}`).classList.add('hidden');
      currentQuestion++;
      document.getElementById(`question${currentQuestion}`).classList.remove('hidden');
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
  
    const casaSelecionada = Object.keys(casas).reduce((a, b) => casas[a] > casas[b] ? a : b);
    const casaElement = document.getElementById('casa');
    casaElement.textContent = casaSelecionada;
    casaElement.classList.add(casaSelecionada);
  }
  
  // Botão "Voltar para Home"
  document.getElementById('voltarHome').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redireciona para a página de Home
  });