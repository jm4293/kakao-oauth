import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useSelector} from "react-redux";

function Chatting() {
    let img = useSelector((state) => {
        return state.profile.img;
    })

    const click = async () => {
        await axios.get('http://localhost:8000/chatting')
    }

    return(
        <Frame>
            <h1 style={{borderBottom: "1px solid rgb(222, 222, 222)"}}>Chatting</h1>
            <Photo src={img}/>
            <button onClick={() => click()}>나한테 메세지 보내기</button>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 86%;
`;

const Photo = styled.img`
  width: 10%;
  height: 10%;
  margin: 0 20px;
  border-radius: 30px;
`;

export default Chatting

