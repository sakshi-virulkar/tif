import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Button from './Buttons';

const Menu = styled.div`
height : 0;

@media(max-width : 400px){
display : flex;
flex-direction : column;
padding : 25px;
width : 85%;
height : auto;
background : #3b3054;
margin : auto;
border-radius : 10px
} 
`


export default function Dropdown({drop}) {



    return (
        <ThemeProvider theme = {theme}>
            <Menu display = {['flex' , 'none']} >
                <Button color = "white">Features</Button>
                <Button color = "white">pricing</Button>
                <Button color = "white">resources</Button>
                <hr style = {{margin : "20px", border : "1px solid #fff"}} />
                <Button color = "white">log in</Button>
                <Button color = "white">sign up</Button>
            </Menu>
        </ThemeProvider>
    )
}
