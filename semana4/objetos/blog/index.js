const criarPost = () => {
  // Pegando cada elemento:
  let tituloPost = document.getElementById('titulo-post');
  let autorPost = document.getElementById('autor-post');
  let conteudoPost = document.getElementById('conteudo-post');
  // Armazenando seu valor em um objeto:
  const post = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value
  };
  // Atribuindo seus valores para a seção do post:
  let containerPost = document.getElementById('container-de-posts');
  containerPost.innerHTML += `<h1>${post.titulo}</h1> <pre>${post.conteudo}</pre> <h3>${post.autor}</h3>`;
  // Limpando o formulário:
  const arrayPost = [tituloPost, autorPost, conteudoPost];
  arrayPost[0].value = '';
  arrayPost[1].value = '';
  arrayPost[2].value = '';
};



