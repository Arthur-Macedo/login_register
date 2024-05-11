import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  InputField,
  SearchIcon,
  Input,
  RecallForget,
  SubmitButton,
  SignupLink,
  Label,
  SignupLinkText,
} from "./Styles";

const Login = () => {
    // Estados para armazenar as entradas do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

   // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    
    // Impede que a página seja recarregada
     event.preventDefault();

     // Faz o console log das credenciais do usuário
    console.log("Dados de Login:", { username, password });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Delfos &#128261;</Title>
        
        <InputField>
          <Input
        type="text"
        placeholder="Email"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <SearchIcon>
           <FaUser />
        </SearchIcon>
        </InputField>

        <InputField>
         <Input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
       
        <SearchIcon>
          <FaLock />
        </SearchIcon>
        </InputField>

        <RecallForget>
          <Label>
            <input type="checkbox" />
            Lembre de mim
          </Label>
          <a href="#">Esqueceu sua senha?</a>
        </RecallForget>
        <SubmitButton type="submit">Entrar</SubmitButton>
        <SignupLink>
          <SignupLinkText>
            Ainda não tem uma conta?{" "}
            <Link to="/registro">Cadastra-se</Link>
          </SignupLinkText>
        </SignupLink>
      </form>
    </Container>
  );
};

export default Login;



