import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import Text from "./Text";
import Shortenlink from './Shortenlink'
import Cards from "./Cards";
import theme from './Theme';
import { space , size } from 'styled-system';


const Lower = styled.div`
background : #EFF1F7;
display : flex;
flex-direction : column;
align-items : center;
justify-content : space-between;


${size}
${space}

`



export default function Lowerbox() {
    return (
        <ThemeProvider theme = {theme}>
            <Lower mt = {['100px', '80px']} height = {["100vh","80vh"]}>
            <Shortenlink /> 
            <Text textAlign  = "center" color = "#9e9aa7" fontSize = {["13px","17px"]} p = {['20px', '0']} width = {['90%', '40%']}><Text fontSize = {["22px","35px"]} fontWeight = "600" color = "#35323e" mb = {['10px', '0']}>Advanced Statistics</Text>Test how your links are performing accross the web with our advanced statistics dashboard.</Text>
            <Cards />
        </Lower>
        </ThemeProvider>
    )
}
