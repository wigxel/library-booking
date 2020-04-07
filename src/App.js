
import React from 'react';
import './App.css';
import Book from './components/Book'
import AddBook from './components/AddBookFunction'
import Toggle from './components/Toggle'
import { Light, Dark } from './Theme';
import { ThemeProvider } from '@wigxel/react-components'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

//JSON.parse() // cast string -> object
// Retreive the existing data from localStorage
// Set that data as the default state for the App component
//localStorage.getItem("book") // string | null
//localStorage.getItem("users") // -> null
// useState | useEffect 

// persist data book state to localStorage
const data =  JSON.parse(localStorage.getItem("books"))
if (data) {
  data.map(book => {
    book.id = Symbol("id");
    return book
  })
}

function App() {
  const [state, setState] = React.useState(data? data :[])

  // create a state
  const [theme, setTheme] = React.useState(Light)

  // Context API
  return ( 
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <nav>
            <Link to="/home" className='nav_link'>
              Add Book
            </Link>
            <Link to="/books" className='nav_link'>
              All Books
            </Link>
      
          </nav>
        <div className='container'>
          
          {/* 
          /books
          /books -> /book  // passes
          /books/new -> /books // nope
          / -> /books  // passes 
          */}
          <Switch>
            <Route path="/books" component={() => <BooksPage state={state} setState={setState}/>} />
            <Route path="/books/new" component={() => <h1>New Book</h1>} />
            <Route path="/" component={() => <FormPage state={state} setState={setState} />} />
          </Switch>
          {/* <Toggle onClick={(state) => setTheme(state ? Light : Dark)} /> */}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const BooksPage = ({ state, setState }) => {
  const handleRemoveBook = (bookId)=>{
    //console.log(bookId)
    let newState = state.filter(book=> book.id !== bookId)
   // console.log(newState)
    setState(newState)
    localStorage.setItem("books", JSON.stringify(newState));
    
  }

  return (
  <section>
    <h1>Books</h1>
    {state.map((book, index) =>
      <Book key={index} {...book}  handleRemoveBook={handleRemoveBook}/>
    )}
  </section>
  );
}

const FormPage = ({ state, setState }) => {
  const handleSubmitBook = (bookData) => {
    const newState = [ ...state, bookData ]
    setState(newState);
    
    localStorage.setItem("books", JSON.stringify(newState));
  }
 return (
  <section>
    <AddBook onSubmitBook={handleSubmitBook}/>
  </section>
 );
}
export default App;
