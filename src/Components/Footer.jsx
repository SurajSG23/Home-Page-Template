import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <MainContainer>
      <div>Footer</div>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  margin-top: auto;
  width: 100%;
  height: 10vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
