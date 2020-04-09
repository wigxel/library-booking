import React from 'react'
import styled  from '@wigxel/react-components'

const StyledAlert = styled.div`
    border-radius: 1rem;
    padding: .5rem 1.5rem;
    color: ${props => props.theme.alert[props.type].textColor || "white"};
    background-color: ${props => props.theme.alert[props.type].bgColor};
`

export default function Alert(props){
  return <StyledAlert type={props.type}>
     {props.message}
  </StyledAlert>
}
 