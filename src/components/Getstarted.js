import React from 'react'
import Text from "../components/Text";
import Button from "./Buttons";
import working from "../assets/illustration-working.svg";
import Image from "./Image";
import styled, {ThemeProvider} from 'styled-components'
import  theme  from "./Theme"
import { layout, size, space, typography } from 'styled-system';

const Start = styled.div`
position : relative;    
max-width : 100vw;
min-height : 80vh;
overflow-x : hidden;
overflow-y : visible;
align-items : center;

${space}
`
const Box = styled.div`
${size}
${layout}
${space}
${typography}
`

export default function Getstarted() {
    return (
        <ThemeProvider theme = {theme}>
            <Start px = {['30px', '100px']} mt = {['20px' , '0']}>
            <Image src = {working} alt = "" width = {['90vw', '50vw']}  position = "absolute" right = {["5%","-20px"]} top  = {["10px","50px"]} zIndex = "9"></Image>
            <Box mt = {['250px', '100px']} textAlign = {['center', 'left']} width = {['100%', '45%']}>
            <Text fontSize = {['30px','60px']} my= "-10px" fontWeight = "900" color = "#232127">More then just<br /> shorter links</Text>
                <Text my = {["15px","20px"]} color = "#9e9aa7" fontSize = {['13px' , '20px']} >Build your brand'sreacogintion and get detailed insights on how your links are performing</Text>
                <Button color = "white" bg = "#2acfcf" fontSize = {['14px', '20px']} px = "30px" mt = {["10px","20px"]} >Get started</Button>
            </Box>
        </Start>
        </ThemeProvider>
    )
}
