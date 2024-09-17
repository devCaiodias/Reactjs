import './App.css';
import Pessoa from './components/Pessoa';
import Footer from './layout/Footer';


function App() {

  const url = 'best.jpg'
  const urlPessoa = 'Clyse.jfif'

  return (
    <div className="App">
      <h1>Css</h1>
      <img src={url} alt="minha imag" width="200" />
      <Pessoa foto={urlPessoa} nome="Caio" idade={15} profissao='Dev' />
      <Footer />
    </div>

  );
}

export default App;
