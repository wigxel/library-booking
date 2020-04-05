import React from 'react'
import styled, { Button } from '@wigxel/react-components';

const BookStyle = styled.div`
    color:#333;
    margin-bottom:1rem;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    border:solid 1px #333;
    box-shadow:0 3px 2px rgba(0,0,0,.2);
    background-color: ${props => props.theme.bgcolor};

    .title {
        color: ${props => props.theme.primary};
        margin-top: 0;
    }
`

export default function Book(props){
    return (
        <BookStyle>
            <h4 className="title">{props.booktitle}</h4>
            Quantity: {props.quantity} <br/>
            Author: {props.author} <br/>
            Category : {props.category}
            <br />
            <Button outline>Remove</Button>
        </BookStyle>
    )
}