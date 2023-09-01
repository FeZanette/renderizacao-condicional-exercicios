import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import TelaCadastroEnderecos from "./components/TelaCadastroEndereco/TelaCadastroEndereco";


const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [telaAtual, setTelaAtual] = useState("TelaLogin");

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela);
  };

  // const renderizaTela = () => {
  //   switch (telaAtual) {
  //     case "TelaLogin":
  //       return <TelaLogin mudarTela={mudarTela} />;

  //     case "TelaCadastro":
  //       return <TelaCadastro mudarTela={mudarTela} />;

  //     case "TelaPrincipal":
  //       return <TelaPrincipal mudarTela={mudarTela} />

  //     default:
  //       return <p>Tela inválida</p>
  //   }
  // }

  return (
    <MainContainer>
      <GlobalStyled />

      {telaAtual === "TelaLogin" && <TelaLogin mudarTela={mudarTela} />}
      {telaAtual === "TelaCadastro" && <TelaCadastro mudarTela={mudarTela} />}
      {telaAtual === "TelaPrincipal" && <TelaPrincipal mudarTela={mudarTela} />}
      {telaAtual === "TelaCadastroEnderecos" && (
        <TelaCadastroEnderecos mudarTela={mudarTela} />
      )}

      {/* {renderizaTela()} */}
    </MainContainer>
  );
}

export default App;