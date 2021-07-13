// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [contar, setContar] = useState(0);
//   const [data, setData] = useState(false);

//   useEffect(() => {
//     console.log("Executando sempre!! ");
//   });

//   useEffect(() => {
//     console.log("Executa no iniciar!!!!!!!!!!!! ");
//   }, []);

//   useEffect(() => {
//     console.log("Executa no iniciar!!!!!!!!!!!!", data);
//     setContar(contar + 1);
//   }, [data]);

//   return (
//     <div className="App">
//       <h1>UseEffect</h1>
//       {data && <p>teste</p>}
//       <button onClick={() => setContar(contar + 1)}>{contar}</button>
//       <button onClick={() => setData(!data)}>Ativar</button>
//     </div>
//   );
// }

// export default App;

//###################################Inputs

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(event);
//     const data = {
//       primeiroNome: name,
//       emailPrin: email,
//       senhaTeste: password,
//     };
//     window.localStorage.setItem("dados", JSON.stringify(name));
//     console.log("dados para enviar", data);
//   }

//   return (
//     <div className="App">
//       <h1>Input</h1>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column" }}
//       >
//         <label htmlFor="name">Nome</label>
//         <input
//           id="name"
//           type="text"
//           name="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <label htmlFor="email">E-mail</label>
//         <input
//           id="email"
//           placeholder="email"
//           type="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <label htmlFor="senha">Senha</label>
//         <input
//           id="senha"
//           type="password"
//           name="senha"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         {name}

//         <button>Enviar Cadastro </button>
//       </form>
//     </div>
//   );
// }

// export default App;

//################################ Inputs Complexos

import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    window.localStorage.setItem("dados", JSON.stringify(form));
    console.log("dados para enviar", form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className="App">
      <h1>Input</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          placeholder="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha</label>
        <input
          id="password"
          type="password"
          name="senha"
          value={form.password}
          onChange={handleChange}
        />

        <button>Enviar Cadastro </button>
      </form>
    </div>
  );
}

export default App;
