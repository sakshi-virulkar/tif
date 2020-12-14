import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Text from "./Text";
import Button from "./Buttons"
import boostDesktop from "../assets/bg-boost-desktop.svg";
import boostMobile from "../assets/bg-boost-mobile.svg";
import theme from './Theme';

const Boostbg = styled.div`
width : 100%;
height : 180px;
background :#3b3054;

@media (max-width : 400px){
height : 250px;

}
`
const BoostOverlay = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
width : 100%;
height : 180px;
background-image : url(${boostDesktop});
background-size : cover;
background-posotion : center;

@media(max-width : 400px){
    background-image : url(${boostMobile});
    height : 250px;
}
`

export default function Boost() {
    return (
        <ThemeProvider theme ={theme}>
            <Boostbg>
           <BoostOverlay>
                <Text color = "#fff" fontWeight = "600" fontSize = {["25px","30px"]} >Boost your links today</Text>
                <Button primary color = "white" bg = "#2acfcf" p = "10px 20px" mt= "20px">Get started</Button>
           </BoostOverlay> 
        </Boostbg>
        </ThemeProvider>
    )
}
