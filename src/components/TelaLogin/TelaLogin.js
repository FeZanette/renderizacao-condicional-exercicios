import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from "./styled";

function TelaLogin(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    // fluxo de login (ainda veremos)

    props.mudarTela("TelaPrincipal");
  };

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro");
  };

  const imprimirEmail = (e) => {
    setEmail(e.target.value);
  };

  const imprimirSenha = (e) => {
    setSenha(e.target.value);
  };

  // Imprimir os dados preenchidos nos inputs em um único objeto:
  const dadosDoUsuario = {
    email: email,
    senha: senha,
  };

  console.log(dadosDoUsuario);

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input htmlFor="email" value={email} onChange={imprimirEmail} />

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input
          id="password"
          type={"password"}
          value={senha}
          onChange={imprimirSenha}
        />

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;