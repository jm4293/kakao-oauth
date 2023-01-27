import React from "react";
import styled from "styled-components";
import {BsPerson, BsFillChatFill} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function Navbar() {
    const navigate = useNavigate();

    let isLogin = useSelector((state) => {
        return state.isLogin
    })

    return(
        <Frame>
            <Button onClick={() => isLogin.isLogin ? navigate('/profile') : alert("로그인 하세요")}><BsPerson/></Button>
            <Button onClick={() => isLogin.isLogin ? navigate('/chatting') : alert("로그인 하세요")}><BsFillChatFill/></Button>
            <Button><AiOutlineSearch/></Button>
            <Button onClick={() => isLogin.isLogin ? navigate('/logout') : alert("로그인 하세요")}><BiDotsHorizontalRounded/></Button>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(249, 249, 250);
  border-top: 1px solid rgb(226, 226, 226);
`;

const Button = styled.div`
  cursor: pointer;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Navbar