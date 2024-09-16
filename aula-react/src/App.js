import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = 'Caio'

  const url = 'best.jpg'
  const urlPessoa = 'Clyse.jfif'

  const nameProps = 'Joaqui'
  
  return (
    <div className="App">
      <h1>Css</h1>
      <p>Meu nome é {name}</p>
      <img src={url} alt="minha imag" width="200" />

      <HelloWord />
      <SayMyName nome="Caio" />
      <Pessoa foto={urlPessoa} nome="Caio" idade={15} profissao='Dev' />
      <List />

      <h1>Testando Evento</h1>

      <Evento numero={1}/>
      <Evento numero={2}/>
      <Form />
    </div>
  );
}

export default App;
