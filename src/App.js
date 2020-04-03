
import React from 'react';
import AddBook from './components/AddBookFunction'
import './App.css';
import Book from './components/Book'
 

//JSON.parse() // cast string -> object
// Retreive the existing data from localStorage
// Set that data as the default state for the App component
localStorage.getItem("book") // string | null
//localStorage.getItem("users") // -> null
// useState | useEffect 

// persist data book state to localStorage

function App() {
  const data =  JSON.parse(localStorage.getItem("books"))
  // create a state
  const [state, setState] = React.useState(data ? data : [])

  const handleSubmitBook = (bookData) => {
    const newState = [ ...state, bookData ]
    setState(newState);
    
    localStorage.setItem("books", JSON.stringify(newState));
  }

  return ( 
    <div className='container'>
      <section>
        <AddBook onSubmitBook={handleSubmitBook}/>
      </section>

      <section>
        <h1>Books</h1>
        {state.map((book, index) =>
          <Book key={index} {...book} />
        )}
      </section>
    </div>
  );
}

export default App;
