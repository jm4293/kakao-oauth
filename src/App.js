import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Routes, Route} from "react-router-dom";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Redirect from "./Components/Kakao/Redirect";
import Profile from "./Components/Profile";
import Chatting from "./Components/Chatting";
import Logout from "./Components/Logout";
import Navbar from "./Components/Home/Navbar";

function App() {
    return (
        <Frame>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/chatting" element={<Chatting/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/oauth/kakao/callback" element={<Redirect/>}/>
            </Routes>
            <Navbar/>
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


//http://localhost:8000/kakaotoken
//http://localhost:8000/kakao/callback