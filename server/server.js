const express = require('express')
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

let KAKAO_TOKEN;

app.use(cors({
    origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("server on : 8000");
})

app.listen(8000, () => {
    console.log("server on : 8000");
});

app.post('/kakaotoken', async (req, res) => {
    const REST_API_KEY = "44fb0663d9f8993bedab1f709e654275";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_CODE = String(req.body.code)
    console.log("KAKAO_CODE ", KAKAO_CODE);

    // 1. Access Token 가져오기
    await axios.post("https://kauth.kakao.com/oauth/token", null, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        params: {
            grant_type: 'authorization_code',
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: KAKAO_CODE
        }
    })
        .then((result) => {
            KAKAO_TOKEN = result.data.access_token;
            res.send("4293")
            // return result.data.access_token;
        })
        .catch((error) => {
            console.log("error ", error)
        })

    console.log("KAKAO_TOKEN ", KAKAO_TOKEN)

    // // 2. 토큰 정보 보기
    // await axios.get("https://kapi.kakao.com/v1/user/access_token_info", {
    //     headers :{
    //         "Authorization": `Bearer ${KAKAO_TOKEN}`
    //     }
    // })
    //     .then((result) => {
    //         console.log("sdfjsjkdfdnsjk", result)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })


    // // 3. 사용자 정보 모두 받기
    // await axios.get("https://kapi.kakao.com/v2/user/me", {
    //     headers: {
    //         "Authorization": `Bearer ${KAKAO_TOKEN}`
    //     }
    // })
    //     .then((result) => {
    //         console.log("123456789 ", result.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
})