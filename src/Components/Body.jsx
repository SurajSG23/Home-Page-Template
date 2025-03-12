import React from "react";
import styled from "styled-components";
const Body = () => {
  return (
    <MainContainer>
      <div className="w-80 h-80 bg-red-300 flex justify-center items-center m-2">
        body
      </div>
    </MainContainer>
  );
};

export default Body;

const MainContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`