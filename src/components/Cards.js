import React from 'react'
import Card from "./Card";
import styled, { ThemeProvider } from "styled-components"
import brandRecognition from "../assets/icon-brand-recognition.svg"
import detailedRecords from "../assets/icon-detailed-records.svg"
import customizable from "../assets/icon-fully-customizable.svg"
import theme from './Theme';
import { space } from 'styled-system';

const Cardbox = styled.div`
position : relative;
display : flex;
justify-content : space-between;
width : 80vw;
margin-bottom : 100px;

@media (max-width : 400px){
    flex-direction : column;
}

${space}
`

const Line = styled.div`
position : absolute;
width : 100%;
height : 8px;
background :#2acfcf;

top : 50%;
z-index : 9;

@media (max-width : 400px){
    transform : rotate(90deg);
    width : 500px;
    right : -48%;

}
`

const cardData = [
    {
        name : "Brand Reacognition",
        content : "Boost your brand recognition with each click. Genric links don't mean a thing. Branded links instil confidence in your content",
        mark : brandRecognition,
        margin : "0px"
    },
    {
        name : "Detailed Records",
        content : "Gain insights into whois clicking your links. Knowing when and where people engage in your content helps inform better decisions",
        mark : detailedRecords,
        margin : "30px"
    },
    {
        name : "Fully Customizable",
        content : "Improve brand awareness and content discoverability thorugh costumizable links, supercharging audience engagement.",
        mark : customizable,
        margin : "60px"
    }
]


export default function Cards() {
    return (
        <ThemeProvider theme = {theme}>
        <Cardbox mt = {['20px', '100px']}>
        <Line />
        {cardData.map((item) => (
            <Card {...item} key = {item.name}/>
            ))}
        </Cardbox>
        </ThemeProvider>
    )
}
