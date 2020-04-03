import React from "react";
import { string, object, number } from 'yup';

let schema = object().shape({
  booktitle: string().required().min(5),
  quantity: number().positive().required(),
  author: string().required(),
  category: string().required()
});

const default_state = {
    booktitle: "",
    quantity: 0,
    author: "",
    category: "",
    errors: []
};

export default function AddBook (props) {
    const [state, setState] = React.useState(default_state);
    const curUpdateField = (fieldName) => (evt) => {
        setState({ 
            ...state, 
            [fieldName]: evt.target.value
        })
    }
    const handleSubmit = evt => {
      evt.preventDefault();
      // schema.isValid(state).then((result) => {});
      schema.validate(state).then((result) => {
        props.onSubmitBook({ ...state });
        setState(default_state);
      }).catch((err) => {
        // add the `err.errors` here into the state[errors]
        setState({...state, errors: err.errors })
        // console.log(err.name, err.errors);
      })
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
        <h1>Add A Book</h1>
        {state.errors.map((error,index)=> {
          return <li key ={index}>{error}</li>
        })}
        <label for="booktitle">Book Title</label>
         <input
          type="text"
          name="booktitle"
          placeholder="Harry Potter.."
          value={state.booktitle}
          onChange={curUpdateField("booktitle")}
        />
        <br />
        <label for="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          value={state.quantity}
          placeholder="15"
          onChange={curUpdateField("quantity")}
        />
        <br />
        <label for="author">Author</label>
        <input
          type="text"
          name="author"
          value={state.author}
          placeholder="J.K Rowling.."
          onChange={curUpdateField("author")}
        />
        <br />
        <label for="category">Category</label>
        <select name="category"
          onChange={curUpdateField("category")}>
          <option>Fantasy</option>
          <option>Sci-Fiction</option>
          <option>Adventure</option>
        </select>
        <br />
        <button className="add_book" type="submit">
          ADD BOOK
        </button>
      </form>
    )
}
