import "./App.css";

function App() {
  let ativado = false;

  function handleClick() {
    ativado = !ativado;
    console.log(ativado);
  }

  return (
    <div className="App">
      <button onClick={handleClick} className="ativado">
        {ativado ? "ativado" : "desativado"}
      </button>
    </div>
  );
}

export default App;
