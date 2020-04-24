import React from "react";
import styled from "@wigxel/react-components";
import { useLayout } from '../libs/LayoutStore'

const Heading1 = styled.h1`
  font-size: 2em;
  
  span {
    font-size: 2.3em;
    
  }
`

const Heading3 = styled.h3`
  font-size: 1.8em;
`

const P = styled.p`
  font-size: 1.2rem;
`

export const H1 = props => {
  const { className, children } = props;

  return (
    <Heading1 className={className}>
      {children}
    </Heading1>
  )
}

export const H3 = props => {
  const { className, children } = props;

  return (
    <Heading3 className={className}>
      {children}
    </Heading3>
  )
}

export const Paragraph = props => {

  const { className, children } = props;

  return (
    <P className={className}>
      {children}
    </P>
  )
}