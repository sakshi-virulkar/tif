import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import Image from "./Image";
import logoWhite from "../assets/logowhite.svg"
import Text from './Text'
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import theme from './Theme';
import { space, typography } from 'styled-system';

const FooterContent = styled.div`
display : flex;
justify-content : space-between;
align-items : flex-start;
min-height : 40vh;
background : #35323e;
padding :80px 100px;

@media (max-width : 400px){
    flex-direction : column;
    align-items : center
}
`
const Linkbox = styled.div`
display : flex;

@media (max-width : 400px){
    flex-direction : column;
}

${typography}
${space}
`
const Linkcard = styled.div`
margin : 0 20px;

${space}
`
const linksData = [
    {
        heading : 'Features',
        link : ['Link Shortening' , 'Branded Links' , 'Analytics']
    },
    {
        heading : 'Resources',
        link : ['blog' , 'Developers' , 'Support']
    },
    {
        heading : 'Company',
        link : ['About' , 'Our Team' , 'Careers', 'Contact']
    }
]

const Icons = styled.div`
display : flex;
`

const icondet = [facebook, twitter, pinterest, instagram]

export default function Footer() {
    return (
        <ThemeProvider theme = {theme}>
            <FooterContent>
            <Image src = {logoWhite}/>
            <Linkbox textAlign = {['center', 'left']} my = {['20px']}>
                {linksData.map((item) => (
                    <Linkcard mb = {['20px', '0']}>
                        <Text color = "white" fontWeight = "500" fontSize = {["20px","15px"]} mb = "10px" key = {item.heading}>{item.heading}</Text>
                        {item.link.map((link) => (
                            <Text fontSize = "11px" fontWeight = "500" color = "#bfbfbf" my = "7px" key = {link}>{link}</Text>
                        ))}
                    </Linkcard>
                ))}
            </Linkbox>
            <Icons>
            {icondet.map((icon) => (
                <Image src = {icon} mx = "10px"/>
            ))} 
            </Icons>  
        </FooterContent>
        </ThemeProvider>
    )
}
