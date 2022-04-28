import React, { useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { BackNavigation } from "./../components/BackNavigation/BackNavigation";
import BoxWrapper, {
  BoxWrapperFooter,
  BoxWrapperTitle,
} from "./../components/BoxWrapper/BoxWrapper";
import Input from "./../components/Input/Input";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <BackNavigation />
      <BoxWrapper>
        <BoxWrapperTitle>Login</BoxWrapperTitle>
        <Input placeholder="Username or Email Address" />
        <Input placeholder="Password" password />
        <RememberMe>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember password</label>
        </RememberMe>
        <ButtonLogin to="/start-selling">Login</ButtonLogin>
        <ButtonLoginSecondary to="/start-selling">
          Login using phone number
        </ButtonLoginSecondary>
        <BoxWrapperFooter>
          Dont't have account?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>Sign Up</span>
          </Link>
        </BoxWrapperFooter>
      </BoxWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  background: #fef8b0;
  padding: 0 20px;
  padding-bottom: 30px;
`;

const RememberMe = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  input {
    background: blue;
    display: inline-flex;
    width: 30px;
  }

  label {
    font-size: 14px;
  }
`;

const ButtonLogin = styled(Link)`
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  height: 44px;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  background: #2e2e2e;
  color: #fef261;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  margin-top: 63px;

  &:hover {
    background-color: #4d4d4d;
    color: white;
  }

  &:active {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
`;

const ButtonLoginSecondary = styled(ButtonLogin)`
  background: white;
  color: #2e2e2e;
  border: 3px solid #2e2e2e;
  margin-bottom: 63px;
  margin-top: 0;
  &:hover {
    background-color: lightgray;
  }
`;
