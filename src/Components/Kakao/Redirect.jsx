import React, {useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Redirect() {
    const navigate = useNavigate();

    const href = window.location.href;
    let params = new URL(href).searchParams;
    let code = params.get("code");

    console.log(1)
    useEffect(() => {
        async function token() {
            await axios.post('http://localhost:8000/kakaotoken', {
                    code: code
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
                .then((result) =>{
                    console.log("result ", result.data);
                    sessionStorage.setItem("Login", result.data)
                    alert("카카오 로그인 성공")
                    navigate('/');
                })
                .catch((error) =>{
                    console.log("error ", error);
                    alert("카카오 로그인 실패")
                    navigate('/');
                })

        }
        token();

        console.log(2)
    },)

    return (
        <div>
            잠시만 기다려 주세요! 로그인 중입니다!
        </div>
    )
}

export default Redirect;