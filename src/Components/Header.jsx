import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <div> Header</div>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`;
