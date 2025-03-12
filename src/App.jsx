/*eslint-disable*/
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <MainContainer>
      <Header />
      <Body />
      <Footer />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;

`