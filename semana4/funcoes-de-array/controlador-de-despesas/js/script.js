const cadastrarDespesa = () => {
  // Pegando cada input da seção cadastro:
  let valor = document.getElementById('valor');
  let tipo = document.getElementById('tipo');
  let descricao = document.getElementById('descricao');
  // Validação:
  if (valor.value !== '' && tipo.value !== '' && descricao.value !== '') {
    // Pegando os valores dos inputs da seção cadastro num objeto:
    const objInputsCadastro = {
      valorDespesa: valor.value,
      tipoDespesa: tipo.value,
      descricaoDespesa: descricao.value
    };
    // Atribuindo os valores cadastrados em suas listas:
    let listaDespesa = document.querySelector('.lista-despesa');
    let listaExtrato = document.querySelector('.lista-extrato');
    listaDespesa.innerHTML +=
    `<h3>${objInputsCadastro.tipoDespesa}</h3> <p>${objInputsCadastro.
    descricaoDespesa}</p> <h5>Valor: R$ ${objInputsCadastro.valorDespesa}</h5>`;
    listaExtrato.innerHTML +=
    `<h4>${objInputsCadastro.tipoDespesa} --- R$ ${objInputsCadastro.valorDespesa}</h4>`;
  } else {
    alert ('Preencha todos os campos!');
  };
  // Limpando o form após cadastro:
  valor.value = '';
  tipo.value = '';
  descricao.value = '';
};

