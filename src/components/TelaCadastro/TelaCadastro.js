import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";

function TelaCadastro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  // const cadastrar = () => {
  //   // fluxo de cadastro (ainda veremos)
  //   props.mudarTela("TelaPrincipal");
  // };

  // const mostrarTelaLogin = () => {
  //   props.mudarTela("TelaLogin");
  // };

  const imprimirNome = (e) => {
    setNome(e.target.value);
  };

  const imprimirEmail = (e) => {
    setEmail(e.target.value);
  };

  const imprimirSenha = (e) => {
    setSenha(e.target.value);
  };

  const imprimirConfirmaSenha = (e) => {
    setConfirmaSenha(e.target.value);
  };

  // Imprimir os dados preenchidos nos inputs em um único objeto:
  const dadosDoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    confirmaSenha: confirmaSenha,
  };

  console.log(dadosDoUsuario);

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="name"> Nome: </StyledLabel>
        <Input id="name" value={nome} onChange={imprimirNome} />

        <StyledLabel htmlFor="email"> E-mail </StyledLabel>
        <Input id="email" value={email} onChange={imprimirEmail} />

        <StyledLabel htmlFor="password"> Senha: </StyledLabel>
        <Input
          id="password"
          type={"password"}
          value={senha}
          onChange={imprimirSenha}
        />

        <StyledLabel htmlFor="password-confirm">
          {" "}
          Confirmação da senha:{" "}
        </StyledLabel>
        <Input
          id="password-confirm"
          type={"password"}
          value={confirmaSenha}
          onChange={imprimirConfirmaSenha}
        />

        <SendButton
          onClick={() => {
            props.mudarTela("TelaCadastroEnderecos");
          }}
        >
          Cadastrar
        </SendButton>

        <BackToLoginButton
          onClick={() => {
            props.mudarTela("TelaPrincipal");
          }}
        >
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;