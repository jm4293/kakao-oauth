import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Redirect from "./Components/Kakao/Redirect";

function App() {
    return (
        <Frame>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/oauth/kakao/callback" element={<Redirect/>}/>
            </Routes>
        </Frame>
    )
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Frame = styled.div`
  width: 40vw;
  min-width: 600px;
  height: 100vh;
  margin: auto;
`;

export default App;
