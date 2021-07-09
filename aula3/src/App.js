// import "./App.css";

// function App() {
//   let ativado = true;

//   function handleClick() {
//     ativado = !ativado;
//     console.log(ativado);
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick} className="ativado">
//         {ativado ? "ativado" : "desativado"}
//       </button>
//     </div>
//   );
// }

// export default App;

//Hooks

// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [valor, setValor] = useState(true);
//   const [idade, setIdade] = useState(26);
//   const [login, setLogin] = useState({
//     email: "abner.borda@gmail.com",
//     senha: "102030",
//   });
//   const [aula, setAula] = useState("JS");

//   function handleClick() {
//     valor
//       ? setLogin({ ...login, faculdade: "Nao Tem", senha: "102030" })
//       : setLogin({ ...login, faculdade: "Até tem", senha: "" });
//     setValor(!valor);
//   }

//   return (
//     <div className="App">
//       <p>Mostra valor{valor} </p>
//       <p>{idade}</p>
//       <p>{login.email}</p>
//       <p>{login.senha}</p>
//       <p>{login.faculdade}</p>
//       <p>{aula}</p>
//       <button
//         onClick={handleClick}
//         className={valor ? "ativado" : "desativado"}
//       >
//         {valor ? "ativado" : "desativado"}
//       </button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [listaFilmes, setListaFilmes] = useState([]);
  const [details, setDetails] = useState({});

  function handleClick() {
    fetch("https://60e7662115387c00173e4aeb.mockapi.io/mostraDados", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((listaFilmes) => {
        console.log(listaFilmes);
        setListaFilmes(listaFilmes);
      });
  }

  function handleDetails(id) {
    fetch(`https://60e7662115387c00173e4aeb.mockapi.io/mostraDados/${id}`, {
      method: "GET",
    }).then((response) =>
      response.json().then((detalhes) => {
        console.log(detalhes);
        setDetails(detalhes);
      })
    );
  }

  return (
    <div className="App">
      {listaFilmes.map((filme, index) => {
        return (
          <div key={index}>
            <h5>
              {filme.name} {filme.lastName}
            </h5>
            <img src={filme.avatar} alt={filme.name} />
            <button onClick={() => handleDetails(filme.id)}>
              Buscar Detalhes
            </button>
          </div>
        );
      })}
      <button onClick={() => handleClick()}>Carrega Dados</button>
    </div>
  );
}

export default App;
