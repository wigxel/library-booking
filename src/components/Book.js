import React from 'react'

export default function Book(props){
    return (
         <div >
            Title: {props.booktitle} <br/>
            Quantity: {props.quantity}<br/>
            Author: {props.author} <br/>
            Category : {props.category}
        </div>
    )
}