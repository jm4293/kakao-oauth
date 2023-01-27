import {configureStore, createSlice} from "@reduxjs/toolkit";

// 로그인 되어있는 고유 번호
let isLogin = createSlice({
    name: "isLogin",
    initialState: {isLogin: false},
    reducers: {
        changeIsLogin(state, action) {
            state.isLogin = action.payload;
        }
    }
})
export let {changeIsLogin} = isLogin.actions

export default configureStore({
    reducer: {
        isLogin: isLogin.reducer
    }
})