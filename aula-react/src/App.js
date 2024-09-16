import './App.css';
import Pessoa from './components/Pessoa';
import Condicional from './components/Condicional';


function App() {

  const url = 'best.jpg'
  const urlPessoa = 'Clyse.jfif'
  
  return (
    <div className="App">
      <h1>Css</h1>
      <img src={url} alt="minha imag" width="200" />
      <Pessoa foto={urlPessoa} nome="Caio" idade={15} profissao='Dev' />

      <h1>Rederização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
