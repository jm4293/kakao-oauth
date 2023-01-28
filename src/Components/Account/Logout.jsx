import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        async function logout() {
            await axios.get('http://localhost:8000/logout')
                .then((result) => {
                    sessionStorage.removeItem(result.data)
                    alert("로그아웃 성공")
                    navigate('/')
                })
                .catch((error) => {
                    console.log("logout error ", error)
                    alert("로그아웃 실패")
                })
        }
        logout();
    })

    return (
        <Frame>
            <h1>잠시만 기다려 주세요! 로그아웃 중입니다!</h1>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Logout;