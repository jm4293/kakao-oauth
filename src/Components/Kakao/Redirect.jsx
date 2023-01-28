import React, {useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

function Redirect() {
    const navigate = useNavigate();

    const href = window.location.href;
    let params = new URL(href).searchParams;
    let code = params.get("code");

    useEffect(() => {
        async function token() {
            await axios.get('http://localhost:8000/accesstoken', {
                    params:{
                        code: code
                    }
                }
            )
                .then((result) => {
                    sessionStorage.setItem("Login", result.data)
                    alert("카카오 로그인 성공")
                    navigate('/profile');
                })
                .catch((error) => {
                    console.log("Redirect error ", error);
                    alert("카카오 로그인 실패")
                    navigate('/');
                })
        }
        token();
    },)

    return (
        <Frame>
            <h1>잠시만 기다려 주세요! 로그인 중입니다!</h1>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Redirect;