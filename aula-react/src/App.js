import './App.css';
import Pessoa from './components/Pessoa';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saldacao from './components/Saldacao';


function App() {

  const url = 'best.jpg'
  const urlPessoa = 'Clyse.jfif'

  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>Css</h1>
      <img src={url} alt="minha imag" width="200" />
      <Pessoa foto={urlPessoa} nome="Caio" idade={15} profissao='Dev' />

      <h1>State Lift</h1>
      <SeuNome setNome={setName} />
      <Saldacao nome={name}/>
    </div>
  );
}

export default App;
