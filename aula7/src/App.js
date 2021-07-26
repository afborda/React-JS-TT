import NameContext from "./Context/NameContext";
import GlobalStyle from "./globalStyles";
import Routes from "./routes/route";

function App() {
  return (
    <>
      <NameContext>
        <GlobalStyle />
        <Routes />
      </NameContext>
    </>
  );
}

export default App;
