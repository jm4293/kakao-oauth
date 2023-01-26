# 웹 카카오톡 
1. 로그인
1. 채팅
1. 프로필
1. 친구목록

## 개발언어
- React
- express

## 추가 패키지
- styled-components
    - npm install styled-components
    - version: 5.3.6

- react-router-dom
    - npm install react-router-dom --save
    - version: 6.4.2

- nodemon
    - npm install nodemon
    - version: 2.0.20

- express
    - npm install express
    - version: 4.18.2

- axios
    - npm install axios
    - version: 1.1.3

## 실행 방법
- npm start
- nodemon server/server.js

## 실행 과정
- 서버실행 -> 클라이언트 실행 -> localhost:3000 접속

## 구현
- 프론트엔드에서 로그인 버튼을 누르면 인증코드를 프론트엔드가 받음 -> 받은 인증코드를 백엔드로 넘김 -> 백엔드에서 인증코드로 카카오서버로 넘겨서 토큰을 받음 -> 백엔드에서 토큰으로 원하는 정보 얻음 -> 받은 정보를 프론트엔드로 넘김
- 카카오 로그인 (인증코드, 토큰)
- 로그인 아이디의 프로필
- 친구 목록
- 채팅 구현중
