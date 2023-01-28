const express = require('express')
const app = express();
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

let ACCESS_TOKEN;

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

// Access Token 가져오기
app.get('/accesstoken', async (req, res) => {
    const REST_API_KEY = "44fb0663d9f8993bedab1f709e654275";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const ACCESS_CODE = req.query.code       // 인가 코드

    await axios.post("https://kauth.kakao.com/oauth/token", null, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        params: {
            grant_type: 'authorization_code',
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: ACCESS_CODE
        }
    })
        .then((result) => {
            ACCESS_TOKEN = result.data.access_token;
            console.log("로그인 되었습니다")
            res.send("4293")
        })
        .catch((error) => {
            console.log("accesstoken error ", error)
        })
})

// 프로필 가져오기
app.get('/profile', async (req, res) => {
    await axios.get("https://kapi.kakao.com/v1/api/talk/profile", {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
    })
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            console.log("profile error ", error);
        })
})

// 친구목록 가져오기
// 친구목록은 API 검수를 통해 추가 동의 권한을 사용할 수 있습니다.
// app.get('/friend', async (req, res) => {
//     await axios.get("https://kapi.kakao.com/v1/api/talk/friends", {
//         headers: {
//             "Authorization": `Bearer ${ACCESS_TOKEN}`
//         }
//     })
//         .then((result) => {
//             // res.send(result.data);
//             console.log("result data ", result.data);
//         })
//         .catch((error) => {
//             console.log("result error ", error)
//         })
// })

// 로그인 한 계정으로 메세지 보내기
app.get('/chatting', async (req, res) => {
    await axios.post("https://kapi.kakao.com/v2/api/talk/memo/default/send", null, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${ACCESS_TOKEN}`
        },
        params: {
            template_object: JSON.stringify({
                "object_type": "feed",
                "content": {
                    "title": "오늘의 디저트",
                    "description": "아메리카노, 빵, 케익",
                    "image_url": "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
                    "image_width": 640,
                    "image_height": 640,
                    "link": {
                        "web_url": "http://www.daum.net",
                        "mobile_web_url": "http://m.daum.net",
                        "android_execution_params": "contentId=100",
                        "ios_execution_params": "contentId=100"
                    }
                },
                "item_content": {
                    "profile_text": "Kakao",
                    "profile_image_url": "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
                    "title_image_url": "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
                    "title_image_text": "Cheese cake",
                    "title_image_category": "Cake",
                    "items": [
                        {
                            "item": "Cake1",
                            "item_op": "1000원"
                        },
                        {
                            "item": "Cake2",
                            "item_op": "2000원"
                        },
                        {
                            "item": "Cake3",
                            "item_op": "3000원"
                        },
                        {
                            "item": "Cake4",
                            "item_op": "4000원"
                        },
                        {
                            "item": "Cake5",
                            "item_op": "5000원"
                        }
                    ],
                    "sum": "Total",
                    "sum_op": "15000원"
                },
                "social": {
                    "like_count": 100,
                    "comment_count": 200,
                    "shared_count": 300,
                    "view_count": 400,
                    "subscriber_count": 500
                },
                "buttons": [
                    {
                        "title": "웹으로 이동",
                        "link": {
                            "web_url": "http://www.daum.net",
                            "mobile_web_url": "http://m.daum.net"
                        }
                    },
                    {
                        "title": "앱으로 이동",
                        "link": {
                            "android_execution_params": "contentId=100",
                            "ios_execution_params": "contentId=100"
                        }
                    }
                ]
            })
        }
    })
        .then((result) => {
            console.log("나한테 메세지 전송 성공")
        })
        .catch((error) => {
            console.log("chatting error ", error);
            console.log("나한테 메세지 전송 실패")
        })
})

// 로그아웃
app.get('/logout', async (req, res) => {
    await axios.post("https://kapi.kakao.com/v1/user/logout", null, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${ACCESS_TOKEN}`
        }
    })
        .then((result) => {
            console.log("로그아웃 되었습니다.")
            res.send("Login")
        })
        .catch((error) => {
            console.log("logout error ", error);
        })
})

