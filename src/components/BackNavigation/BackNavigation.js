import React from "react";
import styled from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

export const BackNavigation = () => {
  return (
    <Container>
      <Link to="/" style={{ color: "inherit" }}>
        <KeyboardBackspaceIcon className="back-icon" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  .back-icon {
    font-size: 40px;
    cursor: pointer;
  }
`;
