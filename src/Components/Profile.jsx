import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {useDispatch} from "react-redux";
import {changeIsLogin} from "../store/store";

function Profile() {
    const [nickName, setNickName] = useState("");
    const [profileImg, setProfileImg] = useState("");

    let dispatch = useDispatch();

    useEffect(() => {
        sessionStorage.getItem("Login") === "4293" ? dispatch(changeIsLogin(true)) : dispatch(changeIsLogin(false));
    }, [])

    useEffect(() => {
        async function profile() {
            await axios.get('http://localhost:8000/profile')
                .then((result) => {
                    setNickName(result.data.nickName);
                    setProfileImg(result.data.profileImageURL);
                })
                .catch((error) => {
                    console.log("profile error ", error)
                })
        }
        profile();
    }, [])

    // 친구목록은 API 검수를 통해 추가 동의 권한을 사용할 수 있습니다.
    // useEffect(() => {
    //     async function friend() {
    //         await axios.get('http://localhost:8000/friend')
    //             .then((result) => {
    //                 // console.log("friend reusult ", result)
    //                 console.log("result.data")
    //             })
    //             .catch((error) => {
    //                 console.log("profile error ", error)
    //             })
    //     }
    //     friend();
    // }, [])

    return (
        <Frame>
            <h1>Profile</h1>
            <User>
                <Photo src={profileImg}/>
                <Name>{nickName}</Name>
            </User>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 86%;
`;

const User = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 20px;
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 90px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: auto;
`;

export default Profile;