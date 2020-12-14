import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { size, space } from "styled-system";
import Image from "./Image"
import Text from "./Text"
import theme from './Theme';


const  CardContent = styled.div`
    width : 350px;
    height : 250px;
    padding :0 30px;
    background : white;
    border-radius : 5px ;
    z-index : 99;

    @media(max-width : 400px){
        width : 100%;
        height : 220px;
        text-align : center;
        padding : 0 20px
    }


    ${size}
    ${space}
`
const Sticker = styled.div`
display : flex;
justify-content : center;
align-items : center;
background : #3b3054;
width : 70px;
height : 70px;
border-radius : 100px;
transform : translate(0 , -50%);

@media (max-width : 400px){
    margin : auto
}
`
const Card = ({name ,content , mark , margin}) => {
    return (
        <ThemeProvider theme = {theme}>
            <CardContent mt = {['70px', margin]} >
            <Sticker>
                <Image src = {mark} alt = "" width = "30px" ></Image>
            </Sticker>
                <Text color = "#35323e" fontWeight = "700" fontSize = {["17px","22px"]} >{name}</Text>
                <Text my = "20px" fontSize = {["11px","14px"]} color = "#9e9aa7" fontWeight = "500">{content}</Text>
        </CardContent>
        </ThemeProvider>
    )
}


export default Card
