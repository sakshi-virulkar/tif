import styled,{css} from "styled-components";
import { border, color , layout, space, typography  } from "styled-system";
const Button = styled.button`
padding : 10px 15px;
margin : 0 5px;
font-size : 15px;
border : none;
background-color : transparent  ;
border-radius : 40px;
color : #bfbfbf;
text-transform : capitalize;
font-weight : 600;

${props => props.primary && css`
&:hover{
    background: #2acfcf;
    color: white;
}
  `}

${props => props.secondary && css`
&:hover{
    color: black;
}

  `}

${color}
${space}
${typography}
${border}
${layout}
`


export default Button