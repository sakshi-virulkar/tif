import React, {useState}  from 'react'
import styled, {ThemeProvider} from 'styled-components'
import  theme  from "./Theme"
import { layout, space } from 'styled-system';
import logo from '../assets/logo.svg'
import Button from './Buttons'
import Image from "./Image";
import menu from "../assets/menu.svg"
import Dropdown from './Dropdown';


const Nav = styled.div`
display : flex;
justify-content : space-between;
align-items : center;
padding : 30px 100px; 

${space}
`
const Links = styled.div`
height = "100%";
${layout}


`


export default function Navbar() {
    const [drop, setDrop] = useState('false')


    return (
        <ThemeProvider theme = {theme}>
        <>
        <Nav px = {['30px', '100px']} pt = {["40px"]}>
            <Links display = "flex">
            <Image src = {logo} alt = "" width = {['80px' , '150px']}   ></Image>
            <Links display = {['none' , 'flex']} align-items = "center">
            <Button secondary ml = "40px">
                Features
            </Button>
            <Button secondary>
                pricing
            </Button>
            <Button secondary>
                resources
            </Button>
            </Links>
            </Links>

            <Links display = {['none' , 'flex']}>

            <Button primary>
                log in
            </Button>
            <Button primary>
                sign up
            </Button>
            </Links>
            <Button secondary  p = "0" display = {['block','none']} onClick = {() => (setDrop(!drop))}>
                <Image src = {menu} width = "20px" ></Image>
            </Button>
        </Nav>
        {drop && <Dropdown />}
        </>
        </ThemeProvider>
    )
}
