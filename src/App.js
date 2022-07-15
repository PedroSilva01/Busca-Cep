import { useState } from 'react';
import { FiSearch }  from 'react-icons/fi';
import './style.css';
import api from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    //fazendo uma requisição http
    
    if (input === ''){
      alert('Preencha o campo corretamente')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('') 
    }catch{
      alert('Ops.. erro ao buscar')
      setInput('') //volta o  valor do useState pra vazio
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
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}><FiSearch size={25} color="#FFF"/></button>
      </div>
      {/*a partir da linha de baixo ele ta fazendo uma renderização condicional, só vai aparecer o campo de resposta se o cep for maior que 0, por isso utilizou o "&&" pois se aquilo for verdadeiro, vai renderizar o que tiver dentro dos parenteses a seguir */}
      {Object.keys(cep).length > 0 && (
        <main className='main'> 
          <h2>CEP: {cep.cep}</h2>
          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Localidade: {cep.localidade} - {cep.uf}</span>
        </main>
      )}      

    </div>


  );
}

export default App;
