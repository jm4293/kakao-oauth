import React from "react";
import styled from "styled-components";
import axios from "axios";

function Chatting() {
    const click = async () => {
        await axios.get('http://localhost:8000/chatting')
    }

    return(
        <Frame>
            <h1>Chatting</h1>
            <button onClick={() => click()}>나한테 메세지 보내기</button>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 86%;
`;

export default Chatting

