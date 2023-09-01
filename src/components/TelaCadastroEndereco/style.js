import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;

  h1 {
    margin: 32px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  grid-column: 1/3;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const SendButton = styled.button`
  background-color: #ff9421;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
  font-weight: bold;
  align-self: center;
`;

export const BackToLoginButton = styled.button`
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 300px;
  padding: 10px;
  :hover {
    background-color: black;
    color: white;
  }
  align-self: center;
  margin-top: 15px;
`;

export const StyledLabel = styled.label`
  margin-top: 15px;
  color: gray;
`;
