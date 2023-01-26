import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai"
import {RiChatNewLine} from "react-icons/ri"
import {IoMdMusicalNotes} from "react-icons/io"
import {FiSettings} from "react-icons/fi"
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {BsPerson, BsFillChatFill} from "react-icons/bs"

function LoginOn() {
    return (
        <Frame>
            <Header style={{gridColumn: "1/3", gridRow: "1/2"}}><h2>Chats</h2></Header>
            <Header style={{gridColumn: "3/5", gridRow: "1/2"}}></Header>
            <Header style={{gridColumn: "5/6", gridRow: "1/2"}}><AiOutlineSearch/></Header>
            <Header style={{gridColumn: "6/7", gridRow: "1/2"}}><RiChatNewLine/></Header>
            <Header style={{gridColumn: "7/8", gridRow: "1/2"}}><IoMdMusicalNotes/></Header>
            <Header style={{gridColumn: "8/9", gridRow: "1/2"}}><FiSettings/></Header>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <Footer style={{gridColumn: "1/3", gridRow: "4/5"}}><BsPerson/></Footer>
            <Footer style={{gridColumn: "3/5", gridRow: "4/5"}}><BsFillChatFill/></Footer>
            <Footer style={{gridColumn: "5/7", gridRow: "4/5"}}><AiOutlineSearch/></Footer>
            <Footer style={{gridColumn: "7/9", gridRow: "4/5"}}><BiDotsHorizontalRounded/></Footer>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const Header = styled.div`
  margin: auto;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(249, 249, 250);
  border-top: 1px solid rgb(226, 226, 226);
`;

export default LoginOn;