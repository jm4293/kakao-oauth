import React, {useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setIsLogin, setName, setImg} from "../store/store";

function Profile() {
    let name = useSelector((state) => {
        return state.profile.name;
    })

    let img = useSelector((state) => {
        return state.profile.img;
    })
    let dispatch = useDispatch();

    useEffect(() => {
        sessionStorage.getItem("Login") === "4293" ? dispatch(setIsLogin(true)) : dispatch(setIsLogin(false));
    }, [])

    useEffect(() => {
        async function profile() {
            await axios.get('http://localhost:8000/profile')
                .then((result) => {
                    dispatch(setName(result.data.nickName));
                    dispatch(setImg(result.data.profileImageURL));
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
            <h1 style={{borderBottom: "1px solid rgb(222, 222, 222)"}}>Profile</h1>
            <User>
                <Photo src={img}/>
                <Name>{name}</Name>
                {/*<Photo src={profileImg}/>*/}
                {/*<Name>{nickName}</Name>*/}
            </User>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 86%;
  //border: 1px solid blue;
`;

const User = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  border: 1px solid rgb(222, 222, 222);
`;

const Photo = styled.img`
  width: 10%;
  height: 100%;
  margin: 0 20px;
  border-radius: 30px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: auto;
`;

export default Profile;