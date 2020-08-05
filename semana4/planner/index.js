const criarTarefa = () => {
  let inputTarefa = document.getElementById('tarefa');
  let tarefa = inputTarefa.value;
  let diaSemana = document.querySelector('#dias-semana').value;
  switch (diaSemana) {
    case 'domingo':
      document.getElementById('domingo').innerHTML += `<li>${tarefa}</li>`;
      break;
    case 'segunda':
      document.getElementById('segunda').innerHTML += `<li>${tarefa}</li>`;
      break;
    case 'terca':
      document.getElementById('terca').innerHTML += `<li>${tarefa}</li>`;
      break;
    case 'quarta':
      document.getElementById('quarta').innerHTML += `<li>${tarefa}</li>`;
      break;
    case 'quinta':
      document.getElementById('quinta').innerHTML += `<li>${tarefa}</li>`;
      break;
    case 'sexta':
      document.getElementById('sexta').innerHTML += `<li>${tarefa}</li>`;
      break;
    default:
      document.getElementById('sabado').innerHTML += `<li>${tarefa}</li>`;
      break;
  };
  if (inputTarefa.value === '') {
    tarefa = '';
    alert ('Preencha o campo de tarefa!');
  };
  inputTarefa.value = '';
};



