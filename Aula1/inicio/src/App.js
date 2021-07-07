import "./app.css";
import Header from "./components/Header";
import Button from "./components/Button";

const links = [
  {
    id: "1",
    label: "Inicio",
  },
  {
    id: "2",
    label: "Meio",
  },
  {
    id: "3",
    label: "Fim",
  },
  {
    id: "4",
    label: "voltei",
  },
];

function App() {
  return (
    <div className="container">
      <Header
        logo="https://i.pinimg.com/originals/1e/06/e1/1e06e107f0ca520aed316957b685ef5c.jpg"
        listaLink={links}
        imageText="Teste"
      />
      <Button label="3" cor="azul" />
      <Button label="2" cor="vermelho" />
      <Button label="1" cor="azul" />
    </div>
  );
}

export default App;
