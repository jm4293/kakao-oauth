import {KAKAO_AUTH_URL} from "./Kakao/OAuth";
import React from "react";
import styled from "styled-components";

function LoginOff() {
    return (
        <Frame>
            <a href={KAKAO_AUTH_URL}><img src="/images/kakao_login_large_wide.png"/></a>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export default LoginOff;