import React from "react";
import styled from "styled-components";
import { BackNavigation } from "./../components/BackNavigation/BackNavigation";
import BoxWrapper, {
  BoxWrapperFooter,
  BoxWrapperTitle,
} from "./../components/BoxWrapper/BoxWrapper";
import Input from "./../components/Input/Input";
import { Helmet } from "react-helmet";
const SignUp = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up</title>
      </Helmet>
      <BackNavigation />
      <BoxWrapper>
        <BoxWrapperTitle>Sign Up</BoxWrapperTitle>
        <Input placeholder="Username" />
        <Input placeholder="Password" password />
        <Input placeholder="Retype Password" password />
        <Input placeholder="Email" />
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Adress" />
        <Input placeholder="Street Number" />
        <Input placeholder="Post Code" />
        <Input placeholder="City" />
        <Input placeholder="Province" />
        <Input placeholder="Phone Number" />

        <ButtonLogin>Sign Up</ButtonLogin>
        <BoxWrapperFooter>
          Already have account? <span>Login</span>
        </BoxWrapperFooter>
      </BoxWrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  background: #fef8b0;
  min-height: 100vh;
  padding: 0 20px;
  padding-bottom: 30px;
`;

const ButtonLogin = styled.div`
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: #2e2e2e;
  color: #fef261;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 50px;
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
