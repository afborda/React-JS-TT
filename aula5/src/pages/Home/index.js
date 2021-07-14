import React, { useState } from "react";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };

    console.log("valor:>>", data);
  };

  const handleSubmitTeste = (valor) => {
    console.log("Valor calculo: ", valor);
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" id="nome" value={name} setValue={setName} />
        <Input
          label="E-mail"
          id="email"
          value={email}
          setValue={setEmail}
          required
        />
        <Input
          label="Senha"
          id="password"
          value={password}
          setValue={setPassword}
        />
        <Button size="md" onClick={() => handleSubmitTeste(3 * 3)}>
          mudou?
        </Button>
        <Button onClick={() => handleSubmitTeste(3 * 9)}>
          mudouasdbhdjfsdgbvasd?
        </Button>
      </form>
    </div>
  );
}

export default Home;
