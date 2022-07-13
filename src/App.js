import { FiSearch }  from 'react-icons/fi'
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de Cep</h1>
      <div className='containerInput'>
        <input 
          placeholder="Digite o seu cep"
          type="text"
        />
        <button className="buttonSearch"><FiSearch size={25} color="#FFF"/></button>
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
