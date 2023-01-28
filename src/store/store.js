import {configureStore, createSlice} from "@reduxjs/toolkit";

// 로그인 되어있는 고유 번호
let isLogin = createSlice({
    name: "isLogin",
    initialState: {isLogin: false},
    reducers: {
        setIsLogin(state, action) {
            state.isLogin = action.payload;
        }
    }
})
export let {setIsLogin} = isLogin.actions

let profile = createSlice({
    name: "profile",
    initialState: {
        name: "",
        img: ""
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload;
        },
        setImg(state, action) {
            state.img = action.payload;
        }
    }
})
export let {setName, setImg} = profile.actions;

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer,
        profile: profile.reducer,
    }
})