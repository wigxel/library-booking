import React, { Component } from "react";

export default class AddBook extends Component {
    constructor(){
        super()
        this.state = {
            booktitle: "",
            quantity: 0,
            author: "",
            category: ""
        }
 }

   // currying
   curUpdateField(fieldName) {
       return (evt) => {
           const newObj = { ...this.state };
           newObj[fieldName] = evt.target.value;
           this.setState(newObj);

            // approaching 
            // this.setState({ ...this.state, [fieldName]: evt.target.value })
       }
   }

  render() {
    return (
      <form onSubmit={(evt)=> {
          evt.preventDefault()
        //   console.log('Book Submit:', this.state)
          this.props.onSubmit({ ...this.state });
      }} >
        <h1>Add A Book</h1>
        <label for="booktitle">Book Title</label>
        <input type="text" name="booktitle"  placeholder ='Harry Potter..' onChange={this.curUpdateField('booktitle')}/><br/>
        <label for="quantity">Quantity</label>
        <input type="text" name="quantity" placeholder ='15' onChange={this.curUpdateField("quantity")} /><br/>
        <label for="author">Author</label>
        <input type="text" name="author" placeholder ='J.K Rowling..' onChange={this.curUpdateField("author")} /><br/>
        <label for="category">Category</label>
        <input type="text" name="category" placeholder ='Fantasy...' onChange={this.curUpdateField("category")} /><br/>
        <button className='add_book' type="submit">ADD BOOK</button>
      </form>
    );
  }
}