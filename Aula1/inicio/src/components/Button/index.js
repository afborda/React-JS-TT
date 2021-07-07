import "./style.css";

const Button = (props) => {
  return (
    <div className="container-botao">
      <button
        className={
          props.cor === "azul" ? "botao-custom-azul" : "botao-custom-vermelho"
        }
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
