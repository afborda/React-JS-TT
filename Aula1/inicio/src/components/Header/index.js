import "./style.css";

const Header = ({ listaLink, logo, imageText }) => {
  console.log("Listando props de Header", listaLink);

  return (
    <div className="container-header">
      <div>
        <img src={logo} alt={imageText} />
      </div>
      <ul className="estilo-tabela">
        {listaLink.map(({ label, id }) => {
          return <li key={id}>{label}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
