import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="card">
          <input/>
          <input/>
          <span className="btn" onClick={()=>{
            alert('Realizou o login')
          }}>
            Entrar
          </span>
          <h6>Esqueci minha senha</h6>

        </div>
      </header> 
    </div>
  );
}

export default App;
