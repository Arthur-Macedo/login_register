import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
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

export default function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Registro:", { nome, email, senha });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        
        <InputField>
          <Input
            type="text"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          
          <SearchIcon>
            <FaUser />
          </SearchIcon>
         </InputField>

        <InputField>
          <Input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SearchIcon>
            <FaEnvelope />
          </SearchIcon>
        </InputField>

        <InputField>
          <Input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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
        <SubmitButton type="submit">Cadastrar</SubmitButton>
        <SignupLink>
          <SignupLinkText>
            Já tem uma conta? <Link to="/">Faça login</Link>
          </SignupLinkText>
        </SignupLink>
      </form>
    </Container>
  );
};

