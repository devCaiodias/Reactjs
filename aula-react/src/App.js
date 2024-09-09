import './App.css';

function App() {
  const name = 'Caio'
  
  const newName = name.toUpperCase()

  function Soma(a, b) {
    return a + b
  }

  const url = 'best.jpg'
  
  return (
    <div className="App">
      <h2>Alteraando o JSX</h2>
      <p>Meu nome é {newName}</p>
      <p>Soma: {Soma(5, 5)}</p>
      <img src={url} alt="minha imag" width="200" />
    </div>
  );
}

export default App;
