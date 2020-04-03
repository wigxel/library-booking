
import React from 'react';
import AddBook from './components/AddBookFunction'
import './App.css';
import Book from './components/Book'

function App() {
  // create a state
  const [state,setState]= React.useState([])
  const handleSubmitBook = (bookData) => {
    setState([ ...state, bookData ]);
    //console.log('Data was submited', bookData)
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
