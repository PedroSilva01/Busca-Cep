import { useState } from 'react';
import { FiSearch }  from 'react-icons/fi';
import './style.css';

function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    //fazendo uma requisição http
    
    if (input === ''){
      alert('Preencha o campo corretamente')
      return;
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>
      <div className='containerInput'>
        <input 
          placeholder="Digite o seu cep"
          type="text"
          value={input}
        />
        <button className="buttonSearch" onClick={handleSearch}><FiSearch size={25} color="#FFF"/></button>
      </div>      
      <main className='main'>
        <h2>CEP: 873487643</h2>
        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Localidade: </span>
      </main>
    </div>


  );
}

export default App;
