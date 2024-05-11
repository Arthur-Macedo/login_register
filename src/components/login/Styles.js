import styled from 'styled-components';
import { FaUser, FaLock } from "react-icons/fa";

export const Container = styled.div`
  position: relative;
  width: 420px;
  background-color: transparent;
  border: 2px solid rgba(255,255, 255, .1);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 10px;
  padding: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
`;

export const InputField = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 25px;

  &::placeholder {
      color: white ;
    }
`;

export const SearchIcon = styled(FaUser, FaLock)`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
`;

export const Label = styled.label`
  accent-color: lightseagreen;
  color: white;
  margin-right: 4px;
`;

export const RecallForget = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
  color: white;
  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 700;
  text-shadow: none;

  &:hover {
      color: lightseagreen;
    }
`;

export const SignupLink = styled.div`
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
  color: white;
`;

export const SignupLinkText = styled.p`
  color: white;
  font-weight: 600;
  margin: 0;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

