import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./style";

function TelaCadastroEndereco (props) {
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemeto, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    props.mudarTela("TelaPrincipal");
  };

  // const mostrarTelaLogin = () => {
  //   props.mudarTela("TelaLogin");
  // };
  const imprimirEndereco = (e) => {
    setEndereco(e.target.value);
  };

  const imprimirNumero = (e) => {
    setNumero(e.target.value);
  };

  const imprimirComplemento = (e) => {
    setComplemento(e.target.value);
  };

  const imprimirTelefone = (e) => {
    setTelefone(e.target.value);
  };

  // Imprimir os dados preenchidos nos inputs em um único objeto:
  const dadosDoUsuario = {
    endereco: endereco,
    numero: numero,
    complemeto: complemeto,
    telefone: telefone,
  };

  console.log(dadosDoUsuario);

  return (
    <FormContainer>
      <h1>Cadastro endereço </h1>

      <Form>
        <StyledLabel htmlFor="endereco"> Endereço: </StyledLabel>
        <Input id="endereco" value={endereco} onChange={imprimirEndereco} />

        <StyledLabel htmlFor="numero"> Número da residência </StyledLabel>
        <Input id="numero" value={numero} onChange={imprimirNumero} />

        <StyledLabel htmlFor="complemeto"> Complemento: </StyledLabel>
        <Input
          id="complemeto"
          value={complemeto}
          onChange={imprimirComplemento}
        />

        <StyledLabel htmlFor="telefone"> Telefone: </StyledLabel>
        <Input id="telefone" value={telefone} onChange={imprimirTelefone} />

        <SendButton onClick={cadastrar}>Confirmar</SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco