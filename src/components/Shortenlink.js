import React, {useState , }from 'react'
import styled, { ThemeProvider } from "styled-components";
import Axios from 'axios';
import  shortendesktop  from "../assets/bg-shorten-desktop.svg";
import  shortenmobile  from "../assets/bg-shorten-mobile.svg";
import Button from "./Buttons";
import theme from './Theme';
import { border, display, size, space } from 'styled-system';
import Text from "./Text"
import {CopyToClipboard} from "react-copy-to-clipboard";

const Shorten = styled.div`
display : flex;
justify-content : center;
align-items : center;
width : 80vw;
height : 120px;
margin : 0 auto;
border-radius : 5px;
transform : translate(0 , -50%);
background-color : #3b3054;

@media (max-width : 400px){
    width : 90%;
    height : 150px;
    
}
`

const Overlay = styled.div`
background-image : url(${shortendesktop});
background-size : cover;
background-position : center;
display : flex;
justify-content : center;
align-items : center;
width : 80vw;
height : 120px;
border-radius : 5px;

@media (max-width : 400px){
    width : 100%;
    height : 150px;
    background-image : url(${shortenmobile});
    flex-direction : column;
}
`
const Input = styled.input`
display : block;
width : 55vw;
height : 50px;
border-radius : 5px;
padding : 0 20px;

@media (max-width : 400px){
    width : 90%;
}

${border}
`
const Result = styled.div`
background : #fff;
width : 80vw;
padding : 20px 0;
justify-content : space-between;
align-items : center;
border-radius : 5px;
@media(max-width : 400px){
width : 90%
}

${space}
${size}
${display}
`


export default function Shortenlink() {
    const [url, setUrl] = useState('')
    const [short,setShort] = useState('')
    const [border,setBorder] = useState('none')
    const [todisplay,setTodisplay] = useState('none')
    const [message,setMessage] = useState('')
    const [copy,setCopy] = useState('Copy')
    const [color , setColor] = useState("#2acfcf")


    function HandleChange(event){
        const {value} = event.target
        setUrl(value)
      }

    
function HandleSubmit(){

if (url ==='') {
setBorder('2px solid #f46262')
setMessage('enter valid url!!!')
}    
else{    Axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(Response =>{
        console.log(Response)
        if (Response.data.ok) {
            setShort(Response.data.result.full_short_link)
        }
        setTodisplay('flex')
      })}
  }


function HandleCopy() {   
    setColor('#3b3054')
    setCopy('Copied!');
  };

    return (
        <ThemeProvider theme = {theme}>    
        <>
        <Shorten>
            <Overlay>            
            <div style = {{marginTop : '4px'}}>
            <Input type = "text" placeholder = "Shorten a link here..."  onChange ={HandleChange} border = {border}></Input>
            <Text fontSize = {['10px','12px']} color = '#f46262' >{message}</Text>    
            </div>
            <Button width = {['90%', 'auto']} bg = "#2acfcf" color = "#fff" borderRadius = "5px" height = "50px" ml = {[ "0","20px"]} mt = {['15px', '0']} onClick = {HandleSubmit}>shorten it! </Button>
            </Overlay>
            </Shorten>
            <Result px = {['20px', '40px']} display = {todisplay} >
            <Text fontSize = {['13px','14px']} width = '50vw' display = {['none','flex']}>{url}</Text>
            <Text  textAlign = {['center','left']} fontSize = {['13px','14px']} color = {['black', '#2acfcf']}>
            {short}
            <CopyToClipboard text = {short}>
            <Button ml = {['0' , '20px']} fontSize = {['13px','15px']} my = {['5px','0']} width = {['100%', 'auto']} bg = {color} color = "#fff" borderRadius = "5px" onClick = {HandleCopy}>{copy}</Button>
            </CopyToClipboard>
            </Text>           
            </Result>
        
        </>
        </ThemeProvider>
    )
}
