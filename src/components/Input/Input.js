import React, { useState } from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Input = ({ password, ...rest }) => {
  const [showPassword, setShowpassword] = useState(false);
  return (
    <Container>
      <input
        type={password && !showPassword ? "password" : "text"}
        {...rest}
      ></input>
      {password && (
        <EyeWrapper onClick={() => setShowpassword(!showPassword)}>
          {!showPassword ? (
            <VisibilityIcon className="eye-icon" />
          ) : (
            <VisibilityOffIcon className="eye-icon" />
          )}
        </EyeWrapper>
      )}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  border: 3px solid #2e2e2e;
  border-radius: 10px;
  max-width: 600px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  height: 44px;
  text-decoration: none;
  user-select: none;

  &:active {
    color: #fff;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
`;

const EyeWrapper = styled.div`
  background: #2e2e2e;
  height: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: -4px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  .eye-icon {
    color: #fef261;
    font-size: 18px;
  }
`;
