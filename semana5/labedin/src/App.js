import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemAlice from './img/alice.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemAlice}
          nome="Alice Souza" 
          descricao="Olá, eu sou a Alice. Estudante de desenvolvimento web Full-stack na Labenu, desde 2020."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagemDado="https://png.pngtree.com/png-clipart/20190516/original/pngtree-email--envelope-icon-png-image_3566081.jpg"
          tituloDado="Email:"
          dado=" alicesouza123@hotmail.com.br"
        />
        <CardPequeno
          imagemDado="data:image/png;base64,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"
          tituloDado="Endereço:"
          dado=" Rua das Flores, 988"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img.freepik.com/psd-gratuitas/alexa-logotipo-photoshop-tutorial_30-678.jpg?size=626&ext=jpg" 
          nome="Design Gráfico - freelancer" 
          descricao="Fazendo banners, layouts, cartões de visitas, etc..." 
        />
        
        <CardGrande 
          imagem="https://png.pngtree.com/png-clipart/20190630/original/pngtree-lotus-spa-logo-design-png-image_4154989.jpg" 
          nome="Recepção - Delight Spa" 
          descricao="Atendendo e prestando assistência ao cliente." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
