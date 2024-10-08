import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loginCompanies from "../assets/login-companies.svg";

const LoginContainer = styled.div`
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 20px 0;

  @media (min-width: 768px) {
    padding: 50px;
    max-width: 450px;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  transition: 0.3s ease;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid var(--color-pink);
    box-shadow: 0 0 5px rgba(251, 46, 134, 0.5);
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: var(--color-pink);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  margin: 20px 0;
  transition: 0.3s ease;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const FormText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  text-align: center;

  & > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

const CompaniesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  max-width: 900px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormText>
          <h2>Login</h2>
          <p className="light-text">Please login using account detail below.</p>
        </FormText>
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Link to="/forgot-password" className="light-text">
          Forgot your password?
        </Link>
        <Button type="submit">Sign In</Button>

        <p className="light-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </LoginForm>

      <CompaniesList>
        <img src={loginCompanies} alt="companies list" />
      </CompaniesList>
    </LoginContainer>
  );
};

export default Login;
