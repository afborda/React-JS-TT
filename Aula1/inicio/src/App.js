import "./app.css";

function App() {
  return (
    <div>
      <p>Abner Fonseca</p>
      <MainNav />
      <Button label="Clica aqui 2" type={false} />
    </div>
  );
}

const Button = ({ label, type }) => {
  return <button className={type ? "active" : "inativo"}>{label}</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href>Link 1</a>
      <Button label="Login" type={false} />
    </nav>
  );
};

export default App;
